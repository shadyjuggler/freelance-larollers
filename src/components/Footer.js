import logo from "../assets/logo-big.png";
import location from "../assets/icons/location.svg";
import phone from "../assets/icons/phone.svg";
import facebook from "../assets/icons/facebook.svg";
import gmail from "../assets/icons/gmail.svg";

export const Footer = () => {
    return (
        <div className="footer rounded-t-2xl bluebg p-6 md:p-16">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div className="basis-1/2 order-3 lg:order-1">
                        <img src={logo} style={{ maxWidth: "448px" }} alt="logo" className="w-full mt-20" />
                    </div>
                    <div className="basis-1/4 order-1 lg:order-2">
                        <ul className="flex flex-col gap-6 text-white font-bold text-xl">
                            <li>
                                <a className="text-xl md:text-2xl" href="#services">Services</a>
                            </li>
                            <li>
                                <a className="text-xl md:text-2xl" href="#fleet">Fleet</a>
                            </li>
                            <li>
                                <a className="text-xl md:text-2xl" href="#coverage">Coverage <br /> Area</a>
                            </li>
                            <li>
                                <a className="text-xl md:text-2xl" href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-12 lg:mt-0 basis-1/4 order-2 lg:order-3">
                        <ul className="flex flex-col gap-6 text-white font-bold text-xl">
                            <li className="text-xl md:text-2xl flex gap-2">
                                <img src={location} className="w-6" alt="loation" />
                                West Hollywood, CA
                            </li>
                            <li>
                                <p className="helvetia">T C P 45457-B</p>
                            </li>
                            <li className="text-xl md:text-2xl flex gap-2">
                                <img src={phone} className="w-6" alt="phone" />
                                <a href="tel:+3102703561" className="helvetia font-bold">+310 270-35 61</a>
                            </li>
                        </ul>
                        <div className="mt-8 flex gap-8 justify-start lg:justify-end">
                            <a href="https://www.facebook.com/profile.php?id=61565850575310" target="_blank">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="mailto:larollerscarservice@gmail.com">
                                <img src={gmail} alt="facebook" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex-col-reverse sm:flex-row justify-between">
                    <p className="text-white">LA. Rollers. Carservice. LLC.</p>
                    <p className="text-white">All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}