"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaUser, FaMobileAlt } from "react-icons/fa";

const AppointmentModal = ({ isOpen, setIsOpen }) => {
  return (
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
            className="rounded-lg w-full max-w-96 shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10 md:w-96">
              <div className="hero-content flex justify-center items-center">
                <div className="bg-[#F1F1F6] rounded-lg w-full">
                  <div className="text-2xl text-center md:text-3xl font-medium text-brandColor py-2">
                    BOOK AN APPOINTMENT
                    <div className="relative py-2">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-b border-slate-400/25"></div>
                      </div>
                    </div>
                  </div>
                  <form className="space-y-4 px-5 pb-3">
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
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center my-10">
                      <button
                        type="submit"
                        className="gap-[1rem] font-semibold rounded-[36px] mf:w-[200px] mf:px-[0rem] px-[0.8rem] py-[0.8rem]  items-center transition border-gradient text-[#fff] hover:scale-105"
                      >
                        Submit
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
  );
};

export default AppointmentModal;
