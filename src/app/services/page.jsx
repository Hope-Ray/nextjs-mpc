'use client'
import { motion } from "framer-motion";

const ServicesPage = () => {
  const rightAxisAnimation = {
    initial:{ x: 100, opacity: 0 },
    whileInView:{ x: 0, opacity: 1 },
    viewport:{ once: false },
    transition:{
      delay: 0.5,
      x: { type: "spring", stiffness: 50 },
      opacity: { duration: 0.2 },
      ease: "easeIn",
      duration: 1.5,
    }
  };

  const leftAxisAnimation = {
    initial:{ x: -100, opacity: 0 },
    whileInView:{ x: 0, opacity: 1 },
    viewport:{ once: false },
    transition:{
      delay: 0.5,
      x: { type: "spring", stiffness: 50 },
      opacity: { duration: 0.2 },
      ease: "easeIn",
      duration: 1.5,
    }
  };

  const cardsData = {
    cards: [
      {
        id: 1,
        image: "/home_new/14 HBOT_11zon.jpg",
        description:
          "Enhance healing with oxygen therapy in a pressurised chamber promoting muscle recovery, tissue repair and immune system support.",
        btnText: "Hyperbaric Oxygen Therapy",
      },
      {
        id: 2,
        image: "/home_new/16 Pilates_11zon.jpg",

        description:
          "Pilates is a system of exercise designed to strengthen core muscles and improve flexibility as well as to alleviate back pain and enhance mobility.",
        btnText: "Pilates & Clinical Pilates",
      },
      {
        id: 3,
        image: "/home_new/cryotherapy_1.png",

        description:
          "Provides whole-body exposure to extremely cold temperatures for a brief duration with the help of liquid nitrogen in vapour form. This therapy is often used for muscle recovery, pain relief, inflammation reduction, reduced stress and improved sleeping patterns.",
        btnText: "Cryotherapy Chamber",
      },
      {
        id: 4,
        image: "/home_new/ice_bath_1.png",

        description:
          "Ice baths involve immersing the body in ice-cold water to reduce inflammation and soothe sore muscles promoting faster recovery and pain relief.",
        btnText: "Ice Bath",
      },
      {
        id: 5,
        image: "/home_new/EMS_11zon.jpg",

        description:
          "EMS training uses electrical impulses to stimulate muscle contractions and reduces strain on your joints and ligaments, it allows for targeted muscle stimulation. Strengthen muscles and improve circulation with targeted electrical stimulation, reducing pain and promoting recovery.",
        btnText: "EMS Training",
      },
    ],
  };

  return (
    <div className="bg-white py-32 text-black" id="services">
      <div className="container mx-auto px-[5rem]">
        <h2 className="text-5xl font-bold mb-8 text-center text-brandColor">Our Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {cardsData.cards.map((card, index) => (
            <div
              key={card.id}
              className={`flex flex-col gap-10 lg:flex-row  ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <motion.dev
                 {...(index % 2 === 0 ? rightAxisAnimation : leftAxisAnimation)}
                className={`flex-1 lg:${
                  index % 2 === 0 ? "pl-8" : "pr-8"
                } mb-8 lg:mb-0`}
              >
                <h3 className={`text-2xl font-semibold mb-4 ${
                  index % 2 === 0 ? "" : "text-right"
                }`}>{card.btnText}</h3>
                <p style={{ textAlign: "justify" }} className="text-gray-700 text-lg">
                  {card.description}
                </p>
              </motion.dev>
              <motion.div
                {...(index % 2 === 0 ? leftAxisAnimation : rightAxisAnimation)}
                className={`flex-1 lg:${
                  index % 2 === 0 ? "pr-8" : "pl-8"
                } relative`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className={`w-full h-80 object-cover shadow-md ${
                    index % 2 === 0 ? "rounded-l-full" : "rounded-r-full"
                  }`}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage