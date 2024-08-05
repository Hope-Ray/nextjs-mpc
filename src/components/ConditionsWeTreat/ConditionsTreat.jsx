"use client"
import { motion } from "framer-motion";
import SlickSlider from "./SlickSlider";


const ConditionsTreat = () => {
  const team = [
    {
      id: 1,
      image: '/home_new/Neck_pain_2.jpg',
      name: "Neck Pain",
      slug: "neck-pain",
    },
    {
      id: 2,
      image: '/home_new/Back_Pain_2.jpg',
      name: "Back Pain",
      slug: "back-pain",
    },
    {
      id: 3,
      image: '/home_new/Knee_Pain_2.jpg',
      name: "Knee Pain",
      slug: "knee-pain",
    },
    {
      id: 4,
      image: '/home_new/Foot_Pain_2.jpg',
      name: "Heel Spur",
      slug: "heel-spur",
    },
    {
      id: 5,
      image: '/home_new/Shoulder_Pain_2.jpg',
      name: "Frozen Shoulder",
      slug: "frozen-shoulder",
    },
    {
      id: 6,
      image: '/home_new/Elbow_Pain_2.jpg',
      name: "Elbow Pain",
      slug: "elbow-pain",
    },
    // {
    //   id: 7,
    //   image: '/home_new/hip.jpg',
    //   name: "Osteoarthritis",
    //   slug: "osteoarthritis",
    // },
    {
      id: 8,
      image: '/home_new/carple_tunnel_2.jpg',
      name: "Carpal Tunnel",
      slug: "carpal-tunnel-syndrome",
    },
    // {
    //   id: 9,
    //   image: '/home_new/joint.jpg',
    //   name: "Joint Dislocation",
    //   slug: "joint-dislocation",
    // },
    {
      id: 10,
      image: '/home_new/Acl_ mcl_2.jpg',
      name: "Acl / Mcl Tear",
      slug: "acl-tear",
    },
    {
      id: 11,
      image: '/home_new/siatica_2.jpg',
      name: "Sciatica",
      slug: "sciatica",
    },
    {
      id: 12,
      image: '/home_new/cervical_spondylosis_2.jpg',
      name: "Cervical Spondylosis",
      slug: "cervical-spondylosis",
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
        <SlickSlider team={team} />
      </motion.div>
    </div>
  );
}

export default ConditionsTreat