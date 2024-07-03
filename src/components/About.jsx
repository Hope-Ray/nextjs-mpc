"use client";

import { motion } from "framer-motion";

const About = () => {
  const yAxisAnimation = {
    initial: { y: -100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: {
      delay: 0.6,
      y: { type: "spring", stiffness: 50 }, // Animating on the Y-axis
      opacity: { duration: 0.2 },
      ease: "easeIn",
      duration: 1,
    },
  };
  return (
    <div className=" relative py-[1rem] bg-[#F7F7FC] " id="about">
      <motion.div {...yAxisAnimation} className="py-[2rem]">
        <h2 className=" text-brandColor text-[48px] font-medium text-center ">
          About Us
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient  "></div>
      </motion.div>

      {/*  */}
      <motion.div
        initial={{ x: 200, y: -100, opacity: 0 }} // Set initial position to center
        whileInView={{ x: 0, y: 0, opacity: 1 }} // Move to center when in view
        viewport={{ once: false }}
        transition={{
          delay: 0.2, // Increased delay for smoother scrolling
          x: { type: "spring", stiffness: 60 }, // Reduced stiffness for smoother motion
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" flex md:flex-row flex-col gap-10 max-w-6xl 2xl:max-w-7xl mx-auto my-4"
      >
        <div className="h-3/6">
          <img
            src="/home_new/homeAboutBg.png"
            alt=""
            className="hidden md:block w-[40rem] h-[35rem] rounded-[20px] px-4 md:px-0"
          />
          <img
            src="/home_new/homeAboutBg.png"
            alt=""
            className="block md:hidden w-full h-auto rounded-[20px] px-4 md:px-0"
          />
        </div>
        <div className=" flex h-auto">
          <div className=" flex flex-col gap-[2rem] md:w-[540px] w-[95%] md:mx-0 mx-auto  md:text-xl text-lg  text-justify">
            <p>
            Welcome to MY PAIN CLINIC, a premier establishment under the esteemed banner of M/s. Global Body Fix, setting the gold standard for pain management and rehabilitation across the Asia-Pacific region.
            </p>
            <p>
            Nestled in the vibrant heart of Mumbai's Bandra-West, our clinic is more than just a healthcare facility; it's a sanctuary of advanced solutions and compassionate care. We seamlessly blend cutting-edge technology in Physiotherapy and Sports Rehabilitation with a commitment to your well-being.
            </p>
            <p>
            MY PAIN CLINIC stands at the forefront of clinical excellence, offering innovative pain management and rehabilitation solutions.
            </p>
            {/* <p>
              banner of M/s. Global Body Fix, setting the gold standard for pain
              management and rehabilitation across the Asia-Pacific region.
            </p>
            <p>
              Nestled in the vibrant heart of Mumbai's Bandra-West, our clinic
              is more than just a healthcare facility; it's a sanctuary of
              advanced solutions and compassionate care.
            </p>

            <p>
              We seamlessly blend cutting-edge technology in Physiotherapy and
              Sports Rehabilitation with a commitment to your well-being.
            </p>
            <p>
              My Pain Clinic stands at the forefront of clinical excellence,
              offering innovative pain management and rehabilitation solutions.
            </p> */}

            <div className=" flex gap-[2rem] md:flex-row flex-col md:justify-center  justify-center items-center">
              {/* <Btn
                onClick={() => setShow(!show)}
                text={"Learn more"}
                style={"border-gradient text-[#fff] hover:scale-105 "}
              /> */}
              <button className=" flex justify-center gap-[1rem] rounded-[7px] w-[140px] px-[0.8rem] py-[0.8rem] sm:p-2 items-center transition bg-brandColor text-[#fff] hover:scale-105">
                {" "}
                <a
                  href="/contactus"
                  className=" text-[14px] font-bold mf:block "
                >
                  Learn More
                </a>
              </button>
              {/* <Btn
                text={"How we work"}
                style={
                  "border_gradient  hovergradient hover:text-[#fff] hover:scale-105"
                }
              /> */}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
