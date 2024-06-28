"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUsContent = () => {
  const yAxisAnimation = {
    initial: { y: -100, opacity: 0 },
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
    <section>
      <motion.div {...yAxisAnimation} className="pt-[3rem]" id="about-us">
        <h2 className=" text-brandColor text-[48px] font-medium text-center">
          About Us
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient  "></div>
      </motion.div>

      <main className="relative py-[5.5rem] min-h-[35rem] bg-brandColor flex">
        <div
          className="absolute top-0 left-[-300px] right-[-300px] bg-white"
          style={{
            borderRadius: "0 0 50% 50% / 0 0 100% 100%",
            zIndex: "5",
            height: "4rem",
          }}
          id="curv-top"
        ></div>
        <div className="flex w-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex-1 flex justify-center items-center p-4 text-white"
          >
            <div className="">
              <p className="text-3xl">YOUR JOURNEY TO A</p>
              <p className="text-4xl font-semibold whitespace-nowrap">
                PAIN-FREE, VIBRANT LIFE
              </p>
              <p className="text-3xl">BEGINS HERE</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex-1 p-4 text-white"
          >
            <div className="flex flex-col gap-4 text-justify">
              <p>
                Welcome to My Pain Clinic, your ultimate destination for
                comprehensive assessment, rehabilitation, and recovery. Founded
                under the esteemed banner of M/s. Global Body Fix with the
                vision of creating a one-stop shop for all your pain management
                needs, we are dedicated to helping you live a pain-free life.
                Our state-of-the-art clinic brings together cutting-edge
                modalities from around the globe, ensuring we can treat pain in
                any part of the body with unmatched precision and care.
              </p>
              <p>
                What sets us apart is our all-inclusive approach. With a
                multi-specialty team of experts and cutting-edge technologies
                under one roof, we provide a seamless and holistic experience
                for our patients. Whether you are suffering from chronic pain or
                looking to prevent future injuries, our personalized treatment
                plans, crafted by our consulting doctors, ensure that every
                individual's unique needs are met.
              </p>
              <p>
                Whether you're dealing with chronic pain or looking to enhance
                your overall well-being, My Pain Clinic is here to support you.
                Join us and experience the difference that cutting-edge
                technology and compassionate care can make in your journey to a
                pain-free life.
              </p>
            </div>
          </motion.div>
        </div>
        <div
          className="absolute bottom-0 left-[-300px] right-[-300px] bg-white"
          style={{
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            zIndex: "5",
            height: "4rem",
          }}
          id="curv-top"
        ></div>
      </main>
      <div className="px-[5rem] mb-[6rem]">
        <div className="flex w-full gap-4">
          <div className="flex-1">
            <div className="text-4xl mb-4 text-brandColor">Our Mission</div>
            <div className="text-justify text-base">
              At My Pain Clinic, our mission is simple yet profound: to improve
              the lives of everyone in pain. We strive to be a beacon of hope
              and relief, offering innovative treatments and compassionate care
              to those in need. Our approach is grounded in recognizing and
              understanding each individual's unique pain, allowing us to tailor
              our treatments for optimal outcomes. Day by day, we are dedicated
              to making a positive impact on the lives of our patients,
              empowering them to reclaim their comfort and vitality.
            </div>
          </div>
          <div className="flex-1">
            <div className="text-4xl mb-4 text-brandColor">Our Vision</div>
            <div className="text-justify text-base">
              Our vision is to be the global frontrunner in pain management,
              setting new standards of excellence in the industry. We envision
              expanding our reach with multiple treatment centres, making our
              revolutionary approach to pain relief accessible to more people
              around the world. We are committed to continual innovation and
              growth, ensuring that My Pain Clinic remains at the forefront of
              advancements in pain management and rehabilitation. Join us on
              this journey to a brighter, pain-free future.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContent;
