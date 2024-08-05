"use client";
import React, { useRef } from "react";
import {
  motion,
} from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { LuHeartPulse } from "react-icons/lu";

const ThankYouPage = () => {
  return (
    <div className="mt-[87px] min-h-[30rem] flex bg-brandColor">
      <TiltCard />
    </div>
  );
};

export default ThankYouPage;

const TiltCard = () => {
  const beatAnimation = {
    scale: [1, 1.3, 1], // Scale up, then down
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  };

  return (
    <motion.div className="relative min-h-[35rem] bg-brandColor flex justify-center items-center p-4 md:p-0  w-full bg-gradient-to-br from-brandColor to-brandColor">
      <div className="md:absolute inset-4 flex flex-col justify-center gap-6 rounded-xl bg-white shadow-lg p-8">
        <motion.div
          className="mx-auto text-[5rem] text-brandColor"
          animate={beatAnimation}
        >
          <LuHeartPulse />
        </motion.div>
        <div>
          <h1
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-5xl text-brandColor font-bold mb-4"
          >
            Thank You for Contacting <span className="font-futura">MY Pain Clinic</span>
          </h1>
          <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-lg text-brandColor font-thin"
          >
            Your response has been successfully submitted. Our team will reach
            out to you via email.
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="/"
            className="bg-brandColor font-semibold text-white rounded-full hover:opacity-90 transition-opacity px-4 py-2"
          >
            Go Back To Home
          </a>
        </div>
      </div>
    </motion.div>
  );
};
