"use client";
import { useState, useEffect, useRef } from "react";
import SubWelcome from "@/components/SubLanding/SubWelcome";
import SubTestimonials from "@/components/SubLanding/SubTestimonials";
import WhyMpc from "@/components/SubLanding/WhyMpc";
import React from "react";
import FAQ from "@/components/SubLanding/FAQ/FAQ";
import Modal from "@/components/Modal/Modal";
import Infographics from "@/components/SubLanding/Infographics";
import SubConditionsTreat from "@/components/SubLanding/SubConditionsTreat/SubConditionsTreat";
import Treatments from "@/components/Treatments";
import { usePathname  } from 'next/navigation';

const SubLandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const reviewsRef = useRef(null);
  const pathname = usePathname();

  // useEffect(() => {
  //   if (pathname.includes('#reviews') && reviewsRef.current) {
  //     const navbarHeight = document.getElementById('navbar').offsetHeight;
  //     console.log("Navbar Height",navbarHeight);
  //     const elementPosition = reviewsRef.current.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition + window.scrollY - (navbarHeight); // Adjust offset as needed

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: 'smooth',
  //     });
  //   }
  // }, [pathname]);

  const navbarHeight = 87;
  useEffect(() => {
    const handleScroll = () => {
      // Get the current hash
      const hash = window.location.hash;

      // Check if the hash is #reviews
      if (hash === "#reviews") {
        const element = document.getElementById("reviews");

        if (element) {
          // Calculate the position of the element
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navbarHeight;

          // Smooth scroll to the calculated position
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Attach the popstate event listener
    window.addEventListener('popstate', handleScroll);

    // Attach the hashchange event listener
    window.addEventListener('hashchange', handleScroll);

    // Run handleScroll initially in case the hash is already set
    handleScroll();

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('popstate', handleScroll);
      window.removeEventListener('hashchange', handleScroll);
    };
  }, []); 



  return (
    <div>
      <SubWelcome setIsOpen={setIsOpen}/>
      <div className="mb-10 mt-[2rem]">
        {/* <ConditionsTreat setIsOpen={setIsOpen}/> */}
        <SubConditionsTreat setIsOpen={setIsOpen}/>
        <div className="text-right pr-[5rem]">
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <Treatments/>
      <WhyMpc setIsOpen={setIsOpen}/>
      <div ref={reviewsRef} id="reviews"> 
        <SubTestimonials setIsOpen={setIsOpen}/>
      </div>
      <FAQ/>
      <Infographics/>
    </div>
  );
};

export default SubLandingPage;
