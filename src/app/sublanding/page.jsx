"use client";
import { useState } from "react";
import SubWelcome from "@/components/SubLanding/SubWelcome";
import SubTestimonials from "@/components/SubLanding/SubTestimonials";
import WhyMpc from "@/components/SubLanding/WhyMpc";
import React from "react";
import FAQ from "@/components/SubLanding/FAQ/FAQ";
import Modal from "@/components/Modal/Modal";
import Infographics from "@/components/SubLanding/Infographics";
import SubConditionsTreat from "@/components/SubLanding/SubConditionsTreat/SubConditionsTreat";

const SubLanding = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SubWelcome />
      <div className="mb-10 mt-[2rem]">
        {/* <ConditionsTreat setIsOpen={setIsOpen}/> */}
        <SubConditionsTreat setIsOpen={setIsOpen}/>
        <div className="text-right pr-[5rem]">
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <WhyMpc setIsOpen={setIsOpen}/>
      <div>
        <SubTestimonials setIsOpen={setIsOpen}/>
      </div>
      <FAQ/>
      <Infographics/>
    </div>
  );
};

export default SubLanding;
