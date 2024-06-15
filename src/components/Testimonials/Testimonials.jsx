"use client"
import TestimonialSlider from "./TestimonialCards/TestimonialsSlider";
import { motion } from "framer-motion";
const team = [
  {
    id: 1,
    paragraph1: "Exceptional services",
    para2:
      "I see an improvement in my skin and hair after doing the treatment. Keep up the great work Team Elixir!",
    name: "Sheela Saxsena",
    rating: 4,
  },
  {
    id: 2,
    paragraph1: "Very patient-friendly staff",
    para2:
      "After 3 weeks of having the drip I’m free from all arthritic pain in my body, and particularly my hands. I feel more energetic and my skin is glowing.",
    name: "Chiraj Shah",
    rating: 5,
  },
  {
    id: 3,
    paragraph1: "Great service. 10/10",
    para2:
      "Tanya and the team are extremely professional and warm! Glad to have elixir as part of my routine 😊",
    name: "Ninad Verma",
    rating: 4,
  },
  {
    id: 4,
    paragraph1: "Best clinic!!",
    para2:
      "After 3 weeks of having the drip I’m free from all arthritic pain in my body, and particularly my hands. I feel more energetic and my skin is glowing.",
    name: "Vivek Saahi",
    rating: 5,
  },
];

const Testimonials = () => {
  const styles = {
    borderTop: "1px solid",
    backgroundImage:
      "linear-gradient(283.4deg, #5BD6DD 23.54%, #036DED 70.28%)",
    backgroundClip: "border-box",
    backgroundOrigin: "border-box",
    border: "1px, 0px, 0px, 0px",
  };

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
    <div id="testimonials" className="py-[2rem]">
      <motion.div {...yAxisAnimation} className="py-[1rem]">
        <h2 className=" text-brandColor text-[48px] font-medium text-center ">
        Testimonials
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
        <TestimonialSlider team={team} />
      </motion.div>
    </div>
  );
};

export default Testimonials;
