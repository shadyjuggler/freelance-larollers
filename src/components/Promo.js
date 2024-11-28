import corpIcon from "../assets/icons/corp.svg";
import contractIcon from "../assets/icons/contract.svg";
import carIcon from "../assets/icons/car.svg";
import humanIcon from "../assets/icons/human-white.svg";

export const Promo = () => {
    return (
        <div id="coverage" className="promo pb-20 lg:pb-36">
            <div className="bluebg py-10 sm:py-14 px-12 sm:px-16 rounded-2xl flex flex-wrap justify-between lg:justify-around gap-y-8 xl:justify-between">
                <div className="flex flex-col gap-2 px-0 sm:px-4 xl:px-0 basis-full sm:basis-1/2 xl:max-w-56">
                    <div className="flex gap-6">
                        <img src={corpIcon} alt="corp" />
                        <p className="text-white text-xl font-bold">Executive Car Service</p>
                    </div>  
                    <p className="text-white mt-6 text-lg">Reach your destination safely with a licensed, and professional chauffeur</p>
                </div>
                <div className="flex flex-col gap-2 px-0 sm:px-4 xl:px-0 basis-full sm:basis-1/2 xl:max-w-56">
                    <div className="flex gap-6">
                        <img src={contractIcon} alt="corp" />
                        <p className="text-white text-xl font-bold">Clear Pricing no Hidden Fees</p>
                    </div>  
                    <p className="text-white mt-6 text-lg">Know exactly what you’re paying for with our upfront, transparent pricing</p>
                </div>
                <div className="flex flex-col gap-2 px-0 sm:px-4 xl:px-0 basis-full sm:basis-1/2 xl:max-w-56">
                    <div className="flex gap-6">
                        <img src={carIcon} alt="corp" />
                        <p className="text-white text-xl font-bold">Cancellation Policy</p>
                    </div>  
                    <p className="text-white mt-6 text-lg">Get a full refund by cancelling your service  up to <span className="helvetia">2</span> hours prior to it</p>
                </div>
                <div className="flex flex-col gap-2 px-0 sm:px-4 xl:px-0 basis-full sm:basis-1/2 xl:max-w-56">
                    <div className="flex gap-6">
                        <img src={humanIcon} alt="corp" />
                        <p className="text-white text-xl font-bold">Meet and Greet Service</p>
                    </div>  
                    <p className="text-white mt-6 text-lg">Your chauffeur will meet you with a warm welcome and help with your luggage</p>
                </div>
            </div>
        </div>
    )
}