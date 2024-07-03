"use client";
import { motion } from "framer-motion";
import SubSlickSlider from "./SlickSlider";

const SubConditionsTreat = ({ setIsOpen }) => {
  const team = [
    {
      id: 1,
      image: '/home_new/Neck.jpg',
      name: "Neck Pain",
      slug: "neck-pain",
    },
    {
      id: 2,
      image: '/home_new/back.jpg',
      name: "Back Pain",
      slug: "back-pain",
    },
    {
      id: 3,
      image: '/home_new/knee.jpg',
      name: "Knee Pain",
      slug: "knee-pain",
    },
    {
      id: 4,
      image: '/home_new/foot.jpg',
      name: "Heel Spur",
      slug: "heel-spur",
    },
    {
      id: 5,
      image: '/home_new/shoulder.jpg',
      name: "Frozen Shoulder",
      slug: "frozen-shoulder",
    },
  ];

  const yAxisAnimation = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
      delay: 0.2,
      y: { type: "spring", stiffness: 60 }, // Animating on the Y-axis
      opacity: { duration: 0.2 },
      ease: "easeIn",
      duration: 1,
    },
  };

  return (
    <div id="condition-we-treat">
      <motion.div {...yAxisAnimation} className="py-[1rem]">
        <h2 className=" text-brandColor text-[48px] font-medium text-center">
          Conditions We Treat
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient"></div>
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          delay: 0.4,
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className="mf:max-w-[90%] w-[95%] mx-auto"
      >
        <SubSlickSlider team={team} />
      </motion.div>
      <div className="flex justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r bg-brandColor text-white font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity mt-5 md:mt-0"
        >
          And Many More
        </button>
      </div>
    </div>
  );
};

export default SubConditionsTreat;
