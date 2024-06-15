import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };
    const toggleDropdown1 = (e) => {
        e.preventDefault();
        setIsOpen1(!isOpen1);
    };

    return (
        <div className="flex md:flex-row flex-col justify-between">
            <div className="relative md:w-1/2 w-full">
                <h2 className='md:text-2xl text-lg font-light'>Willing to work for 54 hours per week full-time</h2>
                <button
                    className="flex items-center border-b border-gray-300 focus:outline-none w-full"
                    onClick={toggleDropdown}
                >
                    <span className="mr-2 block py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545] bg-transparent border-0 border-b-2 border-[#BAC1C5] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter years of experience " >Enter years of experience</span>

                    <IoMdArrowDropdown />
                </button>
                {isOpen && (
                    <div className="absolute mt-2 w-full origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Option 1
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Option 2
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Option 3
                            </a>
                        </div>
                    </div>
                )}
            </div>
            <div className="relative  md:w-1/2 w-full">
                <h2 className='md:text-2xl text-lg font-light'>Registered with a council</h2>
                <button
                    className="w-full flex items-center  border-b border-gray-300 focus:outline-none"
                    onClick={toggleDropdown1}
                >
                    <span className="mr-2  py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545] bg-transparent border-0 border-b-2 border-[#BAC1C5] " pattern=" " placeholder="Enter years of experience" >Enter years of experience</span>
                    <span>
                        <IoMdArrowDropdown />
                    </span>

                </button>
                {isOpen1 && (
                    <div className="absolute mt-2 w-full origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Option 1
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Option 2
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Option 3
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
