import logo from "../assets/logo.png";
import Phone from "../assets/icons/phone.svg";

export const Navbar = () => {
    return (


        <nav className=" border-gray-200">
            <div className="basis-1/3 flex flex-wrap items-center justify-between py-4">
                <a href={logo} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../assets/logo.png" className="h-8 lg:h-12" alt="Flowbite Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 17 14">
                        <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="md:basis-2/3 hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-bold bg-white md:bg-transparent flex md:items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
                    <li>
                            <a href="#services" className="block py-2 px-3 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li>
                            <a href="#fleet" className="block py-2 px-3 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Fleet</a>
                        </li>
                        <li>
                            <a href="#coverage" className="block py-2 px-3 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Coverage</a>
                        </li>
                        <li>
                            <a href="#faq" className="block py-2 px-3 text-gray-900 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FAQ</a>
                        </li>
                        <li>
                            <a href="tel:+3102703561" className="flex text-gray-900 md:text-white flex-row whitespace-nowrap helvetia py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-200 md:p-0">
                                <img src={Phone} alt="" className="hidden md:block" />
                                +310 270-35 61
                            </a>
                        </li>
                        <div className="w-full ">
                            <a href="#bookride" className="mr-auto mt-2 md:mt-0 md:ml-auto md:mr-0 btn">Book Now</a>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>

    )
}