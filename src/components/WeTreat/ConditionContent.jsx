"use client"
import React, {useEffect} from 'react'
import { motion } from "framer-motion";

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

const cardsData = {
  cards: [
    {
      id: "neck-pain",
      image: "/home_new/Neck.jpg",
      description:
        "Neck pain often results from poor posture, particularly during prolonged activities such as sitting at a desk or using a smartphone. Muscle strain from overuse or sudden movements, such as whiplash, can also cause neck pain. Degenerative changes in the cervical spine, like osteoarthritis or herniated discs, contribute to chronic neck discomfort. Physiotherapists also identify stress and tension as significant factors, leading to muscle tightness and pain.",
      btnText: "Neck Pain",
      bgColor: 'bg-[#5488c4]'
    },
    {
      id: "back-pain",
      image: "/home_new/back.jpg",
      description:
        "Back pain is frequently caused by mechanical issues such as muscle strains, ligament sprains, or disc problems like herniation. Poor posture, especially when sitting or lifting incorrectly, is a common contributor. Chronic conditions such as scoliosis, spinal stenosis, or degenerative disc disease exacerbate back pain. A sedentary lifestyle, weak core muscles, and poor ergonomics can also lead to or worsen back pain, which physiotherapists address through targeted exercises and posture correction.",
      btnText: "Back Pain",
      bgColor: 'bg-[#F1F1F6]'
    },
    {
      id: "knee-pain",
      image: "/home_new/knee.jpg",
      description:
        "Knee pain often arises from overuse injuries, such as tendinitis or bursitis, commonly seen in athletes and individuals with repetitive motion activities. Degenerative conditions like osteoarthritis lead to joint pain and stiffness. Ligament injuries, such as ACL tears, or meniscal damage from trauma or sports injuries, are significant causes. Physiotherapists focus on strengthening, flexibility exercises, and proper movement techniques to manage and prevent knee pain.",
      btnText: "Knee Pain",
      bgColor: 'bg-[#5488c4]'
    },
    {
      id: "foot-pain",
      image: "/home_new/foot.jpg",
      description:
        "Foot pain can result from various conditions, including plantar fasciitis, often caused by overuse or poor footwear. Structural abnormalities like flat feet or high arches contribute to pain and discomfort. Stress fractures from repetitive impact, such as running, are common. Physiotherapists also consider conditions like tendinitis, nerve entrapment (e.g., tarsal tunnel syndrome), and arthritis when diagnosing and treating foot pain.",
      btnText: "Foot Pain",
      bgColor: 'bg-[#F1F1F6]'
    },
    {
      id: "shoulder-pain",
      image: "/home_new/shoulder.jpg",
      description:
        "Shoulder pain is frequently due to rotator cuff injuries, including tendinitis or tears, often from overuse or trauma. Impingement syndrome, where tendons are pinched during arm movements, is another common cause. Conditions like frozen shoulder (adhesive capsulitis) and arthritis can lead to stiffness and pain. Physiotherapists emphasize mobility exercises, strengthening, and techniques to reduce inflammation and improve function.",
      btnText: "Shoulder Pain",
      bgColor: 'bg-[#5488c4]'
    },
    {
      id: "elbow-pain",
      image: "/home_new/elbow.jpg",
      description:
        "Elbow pain commonly results from overuse injuries like tennis elbow (lateral epicondylitis) or golfer’s elbow (medial epicondylitis). These conditions involve inflammation of the tendons due to repetitive motions. Elbow pain can also stem from conditions such as bursitis, arthritis, or nerve entrapment (e.g., cubital tunnel syndrome). Physiotherapy focuses on reducing inflammation, improving flexibility, and strengthening the surrounding muscles.",
      btnText: "Elbow Pain",
      bgColor: 'bg-[#F1F1F6]'
    },
    {
      id: "hip-pain",
      image: "/home_new/hip.jpg",
      description:
        "Hip pain often arises from conditions like osteoarthritis, which causes joint degeneration and stiffness. Bursitis, tendinitis, and labral tears are other common causes, frequently related to overuse or trauma. Hip impingement, where the bones of the hip joint rub abnormally, leads to pain and restricted movement. Physiotherapists target hip pain through exercises that improve joint mobility, strengthen supporting muscles, and correct biomechanical issues.",
      btnText: "Hip Pain",
      bgColor: 'bg-[#5488c4]'
    },
    {
      id: "wrist-pain",
      image: "/home_new/wrist.jpg",
      description:
        "Wrist pain is commonly due to repetitive strain injuries such as carpal tunnel syndrome, where nerve compression leads to pain and numbness. Tendinitis and arthritis are also frequent causes, often related to overuse or degenerative changes. Acute injuries like fractures or sprains from falls can cause significant pain. Physiotherapy for wrist pain involves exercises to enhance strength and flexibility, ergonomic adjustments, and sometimes splinting.",
      btnText: "Wrist Pain",
      bgColor: 'bg-[#F1F1F6]'
    },
    {
      id: "joint-pain",
      image: "/home_new/joint.jpg",
      description:
        "Joint pain, or arthralgia, can be caused by various conditions including osteoarthritis, rheumatoid arthritis, and gout, leading to inflammation and degeneration of joint tissues. Overuse injuries and repetitive stress, as well as acute injuries like sprains, contribute to joint pain. Physiotherapists address joint pain with exercises to improve range of motion, strength, and stability, along with strategies to reduce inflammation and manage pain.",
      btnText: "Joint Pain",
      bgColor: 'bg-[#5488c4]'
    },
    {
      id: "acl-tear",
      image: "/home_new/acl_tear_pain.jpg",
      description:
        "An ACL (anterior cruciate ligament) tear is typically caused by sudden stops, changes in direction, or direct impact during sports activities. This injury leads to knee instability, swelling, and significant pain. Rehabilitation focuses on reducing swelling and pain initially, followed by exercises to restore knee stability, strength, and function. In severe cases, surgery may be required, followed by extensive physiotherapy.",
      btnText: "ACL Tear",
      bgColor: 'bg-[#F1F1F6]'
    },
    {
      id: "nerve-pain",
      image: "/home_new/nerve_pain.jpg",
      description:
        "Nerve pain, or neuropathic pain, often results from nerve compression, such as in sciatica, or nerve damage from conditions like diabetes or injuries. It can manifest as sharp, burning, or tingling sensations. Physiotherapists treat nerve pain through exercises that relieve pressure on nerves, improve mobility, and strengthen surrounding muscles to support nerve function. Techniques like neural mobilization can also be beneficial.",
      btnText: "Nerve Pain",
      bgColor: 'bg-[#5488c4]'
    },
    {
      id: "full-body-pain",
      image: "/home_new/full Body.jpg",
      description:
        "Full body pain can be indicative of systemic conditions like fibromyalgia, where widespread pain and tenderness occur. Chronic fatigue syndrome and certain autoimmune disorders, such as lupus, also contribute to diffuse pain. Physiotherapy focuses on managing pain through gentle, progressive exercises to improve overall strength and flexibility, stress reduction techniques, and education on energy conservation and pacing activities.",
      btnText: "Full Body Pain",
      bgColor: 'bg-[#F1F1F6]'
    },
  ],
};



const ConditionContent = () => {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        const navbarHeight = document.getElementById("navbar").offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - (navbarHeight + 100);
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, []);

  return (
    <div className=''>
      <motion.div {...yAxisAnimation} className="py-[3rem]">
        <h2 className=" text-brandColor text-[48px] font-medium text-center" id="condition-header">
          Condition We Treat
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient  "></div>
      </motion.div>
      {cardsData.cards.map((card) => (
        <div key={card.id} id={card.id} style={{paddingTop: '1rem', paddingBottom:"1rem"}} className={card.bgColor}>
          <div className="flex md:flex-row flex-col max-w-7xl mx-auto px-4 md:px-16">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="md:w-[55%] sm:w-full overflow-hidden flex items-center"
            >
              <img
                src={card.image}
                className="w-full md:w-[70%] h-auto object-cover"
                alt="img"
              />
            </motion.div>
            <div className="w-full">
              <motion.h2
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
                className={`lg:text-5xl md:text-3xl text-lg font-medium ${
                  card.bgColor === 'bg-[#5488c4]' ? 'text-white' : 'text-brandColor'
                } md:py-1 py-2 text-center md:text-left`}
              >
                {card.btnText}
              </motion.h2>
              
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
                className="my-0 md:my-6"
              >
                <p className={`text-justify  ${
                  card.bgColor === 'bg-[#5488c4]' ? 'text-white' : ''
                }`}>{card.description}</p>
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
                className="lg:mt-6 my-6"
              >
                <a
                  href="#"
                  className={`md:py-4 py-2 md:px-8 px-4 rounded-md transition-all delay-75 ease-linear  font-medium md:text-base text-sm text-center ${
                    card.bgColor === 'bg-[#5488c4]' ? 'bg-white text-brandColor hover:bg-opacity-75 hover:text-opacity-75' : 'bg-brandColor text-white hover:bg-opacity-75 hover:text-opacity-75'
                  }`}
                >
                  Consult now
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ConditionContent;
