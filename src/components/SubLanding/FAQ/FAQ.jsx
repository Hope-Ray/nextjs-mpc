"use client";
// import Accordion from "@/components/Accordian/Accordian";
import Accordian2, { AccordianItem } from "@/components/Accordian2/Accordian2";
import { motion } from "framer-motion";

const FAQ = () => {
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
    <div className="py-[2rem]">
      <motion.div {...yAxisAnimation} className="pt-[1rem]">
        <h2 className=" text-brandColor text-[48px] font-medium text-center ">
          FAQs
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient"></div>
      </motion.div>
      <div className="max-w-full mx-auto mt-10 px-[5rem]">
        {/* <div className="p-4 bg-white rounded-lg">
          <Accordion
            title="Why you should choose MY PAIN CLINIC?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Accordion
            title="Why you should choose MY PAIN CLINIC?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Accordion
            title="What facilitites are provided"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Accordion
            title="MY PAIN CLINIC??"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div> */}

        <Accordian2 className="flex flex-col gap-3">
          <AccordianItem value='1'  trigger="Why you should choose MY PAIN CLINIC?">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam facilis placeat ex enim suscipit beatae voluptas quo consequatur reiciendis. Quis neque consectetur ducimus sit tempore qui quos sed. Consequuntur culpa mollitia voluptate, commodi est explicabo cum rerum placeat eveniet ullam incidunt possimus beatae necessitatibus neque reprehenderit, laboriosam dicta voluptatem maxime!
          </AccordianItem>
          <AccordianItem value='2'  trigger="What facilities are there in MY PAIN CLINIC?">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam facilis placeat ex enim suscipit beatae voluptas quo consequatur reiciendis. Quis neque consectetur ducimus sit tempore qui quos sed. Consequuntur culpa mollitia voluptate, commodi est explicabo cum rerum placeat eveniet ullam incidunt possimus beatae necessitatibus neque reprehenderit, laboriosam dicta voluptatem maxime!
          </AccordianItem>
          <AccordianItem value='3'  trigger="What are the policies for MY PAIN CLINIC?">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam facilis placeat ex enim suscipit beatae voluptas quo consequatur reiciendis. Quis neque consectetur ducimus sit tempore qui quos sed. Consequuntur culpa mollitia voluptate, commodi est explicabo cum rerum placeat eveniet ullam incidunt possimus beatae necessitatibus neque reprehenderit, laboriosam dicta voluptatem maxime!
          </AccordianItem>
          <AccordianItem value='4'  trigger="What are the policies for MY PAIN CLINIC?">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam facilis placeat ex enim suscipit beatae voluptas quo consequatur reiciendis. Quis neque consectetur ducimus sit tempore qui quos sed. Consequuntur culpa mollitia voluptate, commodi est explicabo cum rerum placeat eveniet ullam incidunt possimus beatae necessitatibus neque reprehenderit, laboriosam dicta voluptatem maxime!
          </AccordianItem>
        </Accordian2>
      </div>
    </div>
  );
};

export default FAQ;
