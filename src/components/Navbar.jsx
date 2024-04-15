import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <header className="p-4 text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className="flex">
                        <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 text-3xl font-medium">
                            Fibery
                        </a>
                        {/* Laptop screen */}
                        <ul className="items-stretch hidden space-x-5 lg:flex">
                            <li className="flex">
                                <select name="cars" id="cars">
                                    <option value="volvo">Solutions</option>

                                </select>
                            </li>
                            <li className="flex">
                                <select name="cars" id="cars">
                                    <option value="volvo">Product</option>

                                </select>
                            </li>
                            <li className="flex">
                                <select name="cars" id="cars">
                                    <option value="volvo">Resources</option>

                                </select>
                            </li>
                            <li className="flex">
                                <Link to='/' className='flex items-center px-4 md:px-1 -mb-1 border-b-2 border-transparent'>Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="items-center flex-shrink-0 hidden lg:flex gap-4">
                        <button className="px-5 py-2 font-semibold rounded bg-transparent text-[#212529]">Login</button>
                        <button className="px-5 py-2 font-semibold rounded bg-transparent border-[#212529] border text-[#212529]">Get a demo</button>
                        <button className="px-5 py-2 font-semibold rounded bg-[#212529] text-gray-50">Sign up</button>
                    </div>
                    <button className="p-4 flex lg:hidden text-4xl absolute right-0 z-10"
                        onClick={() => setOpen(!open)}
                    >

                        {open ? <IoMdClose /> :
                            <RxHamburgerMenu />}
                    </button>
                    {open &&
                        (
                            <div className='absolute -right-5 md:-left-28 h-screen bg-teal-100 w-screen transition ease-out duration-100 transform'>
                                {/* hidden lg: */}
                                <ul className="space-y-5 flex flex-col items-center absolute left-44 md:left-96 top-52 text-2xl">
                                    <li className="flex">
                                        <select name="cars" id="cars">
                                            <option value="volvo">Solutions</option>

                                        </select>
                                    </li>
                                    <li className="flex">
                                        <select name="cars" id="cars">
                                            <option value="volvo">Product</option>

                                        </select>
                                    </li>
                                    <li className="flex">
                                        <select name="cars" id="cars">
                                            <option value="volvo">Resources</option>

                                        </select>
                                    </li>
                                    <li className="flex">
                                        <Link to='/' className='flex items-center px-4 md:px-1 -mb-1 border-b-2 border-transparent'>Pricing</Link>
                                    </li>

                                </ul>
                                <div className="flex flex-col items-center absolute flex-shrink-0 top-[550px] left-[170px] md:left-[380px] gap-3  lg:flex ">
                                    <button className="px-5 py-2 font-semibold rounded bg-transparent text-[#212529]">Login</button>
                                    <button className="px-5 py-2 font-semibold rounded bg-transparent border-[#212529] border text-[#212529]">Get a demo</button>
                                    <button className="px-5 py-2 font-semibold rounded bg-[#212529] text-gray-50">Sign up</button>
                                </div>
                            </div>
                        )}
                </div>
            </header>
        </div>
    );
};

export default Navbar;