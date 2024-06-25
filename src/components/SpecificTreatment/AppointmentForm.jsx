"use client";

import { FaUser, FaMobileAlt } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-[#F1F1F6] rounded-lg md:w-min-40 p-4 mb-3 fixed-0">
      <div className="text-xl text-center md:text-2xl font-medium text-brandColor py-2">
        BOOK AN APPOINTMENT
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-b border-slate-400/25"></div>
          </div>
        </div>
      </div>
      <form className="space-y-4 px-5 pb-3" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-3">
          <div className="relative flex-1">
            <div className="flex items-center relative group">
              <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                <FaUser className="h-5 w-5" />
              </span>
              <input
                required
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                placeholder="Your Name"
              />
            </div>
          </div>
          <div className="relative flex-1">
            <div className="flex items-center relative group">
              <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                <FaMobileAlt className="h-5 w-5" />
              </span>
              <input
                required
                id="contactNumber"
                type="text"
                value={formData.contactNumber}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                placeholder="Your Contact Number"
              />
            </div>
          </div>
          {/* <div className="relative flex-1">
            <div className="flex items-center relative group">
              <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                <IoMailOutline className="h-5 w-5" />
              </span>
              <input
                required
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="relative flex-1">
            <div className="flex items-center relative group">
              <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                <IoLocationOutline className="h-5 w-5" />
              </span>
              <input
                required
                id="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                placeholder="Location"
              />
            </div>
          </div> */}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="gap-[1rem] font-semibold rounded-[36px] w-full md:w-auto px-6 py-2 items-center transition border-gradient text-[#fff] hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
