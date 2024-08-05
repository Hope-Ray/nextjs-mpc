"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
        <div className="">
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
          <div className=" flex flex-col gap-6 md:w-[540px] w-[95%] md:mx-0 mx-auto  md:text-base text-base text-justify">
            <p>
              Welcome to{" "}
              <span className="font-futura_light font-thin">
                MY PAIN CLINIC
              </span>
              , a distinguished leader in pain management, sports rehabilitation
              and wellness services. Located in the bustling heart of Bandra
              West, our clinic epitomises advanced healthcare solutions and
              compassionate patient care. We pride ourselves on utilising the
              latest USA and Europe-based technology and evidence-based
              practices, following international protocols, to address your
              needs, whether you're dealing with complex chronic pain, managing
              a sports injury, or recovering from surgery.
            </p>
            <p>
              At{" "}
              <span className="font-futura_light font-thin">
                MY PAIN CLINIC
              </span>
              , we specialise in non-invasive and drug-free treatments, focusing
              on complete care that promotes long-term recovery and improved
              quality of life. Our team of specialised doctors and experts are
              dedicated to crafting personalised treatment plans tailored to
              your unique needs. We excel in enhancing functional mobility and
              addressing systemic illnesses that impact overall well-being. Our
              multidisciplinary approach ensures that we not only alleviate
              symptoms but also empower you with the knowledge and tools needed
              to actively participate in your healing journey.
            </p>
            <p>
              More than just a healthcare facility,{" "}
              <span className="font-futura_light">MY PAIN CLINIC</span>
              {" "} is a sanctuary where care meets excellence. Our commitment extends
              beyond borders, setting benchmarks in pain management and
              rehabilitation. Whether you're seeking relief from persistent pain
              or striving to regain optimal function, MY PAIN CLINIC is here to
              provide unwavering support and innovative solutions tailored to
              your individual health goals.
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
                <Link
                  href="/contactus"
                  className=" text-[14px] font-bold mf:block "
                >
                  Learn More
                </Link>
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
