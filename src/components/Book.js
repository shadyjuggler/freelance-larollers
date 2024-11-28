import { useState, useRef, useEffect } from "react"
import person from "../assets/icons/passenger.svg"
import bag from "../assets/icons/bag.svg";
import date from "../assets/icons/date.svg";
import time from "../assets/icons/time.svg";
import clock from "../assets/icons/clock.svg";
import gmail from "../assets/icons/gmail-blue.svg";
import location from "../assets/icons/location-blue.svg";
import phone from "../assets/icons/phone-blue.svg";
import name from "../assets/icons/name.svg";
import stopIcon from "../assets/icons/stop.svg";
import deleteIcon from "../assets/icons/delete.svg";

import { CalendarInput } from "./Inputs/CalendarInput";
import { StringInput } from "./Inputs/StringInput";
import { NumberInput } from "./Inputs/NumberInput";
import { TimeInput } from "./Inputs/TimeInput";
import { Dd } from "./Inputs/Dd";
import { Stop } from "./Inputs/Stop";
import { DoubleInput } from "./Layouts/DoubleInput";
import { TripeInput } from "./Layouts/TripleInput";
import { Counter } from "./Inputs/Counter";
import { randomId } from "./helpers/randomId";
import { tab } from "@testing-library/user-event/dist/tab";
import { emailMessage } from "./helpers/emailMessage";

import { fetchPost } from "./helpers/postReq";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const tabData = [
    {
        tabName: "HOURLY"
    },
    {
        tabName: "ONE WAY"
    },
    {
        tabName: "ROUNDTRIP"
    }
];

export const Book = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [stops, setStops] = useState({});
    const formRef = useRef(null);
    const [isLoading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const onTabClick = (i) => {
        setCurrentTab(i);
    }


    const deleteStop = (index) => {
        const arr = Object.entries(stops);
        console.log(arr);
        const newArr = arr.filter(item => item[0] !== index);
        console.log(newArr);
        setStops(Object.fromEntries(newArr));
    };

    const addStop = () => {
        const stopId = randomId();
        if (Object.entries(stops).length < 5) {
            setStops({ ...stops, [stopId]: <Stop stopId={stopId} /> });
            console.log(stops);
            console.log(Object.entries(stops));
        } else {
            alert("Maximum of 5 stops reached!");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);

        const formObject = {};

        formData.forEach((value, key) => {

            // Sort stops
            if (key.split(":")[0] === "stop") {

                // Create the stops object which store all stops Ids and it's details
                if (!formObject.stops) formObject.stops = {};

                // Get the Id of stop from the input name
                const stopId = key.split(":")[1];

                // Get the type of stop e.g stop_in | duration | time
                const stopType = key.split(":")[2];

                // Check if current stop is present withing 'stops' object
                if (!formObject.stops[stopId]) formObject.stops[stopId] = {};

                // Assign stop detail
                formObject.stops[stopId][stopType] = value;
            }

            formObject[key] = value;
        });

        console.log(formObject);
        console.log(emailMessage(formObject));
        const html = emailMessage(formObject);

        const body = {
            subject: formObject.type,
            message: "very important",
            html
        }

        setSuccess(null);
        setLoading(true);
        const responce = await fetchPost(
            process.env.REACT_APP_API_URL,
            "send-email",
            JSON.stringify(body)
        );
        setLoading(false);

        if (responce.ok) {
            setSuccess(true);
        } else {
            setSuccess(false);
        }
    }

    return (
        <div className="book py-20 lg:py-36">
            <h2 className="text-4xl">Book your ride</h2>

            <div className="mt-8 ride rounded-xl p-4 sm:py-12 sm:px-12">

                {/* Form Switch Tabs */}
                <div className="tabs flex">
                    {
                        tabData.map((offer, i) => (
                            <button
                                key={Math.random()}
                                onClick={() => onTabClick(i)}
                                className={`basis-1/3 pb-2 md:pb-4 flex justify-center text-base mdtext-lg md:text-xl tab ${currentTab === i && "tab_active"}`}>
                                {offer.tabName}
                            </button>
                        ))
                    }
                </div>

                {/* Core form inputs */}
                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col md:flex-row gap-4 md:gap-8">
                    <input name={"type"} type="hidden" value={`${tabData[currentTab].tabName}`} />
                    <div className="basis-3/5">
                        {
                            currentTab === 0 ?
                                <div className="flex flex-col gap-6">
                                    <TripeInput>
                                        <CalendarInput key={"calenar_1"} icon={date} placeholder={"Date"} />
                                        <TimeInput key={"time_1"} name={"time"} icon={time} placeholder={"Time"} />
                                        <StringInput key={"duration_1"} name={"duration"} icon={clock} placeholder={"Duration"} />
                                    </TripeInput>
                                    <DoubleInput>
                                        <StringInput key={"pick_up_1"} name={"pick_up_address"} icon={location} placeholder={"Pick Up Address"} />
                                        <StringInput key={"drop_off_1"} name={"drop_off_address"} icon={location} placeholder={"Drop-off Address"} />
                                    </DoubleInput>
                                    <DoubleInput>
                                        <StringInput key={"email_1"} name={"email"} icon={gmail} placeholder={"Your Email"} />
                                        <StringInput key={"phone_1"} name={"phone"} icon={phone} placeholder={"Your Phone"} />
                                    </DoubleInput>
                                </div>
                                : currentTab === 1 ?
                                    <div className="flex flex-col gap-6">
                                        <TripeInput>
                                            <CalendarInput key={"calenar_2"} icon={date} placeholder={"Date"} />
                                            <TimeInput key={"time_2"} name={"time"} icon={time} placeholder={"Time"} />
                                            <StringInput key={"email_2"} name={"email"} icon={gmail} placeholder={"Email"} />

                                        </TripeInput>
                                        <DoubleInput>
                                            <StringInput key={"pick_up_2"} name={"pick_up_address"} icon={location} placeholder={"Pick Up Address"} />
                                            <StringInput key={"phone_2"} name={"phone"} icon={phone} placeholder={"Your Phone"} />

                                        </DoubleInput>
                                        <DoubleInput>
                                            <StringInput key={"drop_off_2"} name={"drop_off_address"} icon={location} placeholder={"Drop-off Address"} />
                                            <StringInput key={"name_2"} name={"name"} icon={name} placeholder={"Your Name"} />
                                        </DoubleInput>
                                    </div>
                                    :
                                    <div>
                                        <div className="flex flex-col gap-6">
                                            <TripeInput>
                                                <StringInput key={"email_3"} name={"email"} icon={gmail} placeholder={"Your Email"} />
                                                <StringInput key={"phone_3"} name={"phone"} icon={phone} placeholder={"Your Phone"} />
                                                <StringInput key={"name_3"} name={"name"} icon={name} placeholder={"Your Name"} />
                                            </TripeInput>
                                            <DoubleInput>
                                                <StringInput key={"pick_up_3"} name={"pick_up_address"} icon={location} placeholder={"Pick Up Address"} />
                                                <CalendarInput key={"calenar_3"} icon={date} placeholder={"Departure Date"} />
                                            </DoubleInput>
                                            <DoubleInput>
                                                <StringInput key={"drop_off_3"} name={"drop_off_address"} icon={location} placeholder={"Drop-off Address"} />
                                                <TimeInput key={"time_3"} name={"time"} icon={time} placeholder={"Time"} />
                                            </DoubleInput>
                                        </div>
                                    </div>
                        }

                        {/* Stops list */}
                        <div className={`flex flex-col gap-4 ${stops.length !== 0 && "mt-8"}`}>

                            {
                                Object.entries(stops).map((stop, index) => (
                                    <div key={stop[0]} className="stop helvetia relative">
                                        {stop[1]}
                                        <div className="sm:absolute flex justify-end mt-2 sm:mt-0 cursor-pointer sm:top-3 sm:-right-8">
                                            <img onClick={() => deleteStop(stop[0])} src={deleteIcon} alt="" />
                                        </div>
                                    </div>
                                ))}

                        </div>
                        <button
                            onClick={addStop}
                            type="button"
                            className="mt-4 colorblue text-lg font-black">
                            + add stop
                        </button>
                    </div>
                    <div className="basis-2/5 flex gap-6 flex-col items-center md:items-end">

                        <div className="flex w-full md:w-auto justify-start items-center gap-4 md:gap-0 lg:gap-4">
                            <img src={person} alt="person" className="lg:pr-0 md:pr-2 pr-0" />
                            <p className=" colorblue font-bold text-lg">Passnegers Count</p>
                            <Counter name={"passengers"} />
                        </div>
                        <div className="flex w-full md:w-auto justify-start items-center gap-4 md:gap-0 lg:gap-4">
                            <img src={bag} alt="person" className="lg:pr-0 md:pr-2 pr-0" />
                            <p className="colorblue font-bold text-lg">Luggages Number</p>
                            <Counter name={"luggage"} />
                        </div>

                        <div className="flex md:flex-row flex-col items-center gap-4 mt-4 md:mt-auto w-full md:w-auto">
                            {
                                success === null && isLoading ?
                                <p className={"text-lg text-gray-700"}>Loading...</p>
                                :
                                success && !isLoading ?
                                <p className="text-lg text-green-500">Email recieved!</p>
                                :
                                !success && success !== null && !isLoading ?
                                <p className="text-lg text-red-500">Error =(</p>
                                :
                                success === null && !isLoading ?
                                ""
                                :
                                ""
                            }
                            <button type="submit" className="btn w-full md:w-auto">Book Now</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}