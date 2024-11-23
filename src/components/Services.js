import carImg from "../assets/car.png";
import planeIcon from "../assets/icons/plane-blue.svg";
import manIcon from "../assets/icons/man-blue.svg";
import humanIcon from "../assets/icons/human.svg";
import luggageIcon from "../assets/icons/luggage.svg";
import clockIcon from "../assets/icons/clock.svg";
import mapIcon from "../assets/icons/map.svg";

export const Services = () => {
    return (
        <div className="servies pb-20 lg:pb-36">
            <h2 className="text-4xl">Services</h2>
            <p className="mt-10 text-xl">We service all major airports LA. International airports: LAX, Burbank Bob Hop, Van Nuys Airport, SNA Airport, Long Beach Airport, Ontario Airport and all private airports</p>
            <p className="mt-4 text-xl">All major airports, pick ups require a fee that the city Of LA requires from all car service providers. If your
                flight is delayed for an extended period of time, we will be in touch to accommodate or cancel if
                necessary </p>

            <div className="mt-10 flex flex-col lg:flex-row justify-between">
                <img src={carImg} className="lg:max-w-xl xl:max-w-2xl lg:mx-0 mx-auto w-full max-w-lg" alt="car" />
                <div className="flex mt-8 lg:mt-0 flex-wrap justify-center lg:flex-col gap-8 py-4 lg:mr-10 xl:mr-32">
                    <div className="pl-6 sm:pl-0 basis-full sm:basis-1/3 lg:basis-auto flex gap-6  items-center">
                        <img src={planeIcon} className=" w-50" alt="plane" />
                        <p className="max-w-52 leading-6 text-xl font-bold">LA Airports Transportation </p>
                    </div>
                    <div className="pl-6 sm:pl-0 basis-full sm:basis-1/3 lg:basis-auto flex gap-6  items-center">
                        <img src={manIcon} className="w-50" alt="plane" />
                        <p className="max-w-52 leading-6 text-xl font-bold">Private Chauffeur </p>
                    </div>
                    <div className="pl-6 sm:pl-0 basis-full sm:basis-1/3 lg:basis-auto flex gap-6  items-center">
                        <img src={humanIcon} className="w-50" alt="plane" />
                        <p className="max-w-52 leading-6 text-xl font-bold">Meet and Greet </p>
                    </div>
                    <div className="pl-6 sm:pl-0 basis-full sm:basis-1/3 lg:basis-auto flex gap-6  items-center">
                        <img src={luggageIcon} className="w-50" alt="plane" />
                        <p className="max-w-52 leading-6 text-xl font-bold">Corporate & 
                        Business Travel </p>
                    </div>
                    <div className="pl-6 sm:pl-0 basis-full sm:basis-1/3 lg:basis-auto flex gap-6  items-center">
                        <img src={clockIcon} className="w-50" alt="plane" />
                        <p className="max-w-52 leading-6 text-xl font-bold">Hourly Car </p>
                    </div>
                    <div className="pl-6 sm:pl-0 basis-full sm:basis-1/3 lg:basis-auto flex gap-6  items-center">
                        <img src={mapIcon} className="w-50" alt="plane" />
                        <p className="max-w-52 leading-6 text-xl font-bold">Destination Tours </p>
                    </div>
                    <button className="text-xl mt-auto lg:mx-0 w-full lg:w-fit btn">Book Now</button>
                </div>
            </div>
        </div>
    )
}