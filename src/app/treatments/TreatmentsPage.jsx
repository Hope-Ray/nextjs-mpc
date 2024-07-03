'use client'
import { motion } from "framer-motion";


const TreatmentsPage = () => {
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
        image: "/home_new/advance physio_11zon.jpg",
        description:
          "Experience a revolution in musculoskeletal care with our personalised treatment plans, tailored for pain relief and functional restoration. Our cutting-edge physiotherapy techniques, encompassing cupping, taping, dry needling, GK3, IASTM, and MFR, provide a comprehensive and holistic approach to healing. Each treatment is tailored to your specific needs, ensuring targeted relief and enhanced rehabilitation to optimise recovery and improve your overall quality of life.",
        btnText: "Advanced Physiotherapy",
      },
      {
        id: 2,
        image: "/home_new/3 Robotic Spine Aligner.jpg",
        description:
          "Experience precise spinal adjustments to alleviate back pain and improve spinal health. This treatment aims to relax and release the paraspinal muscles, increasing flexibility and mobility in the spine. It is effective for addressing stiffness and posture-related issues such as kyphosis, scoliosis, degenerative spine conditions, and neck-back pain.",
        btnText: "Robotic Spine Aligner",
      },
      {
        id: 3,
        image: "/home_new/PBM laser_11zon.jpg",

        description:
          "Detects and treats painful trigger points and promotes tissue healing with advanced laser technology. This therapy induces pain relief and deep tissue repair while controlling swelling and enhancing blood flow. It is beneficial for conditions including frozen shoulder, neuropathic pain, carpal tunnel syndrome, tennis elbow, golfer's elbow, tenosynovitis, tendonitis, fractures, muscle strains, sprains, and ligament tears.",
        btnText: "Photobiomodulation Laser Therapy",
      },
      {
        id: 4,
        image: "/home_new/5 TECAR THERAPY.jpeg",

        description:
          "Experience deep thermotherapy to reduce pain and enhance healing in muscles, tendons, and joints. This therapy is effective for treating acute and chronic injuries or inflammation, including muscle spasms, joint pain, synovitis, bursitis, tendinitis, post-surgical scars, and osteoarthritis. It helps with muscle relaxation, tissue regeneration, edema reduction, pain management, and muscle recovery.",
        btnText: "Deep Tissue Thermo Therapy",
      },
      {
        id: 5,
        image: "/home_new/6 Acoustic Wave.JPEG",

        description:
          "Stimulate tissue regeneration and alleviate pain with non-invasive treatment. This therapy is beneficial for promoting collagen synthesis, pain relief, and breaking down calcified deposits. It is useful for conditions such as heel spur, plantar fasciitis, tendinopathy, frozen shoulder, and calcific tendinitis of the shoulder joint.",
        btnText: "Acoustic Wave Therapy",
      },
      {
        id: 6,
        image: "/home_new/Spine Decompression _11zon.jpg",

        description:
          "Decompress spinal discs to relieve pressure and pain associated with herniated or degenerative discs. This treatment is useful for addressing herniated discs, sciatica, slipped discs, and vertigo. It provides targeted decompression and distraction, aiding in the stretching and relaxation of tight fascia   muscles in spasm.",
        btnText: "Spine Decompression Therapy",
      },
    ],
  };

  return (
    <div className="bg-white py-32 text-black" id="services">
      <div className="container mx-auto px-2 md:px-[5rem]">
        <h2 className="text-5xl font-bold mb-8 text-center text-brandColor">Our Treatments</h2>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {cardsData.cards.map((card, index) => (
            <div
              key={card.id}
              className={`flex flex-col-reverse gap-10 md:flex-row  ${
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

export default TreatmentsPage