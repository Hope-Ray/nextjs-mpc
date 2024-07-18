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
          "Enhance healing with oxygen therapy in a pressurised chamber, promoting muscle recovery, tissue repair, and immune system support. This therapy increases oxygen supply to tissues, aiding in faster healing and reducing inflammation, beneficial for conditions like non-healing wounds, chronic pain, and sports injuries.",
        btnText: "Hyperbaric Oxygen Therapy (Oxyhealth, USA)",
      },
      {
        id: 2,
        image: "/home_new/16 Pilates_11zon.jpg",

        description:
          "A system of exercise designed to strengthen core muscles and improve flexibility, Clinical Pilates alleviates back pain and enhances mobility. Tailored to individual needs, it focuses on controlled movements, proper alignment, and breathing techniques, making it effective for postural correction, injury prevention, and rehabilitation.",
        btnText: "Clinical Pilates (Balanced Body, USA)",
      },
      {
        id: 3,
        image: "/home_new/cryotherapy_1.png",

        description:
          "Provides whole-body exposure to extremely cold temperatures for a brief duration using liquid nitrogen vapour. This therapy is used for muscle recovery, pain relief, inflammation reduction, stress reduction, and improved sleep patterns. The cold exposure triggers the release of endorphins, reduces muscle soreness, and accelerates recovery after intense physical activity.",
        btnText: "Cryotherapy (Vacuactivus, USA)",
      },
      {
        id: 4,
        image: "/home_new/ice_bath_1.png",

        description:
          "Ice baths involve immersing the body in ice-cold water to reduce inflammation and soothe sore muscles, promoting faster recovery and pain relief. This modality is particularly effective for athletes and individuals with acute injuries, as it helps constrict blood vessels, reducing swelling and numbing nerve endings for pain relief.",
        btnText: "Ice Bath",
      },
      {
        id: 5,
        image: "/home_new/EMS_11zon.jpg",

        description:
          "EMS training uses electrical impulses to stimulate muscle contractions, reducing strain on joints and ligaments. It allows for targeted muscle stimulation, strengthening muscles, improving circulation, reducing pain, and promoting recovery. EMS is effective for rehabilitation, enhancing athletic performance, and muscle re-education post-injury.",
        btnText: "EMS Training",
      },
    ],
  };

  return (
    <div className="bg-white py-32 text-black" id="services">
      <div className="container mx-auto px-2 md:px-[5rem]">
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