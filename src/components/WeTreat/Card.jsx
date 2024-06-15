import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = ({ image, title, description }) => {
  const [showOverLay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden h-[400px] min-w-[400px] bg-brandColor shadow-lg rounded-xl flex flex-col justify-center items-center p-4"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      
      <img
        src={image}
        alt={title}
        className="object-cover h-[200px] w-full rounded-md mb-4"
      />
      <h3 className="font-semibold text-lg mb-2 text-white">{title}</h3>
      <p className="text-white">{description}</p>
      <AnimatePresence>
        {showOverLay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            {/* <motion.div
              className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75 mb-5"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span className="text-brandColor">Explore Now</span>
            </motion.div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;