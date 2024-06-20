"use client";
import { useState } from "react";
import Modal from "../Modal/Modal";
import TestimonialSlider from "./TestimonialCards/TestimonialsSlider";
import { motion } from "framer-motion";


const SubTestimonials = ({setIsOpen}) => {
  const team = [
    {
      id: 1,
      paragraph1: "",
      para2:
        "I recently visited here for a cryotherapy session, and I had a fantastic experience. The staff was incredibly friendly and helpful from the moment I walked in. They provided me with all the necessary information about the therapy and patiently answered all my questions.",
      name: "Jeshang Patil",
      rating: 5,
    },
    {
      id: 2,
      paragraph1: "",
      para2:
        "Excellent facilities for all sports rehab as well all pain managment …..well trained Doctors and a very friendly atmosphere. Loved the vibes at MPC.",
      name: "Max Merchant",
      rating: 5,
    },
    {
      id: 3,
      paragraph1: "",
      para2:
        "I am really impressed with the facilities here, they have all the modern machines and it's one of the best in business. I highly recommend it.",
      name: "Lalchand Rajput",
      rating: 5,
    },
    {
      id: 4,
      paragraph1: "",
      para2:
        "An amazing place for rejuvenation. Consultation based treatment, which happens onsite. Amazing and very proficient team of doctors and therapists. Highly recommended!!",
      name: "Shilad Marwah",
      rating: 5,
    },
    {
      id: 5,
      paragraph1: "",
      para2:
        "My Pain Clinic has been the best experience by far in Mumbai , they have international standard equipment and treatments , it’s a one stop clinic for pain and injury rehab",
      name: "Tanveer Khan",
      rating: 5,
    },
    {
      id: 6,
      paragraph1: "",
      para2:
        "As someone on a tight budget, I was relieved to find this clinic. Not only are their treatments effective, but they're also surprisingly affordable. It's a huge weight off my shoulders.",
      name: "Nirav Mehta",
      rating: 5,
    },
    {
      id: 7,
      paragraph1: "",
      para2:
        "I have tried other clinics in the past, but I always felt like I was paying too much for too little. That's not the case here. The prices are reasonable, and the results are impressive. Thank you My Pain Clinic Bandra west",
      name: "Vrushali Patil",
      rating: 5,
    },
    {
      id: 8,
      paragraph1: "",
      para2:
        "I've been struggling with shoulder pain for ages, but My Pain Clinic turned things around for me. The treatment they offered was a game-changer, and the staff was incredibly supportive. I can finally move freely without that constant ache.",
      name: "Verushka Ramnani",
      rating: 5,
    },
    {
      id: 9,
      paragraph1: "",
      para2: "Love cryo and HBOT making me feel energetic more friendly",
      name: "Smitesh Bandekar",
      rating: 5,
    },
    {
      id: 10,
      paragraph1: "",
      para2: "Great facility with good knowledgable doctors.",
      name: "Divyam Batra",
      rating: 5,
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
    <div id="testimonials" className="">
      <motion.div
        {...yAxisAnimation}
        className="py-[1rem] md:grid md:grid-cols-3 gap-4"
      >
        <div></div>
        <div>
          <h2 className=" text-brandColor text-[48px] font-medium text-center">
            Testimonials
          </h2>
          <div className=" w-[100px] h-[2px] mx-auto border-gradient"></div>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          
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
        <TestimonialSlider team={team} />
      </motion.div>
    </div>
  );
};

export default SubTestimonials;
