'use client'

import { motion } from 'framer-motion';


const yAxisAnimation = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
        delay: 0.8,
        y: { type: "spring", stiffness: 60 }, // Animating on the Y-axis
        opacity: { duration: 0.2 },
        ease: "easeIn",
        duration: 1,
    },
};
const WhyMpc = () => {
    const styles = {
        borderTop: '1px solid',
        backgroundImage: 'linear-gradient(283.4deg, #5BD6DD 23.54%, #036DED 70.28%)',
        backgroundClip: 'border-box',
        backgroundOrigin: 'border-box',
        border: "1px, 0px, 0px, 0px",
    };

    const yAxisAnimation = {
        initial: { y: -200, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        transition: {
          delay: 0.8,
          y: { type: "spring", stiffness: 40 }, // Animating on the Y-axis
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        },
      };
    return (
      <div>
        <motion.div {...yAxisAnimation} className="py-[3rem]">
          <h2 className=" text-brandColor text-[48px] font-medium text-center">
          Why MY PAIN CLINIC
          </h2>
          <div className=" w-[100px] h-[2px] mx-auto border-gradient  "></div>
        </motion.div>
      </div>
    );
}

export default WhyMpc;