"use client"
import { motion } from "framer-motion";
import TreatmentSlider from './TreatmentSlider'

const Treatments = () => {

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
      // {
      //   id: 1,
      //   image: "/home_new/advance physio_11zon.jpg",
      //   description:
      //     "Musculoskeletal & orthopaedic conditions encompass a wide range of issues affecting the bones, muscles, joints, & related structures. These conditions resulting from many causes may lead to pain, reduced mobility, & functional limitations. Treatment often involves a combination of customised in-house physical therapy programmes & advanced manual therapy techniques.",
      //   btnText: "Advanced Physiotherapy",
      //   listArray: [
          
      //   ],
      // },
      {
        id: 2,
        image: "/home_new/3 Robotic Spine Aligner.jpg",
        description:
          "Experience precise spinal adjustments to alleviate back pain & improve spinal health. This treatment aims to relax & release the paraspinal muscles, increasing flexibility & mobility in the spine. It is effective for addressing stiffness & posture-related issues such as kyphosis, scoliosis, degenerative spine conditions, & neck-back pain.",
        btnText: "Robotic Spine Aligner",
        listArray: [
          "Enhances Precision in Adjustments",
          "Reduces Treatment Time",
          "Provides Consistent Results",
          "Provides Visual Feedback",
          "Improves Patient Safety",
          "Supports Customized Treatment Plans",
          "Enhances Diagnostic Accuracy",
          "Reduces Pain & Discomfort",
          "Monitors Progress in Real-time",
          "Promotes Faster Recovery",
          "Integrates with Medical Records",
          "Supports Complex Cases",
        ],
      },
      {
        id: 3,
        image: "/home_new/PBM laser_11zon.jpg",
        description:
          "Detects & treats painful trigger points & promotes tissue healing with advanced laser technology. This therapy induces pain relief & deep tissue repair while controlling swelling & enhancing blood flow. It is beneficial for conditions including frozen shoulder, neuropathic pain, carpal tunnel syndrome, tennis elbow, golfer's elbow, tenosynovitis, tendonitis, fractures, muscle strains, sprains, & ligament tears.",
        btnText: "PBM Therapy",
        listArray: [
          "Reduces Pain",
          "Decreases Inflammation",
          "Promotes Tissue Repair",
          "Accelerates Wound Healing",
          "Enhances Cellular Function",
          "Improves Blood Circulation",
          "Reduces Muscle Fatigue",
          "Supports Nerve Regeneration",
          "Reduces Scar Tissue Formation",
          "Enhances Recovery Time",
          "Minimizes Swelling",
          "Non-invasive Treatment",
        ],
      },
      {
        id: 4,
        image: "/home_new/5 TECAR THERAPY.jpeg",
        description:
          "Musculoskeletal & orthopaedic conditions encompass a wide range of issues affecting the bones, muscles, joints, & related structures. These conditions resulting from many causes may lead to pain, reduced mobility, & functional limitations. Treatment often involves a combination of customised in-house physical therapy programmes & advanced manual therapy techniques.",
        btnText: "Deep Tissue Thermo Therapy",
        listArray: [
          "Reduces Muscle Tension",
          "Decreases Pain",
          "Enhances Blood Circulation",
          "Promotes Tissue Healing",
          "Reduces Inflammation",
          "Improves Flexibility",
          "Supports Muscle Recovery",
          "Relieves Joint Stiffness",
          "Enhances Relaxation",
          "Reduces Muscle Spasms",
          "Non-invasive Treatment",
          "Accelerates Recovery Time",
        ],
      },{
        id: 5,
        image: "/home_new/6 Acoustic Wave.JPEG",
        description:
          "Musculoskeletal & orthopaedic conditions encompass a wide range of issues affecting the bones, muscles, joints, & related structures. These conditions resulting from many causes may lead to pain, reduced mobility, & functional limitations. Treatment often involves a combination of customised in-house physical therapy programmes & advanced manual therapy techniques.",
        btnText: "Acoustic Wave Therapy",
        listArray: [
          "Reduces Pain",
          "Breaks Down Scar Tissue",
          "Enhances Blood Circulation",
          "Promotes Tissue Regeneration",
          "Reduces Inflammation",
          "Improves Range of Motion",
          "Supports Muscle Recovery",
          "Enhances Healing Process",
          "Reduces Cellulite",
          "Non-invasive Treatment",
          "Improves Tendon Health",
          "Accelerates Recovery Time",
        ],
      },{
        id: 6,
        image: "/home_new/Spine Decompression _11zon.jpg",
        description:
          "Musculoskeletal & orthopaedic conditions encompass a wide range of issues affecting the bones, muscles, joints, & related structures. These conditions resulting from many causes may lead to pain, reduced mobility, & functional limitations. Treatment often involves a combination of customised in-house physical therapy programmes & advanced manual therapy techniques.",
        btnText: "Spine Decompression Therapy",
        listArray: [
          "Relieves Back Pain",
          "Reduces Pressure on Spinal Discs",
          "Improves Spinal Alignment",
          "Increases Disc Space",
          "Enhances Nutrient Diffusion to Discs",
          "Reduces Nerve Compression",
          "Promotes Healing of Disc Injuries",
          "Improves Range of Motion",
          "Alleviates Sciatica Symptoms",
          "Non-invasive Treatment",
          "Supports Disc Regeneration",
          "Decreases Muscle Tensionn",
        ],
      },
    ],
  };

  return (
    <div className=" bg-[#fff] py-[1rem] " id="treatment">
      <motion.div {...yAxisAnimation} className="py-[1rem]">
        <h2 className=" text-brandColor text-[48px] font-medium text-center ">
          Our Treatments
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
  )
}

export default Treatments