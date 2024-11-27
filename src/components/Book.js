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
    const [pasengerCount, setPassengerCount] = useState(0);
    const [bagCount, setBaggageCount] = useState(0);
    const [stops, setStops] = useState({});

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
        const stopId = Math.random();
        if (Object.entries(stops).length < 5) {
            setStops({ ...stops, [stopId]: <Stop id={stopId} /> });
            console.log(stops);
            console.log(Object.entries(stops));
        } else {
            alert("Maximum of 5 stops reached!");
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
                <div className="mt-12 flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="basis-3/5">
                        {
                            currentTab === 0 ?
                                <div className="flex flex-col gap-6">
                                    <TripeInput>
                                        <CalendarInput key={"datekey"} icon={date} placeholder={"Date"} />
                                        <TimeInput icon={time} placeholder={"Time"} />
                                        <StringInput icon={clock} placeholder={"Duration"} />
                                    </TripeInput>
                                    <DoubleInput>
                                        <StringInput icon={location} placeholder={"Pick Up Address"} />
                                        <StringInput key={Math.random()} icon={location} placeholder={"Drop-off Address"} />
                                    </DoubleInput>
                                    <DoubleInput>
                                        <StringInput icon={gmail} placeholder={"Your Email"} />
                                        <StringInput icon={phone} placeholder={"Your Phone"} />
                                    </DoubleInput>
                                </div>
                                : currentTab === 1 ?
                                    <div className="flex flex-col gap-6">
                                        <TripeInput>
                                            <CalendarInput key={"datekey"} icon={date} placeholder={"Date"} />
                                            <TimeInput icon={time} placeholder={"Time"} />
                                            <StringInput icon={gmail} placeholder={"Email"} />

                                        </TripeInput>
                                        <DoubleInput>
                                            <StringInput icon={location} placeholder={"Pick Up Address"} />
                                            <StringInput icon={phone} placeholder={"Your Phone"} />

                                        </DoubleInput>
                                        <DoubleInput>
                                            <StringInput icon={location} placeholder={"Drop-off Address"} />
                                            <StringInput icon={name} placeholder={"Your Name"} />
                                        </DoubleInput>
                                    </div>
                                    :
                                    <div>
                                        <div className="flex flex-col gap-6">
                                            <TripeInput>
                                                <StringInput icon={gmail} placeholder={"Your Email"} />
                                                <StringInput icon={phone} placeholder={"Your Phone"} />
                                                <StringInput icon={name} placeholder={"Your Name"} />
                                            </TripeInput>
                                            <DoubleInput>
                                                <StringInput icon={location} placeholder={"Pick Up Address"} />
                                                <CalendarInput icon={date} placeholder={"Departure Date"} />
                                            </DoubleInput>
                                            <DoubleInput>
                                                <StringInput icon={location} placeholder={"Drop-off Address"} />
                                                <TimeInput icon={time} placeholder={"Time"} />
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
                            className="mt-4 colorblue text-lg font-black">
                            + add stop
                        </button>
                    </div>
                    <div className="basis-2/5 flex gap-6 flex-col items-center md:items-end">

                        <div className="flex w-full md:w-auto justify-start items-center gap-4 md:gap-0 lg:gap-4">
                            <img src={person} alt="person" className="lg:pr-0 md:pr-2 pr-0" />
                            <p className=" colorblue font-bold text-lg">Passnegers Count</p>
                            <Counter/>
                        </div>
                        <div className="flex w-full md:w-auto justify-start items-center gap-4 md:gap-0 lg:gap-4">
                            <img src={bag} alt="person" className="lg:pr-0 md:pr-2 pr-0" />
                            <p className="colorblue font-bold text-lg">Luggages Number</p>
                            <Counter/>
                        </div>

                        <button className="btn w-full md:w-auto mt-4 md:mt-auto">Book Now</button>

                    </div>
                </div>
            </div>
        </div>
    )
}