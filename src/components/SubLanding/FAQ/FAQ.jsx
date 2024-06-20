"use client";
// import Accordion from "@/components/Accordian/Accordian";
import Accordian2, { AccordianItem } from "@/components/Accordian2/Accordian2";
import { motion } from "framer-motion";

const FAQ = () => {
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
    <div className="py-[2rem]">
      <motion.div {...yAxisAnimation} className="pt-[1rem]">
        <h2 className=" text-brandColor text-[48px] font-medium text-center ">
          FAQs
        </h2>
        <div className=" w-[100px] h-[2px] mx-auto border-gradient"></div>
      </motion.div>
      <div className="max-w-[70%] mx-auto mt-10 px-5 md:px-[5rem]">
        <Accordian2 className="flex flex-col gap-3">
          <AccordianItem
            value="1"
            trigger="What types of pain conditions do you treat at My Pain Clinic?"
          >
            We treat various pain conditions including chronic pain,
            musculoskeletal issues, sports injuries, systemic illnesses, and
            rehabilitation needs.
          </AccordianItem>

          <AccordianItem
            value="2"
            trigger="What advanced physiotherapy techniques are available at My Pain Clinic?"
          >
            Our advanced physiotherapy techniques include cupping, taping, dry
            needling, GK3, IASTM, and MFR, all tailored to your specific needs
            for pain relief and functional restoration.
          </AccordianItem>

          <AccordianItem
            value="3"
            trigger="How does the Robotic Spine Aligner work to alleviate back pain?"
          >
            The Robotic Spine Aligner provides precise spinal adjustments to
            relax and release the paraspinal muscles, increasing flexibility and
            mobility to address back pain and posture-related issues.
          </AccordianItem>

          <AccordianItem
            value="4"
            trigger="What are the benefits of Photobiomodulation Laser Therapy?"
          >
            This therapy uses advanced laser technology to detect and treat
            painful trigger points, promote tissue healing, reduce swelling, and
            enhance blood flow, effective for conditions like frozen shoulder,
            neuropathic pain, and carpal tunnel syndrome.
          </AccordianItem>
          <AccordianItem
            value="5"
            trigger="Can you explain the purpose of Deep Tissue Thermo Therapy?"
          >
            Deep Tissue Thermo Therapy helps reduce pain and enhance healing in
            muscles, tendons, and joints by providing deep thermotherapy,
            effective for acute and chronic injuries, muscle spasms, joint pain,
            and more.
          </AccordianItem>
          <AccordianItem
            value="6"
            trigger="What is Acoustic Wave Therapy used for?"
          >
            Acoustic Wave Therapy stimulates tissue regeneration and alleviates
            pain, promoting collagen synthesis and breaking down calcified
            deposits. It's useful for conditions such as heel spurs, plantar
            fasciitis, and calcific tendinitis of the shoulder.
          </AccordianItem>
          <AccordianItem
            value="7"
            trigger="How does Spine Decompression Therapy help with herniated discs and sciatica?"
          >
            This therapy decompresses spinal discs to relieve pressure and pain
            associated with herniated or degenerative discs, providing targeted
            decompression and relaxation of tight fascia and muscles in spasm.
          </AccordianItem>
          <AccordianItem
            value="8"
            trigger="What kind of assessments and recovery programs are offered for sports injuries?"
          >
            Our sports injury rehabilitation programs include movement analysis,
            functional assessments, motor rehabilitation, cognitive-motor skills
            training, and state-of-the-art metabolic test equipment to ensure
            holistic recovery and peak athletic performance.
          </AccordianItem>
          <AccordianItem
            value="9"
            trigger="How can I benefit from Cardio Thoracic Rehabilitation?"
          >
            Cardio Thoracic Rehabilitation aims to restore cardiovascular health
            and reduce musculoskeletal strain post-surgery, helping individuals
            regain cardiovascular fitness and pulmonary function for overall
            well-being.
          </AccordianItem>
          <AccordianItem
            value="10"
            trigger="What therapeutic modalities are available to enhance muscle recovery and pain relief?"
          >
            We offer various therapeutic modalities including Hyperbaric Oxygen
            Therapy, Hydrotherapy, Cryotherapy Chamber, Ice Bath, Clinical
            Pilates, and EMS Training, all designed to enhance muscle recovery,
            reduce pain, and promote overall rehabilitation.
          </AccordianItem>
        </Accordian2>
      </div>
    </div>
  );
};

export default FAQ;
