"use client";
import { motion } from "framer-motion";
import { FaRunning, FaHands } from "react-icons/fa";
import { ImUserCheck } from "react-icons/im";
import { GrUserExpert } from "react-icons/gr";
import Card from "../Card";

const Infographics = () => {
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
    <div className="px-5 md:px-[5rem] py-[2rem]">
      {/* <motion.div {...yAxisAnimation} className="pt-[1rem]">
        <h2 className=" text-brandColor text-[48px] font-medium text-center ">
          Infographics
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient"></div>
      </motion.div> */}
      <div>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-5">
          <Card
            title="Accurate Assessments"
            subtitle=""
            href="#"
            Icon={ImUserCheck}
          />
          <Card
            title="Precise Pain Solution"
            subtitle=""
            href="#"
            Icon={FaHands}
          />
          <Card
            title="Revolutionary Rehabilitation"
            subtitle=""
            href="#"
            Icon={FaRunning}
          />
          <Card
            title="Exceptional Expertise"
            subtitle=""
            href="#"
            Icon={GrUserExpert}
          />
        </div>
      </div>
    </div>
  );
};

export default Infographics;
