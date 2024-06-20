"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";


const StaggeredDropDown = ({ optionsList, buttonName }) => {
  const [selectedOption, setSelectedOption] = useState(buttonName);
  const [open, setOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option.text); 
    console.log(option.text);
    setOpen(false);
    option.onClick && option.onClick();
  };

  const handleDropdownClick = (event) => {
    event.preventDefault(); // Prevent default button behavior (form submission)
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={handleDropdownClick}
        className="flex items-center justify-between w-full px-3 py-2 rounded-md border border-gray-300 text-gray-500 bg-white hover:bg-white transition-colors"
      >
        <span className="font-medium text-sm">{selectedOption}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }}>
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        animate={open ? "open" : "closed"}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-[100%] overflow-hidden z-50"
      >
        {optionsList.map((option, index) => (
          <Option
            key={index}
            text={option.text}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </motion.ul>
    </div>
  );
};

const Option = ({ text, onClick }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={onClick}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};
