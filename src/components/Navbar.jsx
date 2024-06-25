"use client"
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null); // State to track open dropdown

  const navLinks = [
    {
      id: 1,
      text: "Home",
      linkTo: "/",
    },
    {
      id: 2,
      text: "We Treat",
      linkTo: "/weTreat",
      dropdownContent: [
        {
          text: "Back Pain",
          linkTo: "/specific-treatment/back-pain",
          imgUrl: '/home_new/back.jpg'
        },
        {
          text: "Slipped Disc",
          linkTo: "/specific-treatment/slipped-disc",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Neck Pain",
          linkTo: "/specific-treatment/neck-pain",
          imgUrl: '/home_new/Neck.jpg'
        },
        {
          text: "Cervical Spondylosis",
          linkTo: "/specific-treatment/cervical-spondylosis",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Osteoarthritis",
          linkTo: "/specific-treatment/osteoarthritis",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Frozen Shoulder",
          linkTo: "/specific-treatment/frozen-shoulder",
          imgUrl: '/home_new/shoulder.jpg'
        },
        {
          text: "Tennis Elbow",
          linkTo: "/specific-treatment/tennis-elbow",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Plantar Fasciitis",
          linkTo: "/specific-treatment/plantar-fasciitis",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Carpal Tunnel",
          linkTo: "/specific-treatment/carpal-tunnel-syndrome",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Sciatica",
          linkTo: "/specific-treatment/sciatica",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Hamstring Injuries",
          linkTo: "/specific-treatment/hamstring-injuries",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Acl / Mcl Tear",
          linkTo: "/specific-treatment/acl-tear",
          imgUrl: '/home_new/acl_tear_pain.jpg'
        },
        {
          text: "Heel Spur",
          linkTo: "/specific-treatment/heel-spur",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Knee Pain",
          linkTo: "/specific-treatment/heel-spur",
          imgUrl: '/home_new/knee.jpg'
        },
        {
          text: "Elbow Pain",
          linkTo: "/specific-treatment/elbow-pain",
          imgUrl: '/home_new/elbow.jpg'
        },
        {
          text: "Shoulder Impingement",
          linkTo: "/specific-treatment/shoulder-impingement",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Tendonitis",
          linkTo: "/specific-treatment/tendonitis",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Bursitis",
          linkTo: "/specific-treatment/bursitis",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Radiculopathy",
          linkTo: "/specific-treatment/radiculopathy",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Rotator Cuff Injury",
          linkTo: "/specific-treatment/rotator_cuff_injury",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Joint Dislocation",
          linkTo: "/specific-treatment/joint_dislocation",
          imgUrl: 'https://placehold.co/400'
        },
      ],
    },
    // {
    //   id: 3,
    //   text: "Treatments",
    //   linkTo: "/treatments",
    // },
    {
      id: 3,
      text: "Our Treatments",
      linkTo: "#",
      dropdownContent: [
        {
          text: "Treatments",
          linkTo: "/treatments",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Assessments",
          linkTo: "/assessments",
          imgUrl: 'https://placehold.co/400'
        },
        {
          text: "Services",
          linkTo: "/services",
          imgUrl: 'https://placehold.co/400'
        }
      ]
    },
    // {
    //   id: 4,
    //   text: "Assessments",
    //   linkTo: "/assessments",
    // },
    // {
    //   id: 5,
    //   text: "Services",
    //   linkTo: "/services",
    // },
    {
      id: 6,
      text: "Blogs",
      linkTo: "https://mpcw.salt-tech.com/blog/",
    },
    {
      id: 7,
      text: "Contact Us",
      linkTo: "/contactus",
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setDropdownOpenIndex(index); 
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setDropdownOpenIndex(null); 
  };

  const handleCloseDropdown = () => {
    setDropdownOpenIndex(null); 
  };

  return (
    <nav className="bg-[#080808] h-[87px] flex mf:justify-around justify-between px-[1rem] items-center text-[#B1B4B6] fixed top-0 w-[100%] z-50" id="navbar">
      <div>
        <Link href="/">
          <img style={{ width: "40%" }} src="/images/logo-mpc.png" alt="logo" />
        </Link>
      </div>
      
      {/* Desktop menu */}
      <div className="mf:flex justify-center items-center gap-[1.5rem] text-[16px] font-medium transition hidden">
        {navLinks.map(({ id, text, linkTo, dropdownContent }, index) => (
          <div
            key={id}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {dropdownContent ? (
              <div className="flex items-center py-4 text-[#FAFAFA] text-xl 2xl:text-2xl transition-all ease-out delay-150 hover:scale-105 text_gradient cursor-pointer">
                {text}
                <FaChevronDown
                  className={`ml-2 transition-transform duration-300 ease-in-out ${
                    dropdownOpenIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            ) : (
              <Link href={linkTo}>
                <span
                  className="flex items-center py-4 text-[#FAFAFA] text-xl 2xl:text-2xl transition-all ease-out delay-150 hover:scale-105 text_gradient"
                >
                  {text}
                </span>
              </Link>
            )}
            {dropdownContent && dropdownOpenIndex === index && (
              <div className={`bg-[#080808] text-[#fff] shadow-lg z-10 ${text === 'Our Treatments' ? 'top-[60px] rounded absolute w-full' : 'fixed overflow-y-auto left-0 w-full top-[70px] h-[100vh] px-4 md:px-[5rem] pb-[87px] opacity-100'}`}>
                {text === 'Our Treatments' ? (
                  <div className="flex flex-col gap-2">
                    {dropdownContent.map((item, idx) => (
                      <Link className="p-2 hover:bg-brandColor " key={idx} href={item.linkTo}>
                        <div
                          className="px-2 text-center text-[1.1rem]"
                          onClick={handleCloseDropdown}
                        >
                          {item.text}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-7 gap-[30px] w-full">
                    {dropdownContent.map((item, idx) => (
                      <Link key={idx} href={item.linkTo}>
                        <div
                          className="rounded-md p-4 flex flex-col items-center justify-center hover:bg-brandColor min-h-[10rem]"
                          onMouseEnter={() => setHoveredIndex(index)} 
                          onMouseLeave={() => setHoveredIndex(null)}
                          onClick={handleCloseDropdown}
                        >
                          <img
                            src={item.imgUrl}
                            alt="treatment-img"
                            className="h-[6rem] w-[6rem] rounded-full"
                          />
                          <div className="block px-4 py-2 rounded text-xs">
                            {item.text}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile menu */}
      <div
        className={`mf:hidden items-center right-0 text-[16px] font-medium absolute h-screen bg-black text-[#fff] flex shadow-xl flex-col gap-[2rem] w-[300px] rounded-[30px] py-[2rem] transition-all ease-linear z-20 ${
          show ? "hidden" : "top-4"
        }`}
      >
        {navLinks.map(({ id, text, linkTo }, idx) => (
          <Link
            key={idx}
            href={linkTo}
            onClick={() => setShow(!show)} // Close mobile menu on link click
            className="text-[#FAFAFA] transition-all ease-out delay-150 hover:scale-105 text_gradient"
          >
            {text}
          </Link>
        ))}
        <div
          className="text-[30px] mf:hidden block absolute left-4 top-4"
          onClick={() => setShow(!show)}
        >
          <RxCross2 />
        </div>
      </div>

      {/* Call button */}
      <div>
        <a href="tel:+91 81694 00907" className="text-[14px] font-bold block">
          <button
            id="call-bttn"
            className="flex justify-center gap-[1rem] rounded-[36px] mf:w-[200px] mf:px-[0rem] px-[0.8rem] py-[0.8rem] items-center transition border-gradient text-[#fff] hover:scale-105"
          >
            <IoCall className="md:text-[18px] text-[16px]" />
            <p className="md:block hidden">+91 81694 00907</p>
          </button>
        </a>
      </div>

      {/* Menu toggle for mobile */}
      <div
        className="text-[30px] mf:hidden block"
        onClick={() => setShow(!show)}
      >
        <HiMenuAlt2 />
      </div>
    </nav>
  );
};

export default Navbar;
