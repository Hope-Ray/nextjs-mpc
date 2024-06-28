"use client"
import { motion } from "framer-motion";
import TreatmentSlider from "./TreatmentSlider";

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

const Benefits = () => {
  const cardsData = {
    cards: [
      {
        id: 1,
        image: "/home_new/14 HBOT_11zon.jpg",
        description:
          "Enhance healing with oxygen therapy in a pressurised chamber promoting muscle recovery, tissue repair & immune system support.",
        btnText: "Hyperbaric Oxygen Therapy",
        listArray: [
          "Increases Oxygen Levels",
          "Enhances Tissue Healing",
          "Reduces Inflammation",
          "Improves Blood Circulation",
          "Supports Wound Healing",
          "Accelerates Recovery",
          "Boosts Immune System Function",
          "Reduces Effects of Radiation Therapy",
          "Enhances Brain Function",
          "Alleviates Symptoms of Chronic Fatigue Syndrome",
          "Non-invasive Treatment",
          "Supports Treatment of Decompression Sickness",
        ],
      },
      {
        id: 2,
        image: "/home_new/16 Pilates_11zon.jpg",

        description:
          "Pilates is a system of exercise designed to strengthen core muscles & improve flexibility as well as to alleviate back pain & enhance mobility.",
          listArray: [
            "Improves Flexibility",
            "Increases Core Strength",
            "Enhances Posture",
            "Reduces Back Pain",
            "Promotes Muscle Tone",
            "Enhances Balance & Coordination",
            "Supports Injury Prevention",
            "Improves Mental Focus",
            "Reduces Stress",
            "Boosts Energy Levels",
            "Enhances Body Awareness",
            "Promotes Weight Management",
          ],
        btnText: "Pilates & Clinical Pilates",
      },
      {
        id: 3,
        image: "/home_new/cryotherapy_1.png",

        description:
          "Provides whole-body exposure to extremely cold temperatures for a brief duration with the help of liquid nitrogen in vapour form. This therapy is often used for muscle recovery, pain relief, inflammation reduction, reduced stress, & improved sleeping patterns.",
        btnText: "Cryotherapy Chamber",
        listArray: [
          "Reduces Muscle Soreness",
          "Decreases Inflammation",
          "Enhances Recovery",
          "Improves Circulation",
          "Boosts Immune System",
          "Reduces Fatigue",
          "Increases Alertness",
          "Enhances Mental Toughness",
          "Provides Pain Relief",
          "Improves Sleep",
          "Supports Weight Management",
          "Promotes Collagen Production",
        ],
      },
      {
        id: 4,
        image: "/home_new/ice_bath_1.png",

        description:
          "Ice baths involve immersing the body in ice-cold water to reduce inflammation & soothe sore muscles promoting faster recovery & pain relief.",
        btnText: "Ice Bath",
        listArray: [
          "Reduces Muscle Soreness",
          "Decreases Inflammation",
          "Enhances Recovery",
          "Improves Circulation",
          "Boosts Immune System",
          "Reduces Fatigue",
          "Builds Mental Toughness",
          "Provides Pain Relief",
          "Improves Sleep",
          "Increases Alertness",
          "Reduces Stress",
          "Boosts Metabolism",
        ],
      },
      {
        id: 5,
        image: "/home_new/EMS_11zon.jpg",

        description:
          "EMS training uses electrical impulses to stimulate muscle contractions & reduces strain on your joints & ligaments, it allows for targeted muscle stimulation. Strengthen muscles & improve circulation with targeted electrical stimulation, reducing pain & promoting recovery.",
        btnText: "EMS Training",
        listArray: [
          "Increases Muscle Strength",
          "Improves Muscle Endurance",
          "Enhances Athletic Performance",
          "Accelerates Muscle Recovery",
          "Reduces Workout Time",
          "Provides Full-body Workout",
          "Enhances Muscle Activation",
          "Supports Weight Loss",
          "Improves Flexibility",
          "Enhances Blood Circulation",
          "Customizable Intensity Levels",
          "Targets Specific Muscle Groups",
        ],
      },
      // {
      //   id: 6,
      //   image: "/home_new/Services-3.jpg",

      //   description:
      //     "EMS training uses electrical impulses to stimulate muscle contractions & reduces strain on your joints & ligaments, it allows for targeted muscle stimulation. Strengthen muscles & improve circulation with targeted electrical stimulation, reducing pain & promoting recovery.",
      //   btnText: "Hydrotherapy",
      //   listArray: [
      //     "Relieves Muscle Tension",
      //     "Reduces Joint Pain",
      //     "Improves Circulation",
      //     "Enhances Relaxation",
      //     "Decreases Stress Levels",
      //     "Promotes Healing of Soft Tissues",
      //     "Increases Range of Motion",
      //     "Supports Rehabilitation from Injuries",
      //     "Boosts Immune System Function",
      //     "Reduces Swelling & Inflammation",
      //     "Enhances Overall Well-being",
      //     "Provides Cardiovascular Benefits",
      //   ],
      // },
    ],
  };

  const styles = {
    borderTop: "1px solid",
    backgroundImage:
      "linear-gradient(283.4deg, #5BD6DD 23.54%, #036DED 70.28%)",
    backgroundClip: "border-box",
    backgroundOrigin: "border-box",
    border: "1px, 0px, 0px, 0px",
  };
  return (
    <div className="" id="services">
      <motion.div {...yAxisAnimation} className="py-[1rem]">
        <h2 className=" text-brandColor text-[48px] font-medium text-center ">
          Our Services
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient  "></div>
      </motion.div>
      

      {/* cards are here */}
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
        <TreatmentSlider cardsData={cardsData} />
      </motion.div>
    </div>
  );
};
export default Benefits;
