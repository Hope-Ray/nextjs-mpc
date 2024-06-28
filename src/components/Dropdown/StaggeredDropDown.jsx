"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const StaggeredDropDown = ({ options, setOpen }) => {
  return (
    <motion.ul
      initial={wrapperVariants.closed}
      variants={wrapperVariants}
      style={{ originY: "top", translateX: "-50%" }}
      className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
    >
      {options.map((option, index) => (
        <Option key={index} text={option.text} linkTo={option.linkTo} setOpen={setOpen} />
      ))}
    </motion.ul>
  );
};

const Option = ({ text, linkTo, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <Link href={linkTo}>
        <span>{text}</span>
      </Link>
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