"use client"
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [showSerach, setShowSearch] = useState(false);
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
    },
    {
      id: 3,
      text: "Treatments",
      linkTo: "/treatments",
    },
    {
      id: 4,
      text: "Assessments",
      linkTo: "/assessments",
    },
    {
      id: 5,
      text: "Services",
      linkTo: "/services",
    },
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
  return (
    <nav className=" bg-[#080808] h-[87px] flex mf:justify-around justify-between px-[1rem] items-center text-[#B1B4B6] fixed top-0 w-[100%] z-50" id="navbar">
      <div>
        <Link href="/">
          <img style={{ width: "40%" }} src="/images/logo-mpc.png" alt="logo" />
        </Link>
      </div>
      {/* desktop menu is here */}
      <div className="mf:flex justify-center items-center gap-[1.5rem] text-[16px] font-medium transition hidden">
        {navLinks.map(({ id, text, linkTo }, idx) => {
          return (
            <Link
              href={linkTo}
              key={id}
              className={`" text-[#FAFAFA] text-xl 2xl:text-2xl transition-all ease-out delay-150 hover:scale-105  text_gradient "`}
            >
              {text}
            </Link>
          );
        })}
      </div>

      {/* mobile menu is here */}
      <div
        className={`" mf:hidden items-center right-0   text-[16px] font-medium   absolute h-screen  bg-black text-[#fff] flex shadow-xl  flex-col gap-[2rem] w-[300px] rounded-[30px]  py-[2rem] transition-all ease-linear delay-150 z-20 " ${
          show ? " hidden " : "top-4"
        } `}
      >
        {navLinks.map(({ id, text, linkTo }, idx) => {
          return (
            <Link
              href={linkTo}
              key={idx}
              className="text-[#FAFAFA] transition-all ease-out delay-150 hover:scale-105  text_gradient"
            >
              {text}
            </Link>
          );
        })}
        <div
          className=" text-[30px] mf:hidden block absolute left-4 top-4 "
          onClick={() => setShow(!show)}
        >
          <RxCross2 />
        </div>
      </div>

      <div>
          <a
            href="tel:+91 81694 00907"
            className=" text-[14px] font-bold block"
          >
        <button id="call-bttn" className=" flex justify-center gap-[1rem] rounded-[36px] mf:w-[200px] mf:px-[0rem] px-[0.8rem] py-[0.8rem]  items-center transition border-gradient text-[#fff] hover:scale-105">
          
          <IoCall className=" md:text-[18px] text-[16px]" />
          <p className="md:block hidden">+91 81694 00907</p>
        </button>
          </a>
      </div>

      <div
        className=" text-[30px] mf:hidden block "
        onClick={() => setShow(!show)}
      >
        <HiMenuAlt2 />
      </div>
    </nav>
  );
};

export default Navbar;
