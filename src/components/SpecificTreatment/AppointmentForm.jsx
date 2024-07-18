"use client";

import { FaUser, FaMobileAlt } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import CustomNotification from "../CustomNotification";
import { AnimatePresence, motion } from "framer-motion";

const AppointmentForm = () => {
  const [notifications, setNotifications] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    number: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { firstName, number } = formData;
    const queryString = new URLSearchParams({
      first_name: firstName,
      phone_number: number,
    }).toString();

    const apiUrl = `https://mypainclinicglobal.com/send_email/index.php?${queryString}`;

    try {
      const response = await fetch(apiUrl, { method: "GET" });
      if (response.ok) {
        // alert("Form submitted successfully!");
        addNotification(`Form submitted successfully`);
      } else {
        // alert("Failed to submit the form.");
        addNotification("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert("An error occurred. Please try again.");
      addNotification("An error occurred. Please try again.");
    } finally {
      setFormData({
        firstName: "",
        number: "",
      });
      setLoading(false);
    }
  };

  const addNotification = (text) => {
    const id = Math.random();
    setNotifications((prev) => [...prev, { id, text }]);
  };

  const removeNotif = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <>
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
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                  placeholder="Your Name"
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
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
                  type="number"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                  placeholder="Your Contact Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
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
              disabled={loading}
              className="gap-[1rem] font-semibold rounded-[36px] w-full md:w-auto px-6 py-2 items-center transition border-gradient text-[#fff] hover:scale-105"
            >
              {loading ? (
                        <span className="loader">
                          <span class="">Loading...</span>
                        </span> // Add your loader here
                      ) : (
                        "Submit"
                      )}
            </button>
          </div>
        </form>
      </div>
      <div className="fixed top-2 right-[90%] md:top-[90px] md:right-6 z-50 pointer-events-none flex flex-col gap-1 min-w-72">
        <AnimatePresence>
          {notifications.map((n) => (
            <CustomNotification 
              key={n.id}
              text={n.text}
              id={n.id}
              removeNotif={removeNotif}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AppointmentForm;
