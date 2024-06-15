"use client"
import  { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TestimonialSlider({ cardsData }) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // appendDots: (dots) => (
    //   <div className="">
    //     <ul className="flex justify-center items-center ">
    //       {dots}
    //       <li
    //         className="relative cursor-pointer text-white flex items-center justify-center custom-slick"
    //         onClick={next}
    //       ></li>
    //     </ul>
    //   </div>
    // ),
    customPaging: (i) => (
      <div className="w-[10px] h-[10px] rounded-full bg-gradient-to-r from-[#036DED] to-[#5BD6DD] transition-all duration-300"></div>
    ),
  };
  return (
    <div className="slider-container">
      <div className="relative my-12  ">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {cardsData.cards.map(({id,image,btnText,listArray}) => (
            <Link href="/treatments" key={id}>
            <div
              key={id}
              className=" main_container group  w-[90%] mx-auto  "
            >
              <div  className="">
                <img
                  src={image}
                  width={500}
                  height={500}
                  alt=""
                  className=" aspect-[6/8] transition-all ease-linear delay-150 z-99 mx-auto  w-full h-full relative lg:rounded-[80px] rounded-[75px]  object-fit   "
                />
              </div>
              <button className="bg-[#fff]/50 backdrop-blur-sm md:w-[70%] w-[60%] absolute z-10 bottom-4 text-[#fff] h-[60px] rounded-[11px] transition-all ease-linear delay-150 mf:inset-x-[12%] inset-x-[1rem] flex justify-center items-center mx-auto">
                <div
                  href=""
                  className="bg-gradient-to-r from-[#036DED] to-[#036065] bg-clip-text text-transparent mf:text-[20px] text-[14px] font-bold max-w-[100%]"
                >
                  {btnText}
                </div>
              </button>
              {/* mf:left-[20%] md:left-[5%] left-[12%] */}

              <div className=" content  mx-auto mf:w-[100%] lg:rounded-[80px] rounded-[75px]  ">
                <ul
                  className=" list-disc  gap-[0.3rem]  ml-5 mb-5  "
                  id="style-4"
                  style={{
                    marginBottom: "3rem",
                    // display: "list-item",
                    // listStyleType: "disc",
                  }}
                >
                  {listArray.map((e, i) => (
                    <li className="text-lg 2xl:text-2xl" key={i}>{e}</li>
                  ))}
                </ul>
              </div>

              {/* hover images are here */}
              {/* <div className="absolute w-full bottom-[-3.5rem] inset-x-0  justify-between md:group-hover:flex hidden       ">
                <div className="transition-all delay-150 ">
                  <img
                    src="/home/about_hover.svg"
                    alt=""
                    className=" w-[100px] z-0 "
                  />
                </div>
                <div className="   z-10">
                  <img
                    src="/home/abouthover1.svg"
                    alt=""
                    className=" w-[100px]"
                  />
                </div>
              </div> */}
            </div>
          </Link>
          ))}
        </Slider>
        <div
          className="absolute z-30 sm:flex hidden gap-3 top-  1/2  -right-10  bottom-1/2 justify-between -left-10 "
          style={{ textAlign: "center" }}
        >
          <div
            className="cursor-pointer prev_btn  w-[30px] h-[30px] text-[30px] border text-[#036DED] border-[#036DED]  rounded-full flex items-center justify-center  hover:bg-[#036DED] hover:text-[#fff] transition-all ease-linear delay-150 "
            onClick={previous}
          >
            <FaChevronLeft size={14} />
          </div>
          <div
            className=" cursor-pointer next_btn  w-[30px] h-[30px] text-[30px] border text-[#036DED] border-[#036DED]  rounded-full flex items-center justify-center hover:bg-[#036DED] hover:text-[#fff] transition-all ease-linear delay-150 "
            onClick={next}
          >
            <FaChevronRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
