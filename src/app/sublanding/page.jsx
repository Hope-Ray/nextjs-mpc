"use client";
import { useState } from "react";
import ConditionsTreat from "@/components/ConditionsWeTreat/ConditionsTreat";
import SubWelcome from "@/components/SubLanding/SubWelcome";
import SubTestimonials from "@/components/SubLanding/SubTestimonials";
import WhyMpc from "@/components/SubLanding/WhyMpc";
import React from "react";
import FAQ from "@/components/SubLanding/FAQ/FAQ";
import Modal from "@/components/Modal/Modal";
import Infographics from "@/components/SubLanding/Infographics";

const SubLanding = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SubWelcome />
      <div className="mb-10">
        <ConditionsTreat />
        <div className="text-right pr-[5rem]">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r bg-brandColor text-white font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            And Many More
          </button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <WhyMpc />
      <div>
        <SubTestimonials />
      </div>
      <FAQ/>
      <Infographics/>
    </div>
  );
};

export default SubLanding;
