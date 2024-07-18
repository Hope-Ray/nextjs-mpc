"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaUser, FaMobileAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import CustomNotification from "../CustomNotification";

const AppointmentModal = ({ isOpen, setIsOpen }) => {
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="rounded-lg w-full md:max-w-[27rem] shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="hero-content flex justify-center items-center">
                <div className="bg-[#F1F1F6] rounded-lg w-full">
                  <div className="text-xl text-center md:text-3xl font-medium text-brandColor py-2">
                    <span className="whitespace-nowrap flex items-center justify-around">BOOK AN APPOINTMENT<RxCross1 role="button" onClick={() => setIsOpen(false)}/></span>
                    <div className="relative py-2">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-b border-slate-400/25"></div>
                      </div>
                    </div>
                  </div>
                  <form className="space-y-4 px-5 pb-3" onSubmit={handleSubmit}>
                    <div className="flex space-x-4">
                      <div className="relative flex-1">
                        <label className="block text-left text-lg font-normal text-gray-700">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 flex items-center relative group">
                          <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                            <FaUser className="h-5 w-5" />
                          </span>
                          <input
                            required
                            id="first-name"
                            aria-required="true"
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                            placeholder=""
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="relative flex-1">
                        <label className="block text-left text-lg font-normal text-gray-700">
                          Number <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 flex items-center relative group">
                          <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                            <FaMobileAlt />
                          </span>
                          <input
                            required
                            id="email"
                            aria-required="true"
                            type="number"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                            placeholder=""
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center my-10">
                      <button
                        type="submit"
                        disabled={loading}
                        className="gap-[1rem] font-semibold rounded-[36px] mf:w-[200px] mf:px-[0rem] px-[0.8rem] py-[0.8rem]  items-center transition border-gradient text-[#fff] hover:scale-105"
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    <div className="fixed top-2 right-[10%] md:top-[20px] md:right-6 z-50 pointer-events-none flex flex-col gap-1 min-w-72">
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

export default AppointmentModal;
