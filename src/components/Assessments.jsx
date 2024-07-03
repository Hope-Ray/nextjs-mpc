"use client"
import { motion } from "framer-motion";
import TreatmentSlider from './TreatmentSlider';

const Assessments = () => {
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
  const cardsData = {
    cards: [
      {
        id: 1,
        image: "/home_new/Sports rehab_11zon.jpg",
        description:
          "The ultimate in sports injury rehabilitation with our comprehensive programmes designed to recover from injuries & prevent future pain. Our expert team specialises in movement analysis, functional assessments, motor rehabilitation, & cognitive-motor skills training, ensuring holistic recovery & peak athletic performance. Utilising state-of-the-art metabolic test equipment & strength & conditioning protocols, we empower you to excel in your sport while minimising the risk of future injuries.",
        btnText: "Sports Injuries & Rehabilitation",
        listArray: [
          "Reduces Pain",
          "Speeds Up Recovery",
          "Enhances Muscle Strength",
          "Improves Flexibility",
          "Restores Range of Motion",
          "Reduces Inflammation",
          "Prevents Re-injury",
          "Enhances Coordination & Balance",
          "Supports Tissue Healing",
          "Improves Athletic Performance",
          "Reduces Scar Tissue Formation",
          "Promotes Functional Movement",
          "Increases Endurance",
        ],
      },
      {
        id: 2,
        image: "/home_new/7_Gait.jpg",
        description:
          "Involves the detailed assessment of an individual's walking or running pattern, identifying subtle abnormalities or imbalances. This analysis is crucial for diagnosing & correcting issues related to musculoskeletal problems, sports performance, & injury prevention.",
        btnText: "Micro Gait Analysis & Correction",
        listArray: [
          "Identifies Gait Abnormalities",
          "Enhances Movement Efficiency",
          "Reduces Risk of Injury",
          "Improves Posture",
          "Optimizes Athletic Performance",
          "Corrects Muscle Imbalances",
          "Reduces Pain",
          "Enhances Balance & Stability",
          "Supports Injury Rehabilitation",
          "Improves Foot Mechanics",
          "Increases Overall Mobility",
          "Provides Customized Treatment Plans",
        ],
      },
      {
        id: 3,
        image: "/home_new/Assessment-3.jpeg",
        description:
          "Improve endurance & manage cardiovascular conditions that may contribute to pain, ensuring a stronger, healthier heart. We test RMR (resting metabolic rate) & VO2 Max. It helps to assess the functioning of your heart & lungs.",
        btnText: "Cardio Coach",
        listArray: [
          "Enhances Cardiovascular Fitness",
          "Monitors Heart Rate",
          "Provides Personalized Training Plans",
          "Tracks Progress",
          "Optimizes Workout Efficiency",
          "Improves Endurance",
          "Promotes Weight Management",
          "Increases Motivation",
          "Reduces Risk of Heart Disease",
          "Improves Recovery Times",
          "Supports Goal Setting",
          "Enhances Athletic Performance",
        ],
      },
      {
        id: 4,
        image: "/home_new/9 Witty_11zon.jpg",
        description:
          "Agility & endurance training programmes aim to enhance an individual's physical performance, including reaction time, change in direction, & cognitive awareness, which is beneficial for those seeking to improve their readiness while playing.",
        btnText: "Witty System",
        listArray: [
          "Enhances Athletic Performance",
          "Measures Reaction Time",
          "Tracks Speed & Agility",
          "Provides Real-time Feedback",
          "Supports Data Analysis",
          "Improves Training Efficiency",
          "Customizable Training Programs",
          "Monitors Progress Over Time",
          "Enhances Coordination",
          "Supports Injury Prevention",
          "Facilitates Competitive Training",
          "Suitable for Various Sports",
        ],
      },
      {
        id: 5,
        image: "/home_new/foot_analysis.png",
        description:
          "Complete foot scanning & analysis related to posture & other ailments. Address foot- related pain with personalised shoe inserts, easing discomfort from conditions such as flat feet, heel spurs, plantar fasciitis, knee pain, & lower back pain",
        btnText: "Foot Analysis & Customised Insoles",
        listArray: [
          "Identifies Foot Abnormalities",
          "Provides Customized Support",
          "Improves Foot Alignment",
          "Reduces Pain",
          "Enhances Comfort",
          "Prevents Injuries",
          "Corrects Gait Issues",
          "Enhances Athletic Performance",
          "Reduces Fatigue",
          "Supports Arch Health",
          "Improves Balance",
          "Promotes Proper Weight Distribution",
        ],
      },
      {
        id: 6,
        image: "/home_new/Posture analysis _11zon.jpg",
        description:
          "Cardio coach (Using KORR, USA) helps in analysing the function of lungs & heart by reflecting the oxygen uptake & its use by the body while performing any action, it also helps to mark the parameters that require improvement & helps in maintaining the endurance based performance.",
        btnText: "Posture Analysis & Correction",
        listArray: [
          "Detects Spinal Misalignments",
          "Measures Skin Temperature Variations",
          "Enhances Diagnostic Accuracy",
          "Non-invasive Procedure",
          "Assists in Chiropractic Adjustments",
          "Monitors Treatment Progress",
          "Provides Visual Feedback",
          "Supports Patient Education",
          "Improves Treatment Outcomes",
          "Reduces Subjectivity in Diagnosis",
          "Measures Applied Force Accurately",
          "Enhances Treatment Precision",
        ],
      },
    ],
  };

  return (
    <div className="" id="assessments">
      <motion.div {...yAxisAnimation} className="pb-[1rem]">
        <h2 className=" text-brandColor text-[48px] font-medium text-center ">
          Our Assessments
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

export default Assessments;
