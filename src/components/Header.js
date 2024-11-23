import { Navbar } from "./Navbar"

export const Header = () => {
    return (
        <div className="header h-screen pb-8">
            <div className="container h-full flex flex-col mx-auto px-4 sm:px-1">
                <Navbar />
                <div className="md:basis-1/2 mt-28 md:mt-auto flex flex-col">
                    <h1 className=" drop-shadow-lg  text-3xl md:text-6xl text-center md:text-left text-white">LA Rollers CAR SERV LLC </h1>
                    <h3 className=" drop-shadow-lg text-xl text-white mt-16 text-center md:text-left  md:mt-28">Experience Comfort and Reliability with Our Private Car Services</h3>
                    <div className="mt-16 md:mt-28 justify-center md:justify-start flex gap-2">
                        <button className="btn">Book Now</button>
                        <button className="btn">Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}