'use client'
import { motion } from "framer-motion";


const AssessmentsPage = () => {
  const cardsData = {
    cards: [
      {
        id: 1,
        image: "/home_new/Sports rehab_11zon.jpg",
        description:
          "The ultimate in sports injury rehabilitation with our comprehensive programmes designed to recover from injuries and prevent future pain. Our expert team specialises in movement analysis, functional assessments, motor rehabilitation, and cognitive-motor skills training, ensuring holistic recovery and peak athletic performance. Utilising state-of-the-art metabolic test equipment and strength and conditioning protocols, we empower you to excel in your sport while minimising the risk of future injuries.",
        btnText: "Sports Injuries & Rehabilitation",
      },
      {
        id: 2,
        image: "/home_new/7_Gait.jpg",
        description:
          "Involves the detailed assessment of an individual's walking or running pattern, identifying subtle abnormalities or imbalances. This analysis is crucial for diagnosing and correcting issues related to musculoskeletal problems, sports performance, and injury prevention.",
        btnText: "Micro Gait Analysis & Correction",
      },
      {
        id: 3,
        image: "/home_new/Assessment-3.jpeg",
        description:
          "Improve endurance and manage cardiovascular conditions that may contribute to pain, ensuring a stronger, healthier heart. We test RMR (resting metabolic rate) and VO2 Max. It helps to assess the functioning of your heart and lungs.",
        btnText: "Cardio Coach",
      },
      {
        id: 4,
        image: "/home_new/9 Witty_11zon.jpg",
        description:
          "Agility and endurance training programmes aim to enhance an individual's physical performance, including reaction time, change in direction, and cognitive awareness, which is beneficial for those seeking to improve their readiness while playing.",
        btnText: "Witty System",
      },
      {
        id: 5,
        image: "/home_new/foot_analysis.png",
        description:
          "Complete foot scanning and analysis related to posture and other ailments. Address foot- related pain with personalised shoe inserts, easing discomfort from conditions such as flat feet, heel spurs, plantar fasciitis, knee pain, and lower back pain.",
        btnText: "Foot Analysis & Customised Insoles",
      },
      {
        id: 6,
        image: "/home_new/Posture analysis _11zon.jpg",
        description:
          "Posture analysis & correction aim to identify and address issues related to body alignment and posture that may contribute to musculoskeletal discomfort. Correcting poor posture can alleviate pain and improve overall musculoskeletal health.",
        btnText: "Posture Analysis & Correction",
      },
      {
        id: 7,
        image: "/home_new/11_cardio_thorasic_rehabilitation.jpg",
        description:
          "Restore cardiovascular health and reduce musculoskeletal strain post-surgery with tailored rehabilitation. These programs help individuals regain cardiovascular fitness and pulmonary function, which may have implications for musculoskeletal health and overall well-being.",
        btnText: "Cardio Thoracic Rehabilitation",
      },
      {
        id: 8,
        image: "/home_new/12 Diabetes _11zon.jpg",
        description:
          "Diabetes can affect musculoskeletal health through complications like neuropathy and poor circulation. Proper diabetes management, including blood sugar control and lifestyle adjustments, is crucial for preventing and addressing these issues.",
        btnText: "Diabetes Management",
      },
      {
        id: 9,
        image: "/home_new/Hypertension_11zon.jpg",
        description:
          "Hypertension, or high blood pressure, is a risk factor for various health issues, including musculoskeletal conditions. Effective management through tailored-made programmes helps reduce the risk of associated health problems.",
        btnText: "Hypertension Management",
      },
      {
        id: 10,
        image: "/home_new/Untitled design_11zon.jpg",
        description:
          "Antenatal care ensures the health of pregnant women and their babies through exercises and interventions by specialized doctors. Postnatal care focuses on women's physical well-being after childbirth, including musculoskeletal issues, with rehabilitation and exercises aiding recovery.",
        btnText: "Antenatal & Postnatal Care",
      },
      {
        id: 11,
        image: "/home_new/13 Stress Management _11zon.jpg",
        description:
          "Stress can exacerbate musculoskeletal problems by causing muscle tension and pain. Effective stress management techniques such as relaxation exercises, mindfulness, and therapy can help individuals better cope with and reduce the impact of stress on their bodies.",
        btnText: "Stress Management",
      },
    ],
  };

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

  return (
    <div className="bg-white py-32 text-black" id="assessments">
      <div className="container mx-auto px-[5rem]">
        <h2 className="text-5xl font-bold mb-8 text-center text-brandColor">Our Assessments</h2>
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

export default AssessmentsPage