// CustomNotification.jsx
import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const NOTIFICATION_TTL = 3000;

const CustomNotification = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-2 flex items-start rounded gap-2 text-xs md:text-lg whitespace-nowrap font-medium shadow-lg text-white bg-brandColor pointer-events-auto"
    >
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

export default CustomNotification;
