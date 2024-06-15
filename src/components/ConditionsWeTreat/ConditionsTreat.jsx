"use client";
import { motion } from "framer-motion";
import SlickSlider from "./SlickSlider";

const ConditionsTreat = ({ setIsOpen }) => {
  const team = [
    {
      id: 1,
      image: "/home_new/Neck.jpg",
      name: "Neck Pain",
      slug: "neck-pain",
    },
    {
      id: 2,
      image: "/home_new/back.jpg",
      name: "Back Pain",
      slug: "back-pain",
    },
    {
      id: 3,
      image: "/home_new/knee.jpg",
      name: "Knee Pain",
      slug: "knee-pain",
    },
    {
      id: 4,
      image: "/home_new/foot.jpg",
      name: "Foot Pain",
      slug: "foot-pain",
    },
    {
      id: 5,
      image: "/home_new/shoulder.jpg",
      name: "Shoulder Pain",
      slug: "shoulder-pain",
    },
    {
      id: 6,
      image: "/home_new/elbow.jpg",
      name: "Elbow Pain",
      slug: "elbow-pain",
    },
    {
      id: 7,
      image: "/home_new/hip.jpg",
      name: "Hip Pain",
      slug: "hip-pain",
    },
    {
      id: 8,
      image: "/home_new/wrist.jpg",
      name: "Wrist Pain",
      slug: "wrist-pain",
    },
    {
      id: 9,
      image: "/home_new/joint.jpg",
      name: "Joint Pain",
      slug: "joint-pain",
    },
    {
      id: 10,
      image: "/home_new/acl_tear_pain.jpg",
      name: "ACL Tear",
      slug: "acl-tear",
    },
    {
      id: 11,
      image: "/home_new/nerve_pain.jpg",
      name: "Nerve Pain",
      slug: "nerve-pain",
    },
    {
      id: 12,
      image: "/home_new/full Body.jpg",
      name: "Full Body Pain",
      slug: "full-body-pain",
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
    <div id="condition-we-treat relative">
      <motion.div
        {...yAxisAnimation}
        className="py-[1rem] md:grid md:grid-cols-3 gap-4"
      >
        <div></div>
        <div>
          <h2 className=" text-brandColor text-[48px] font-medium text-center">
            Conditions We Treat
          </h2>
          <div className=" w-[100px] h-[2px] mx-auto border-gradient"></div>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r bg-brandColor text-white font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity 
          md:mr-[5rem] "
          >
            And Many More
          </button>
        </div>
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
        <SlickSlider team={team} />
      </motion.div>
    </div>
  );
};

export default ConditionsTreat;
