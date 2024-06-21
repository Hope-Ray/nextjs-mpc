"use client";

import { motion } from "framer-motion";

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
const WhyMpc = ({setIsOpen}) => {


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
      <motion.div {...yAxisAnimation} className="py-[1rem]">
        <h2 className=" text-brandColor text-[48px] font-medium text-center">
          Why MY PAIN CLINIC
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient"></div>
      </motion.div>
      <div className="bg-[#E4E4F1]">
        <div className="max-w-7xl py-6 mx-auto w-[90%] grid grid-cols-1 md:grid-cols-4 gap-4 ">
          <div className="p-2">
            <h2 className="md:text-2xl text-lg text-[#000000] font-medium my-3 text-center">
              Specialized Expertise
            </h2>
            <p className="text-[#454545] md:text-base text-sm font-normal text-justify">
              Our center excels in identifying and treating conditions for all
              ages, including hypermobility, scoliosis, and various injuries. We
              also manage arthritic and degenerative conditions, improving
              quality of life.
            </p>
          </div>
          <div className="p-2">
            <h2 className="md:text-2xl text-lg text-[#000000] font-medium my-3 text-center">
              Sports Excellence
            </h2>
            <p className="text-[#454545] md:text-base text-sm font-normal text-justify">
              Utilize diagnostics like OptoGait and WiTTy for gait analysis and
              cognitive training. Endorsed by athletes such as Neymar Jr. and
              Lionel Messi, our solutions enhance muscle recovery and
              performance.
            </p>
          </div>
          <div className="p-2">
            <h2 className="md:text-2xl text-lg text-[#000000] font-medium my-3 text-center">
              Advanced Treatments
            </h2>
            <p className="text-[#454545] md:text-base text-sm font-normal text-justify">
              Experience cutting-edge treatments like robotic spinal alignment,
              photobiomodulation, and hyperbaric oxygen therapy. Our modern
              techniques ensure optimal recovery and health outcomes.
            </p>
          </div>
          <div className="p-2">
            <h2 className="md:text-2xl text-lg text-[#000000] font-medium my-3 text-center">
              Comprehensive Care
            </h2>
            <p className="text-[#454545] md:text-base text-sm font-normal text-justify">
              From women&apos;s health to neuroscience excellence, we offer
              tailored services including cardiopulmonary rehab, sports-centric
              rehab, hydrotherapy, and physiotherapy.
            </p>
          </div>
        </div>
        <div className="max-w-7xl pb-6 mx-auto w-[90%] grid grid-cols-1 md:grid-cols-4 gap-4 mt-4"></div>
        <div className="w-full flex justify-center pb-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r bg-brandColor text-white font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity mt-5 md:mt-0"
        >
          And Many More
        </button>
        </div>
      </div>
      <div className="flex justify-center py-4">
        
      </div>
    </div>
  );
};

export default WhyMpc;
