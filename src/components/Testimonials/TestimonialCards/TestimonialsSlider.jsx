import { ImQuotesLeft } from "react-icons/im";

import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
export default function TestimonialSlider({ team }) {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
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
    appendDots: (dots) => (
      <div className="">
        <ul className="flex justify-center items-center ">
          {dots}
          <li
            className="relative cursor-pointer text-white flex items-center justify-center custom-slick"
            onClick={next}
          ></li>
        </ul>
      </div>
    ),
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
          {team.map((items, id) => (
            <div key={id}>
              {/* <div className="grid lg:grid-cols-1  my-12 lg:items-center text-[#000] w-[100%] mx-auto  ">
                <div className=" mf:max-w-[1170px] text-center mx-auto  w-full relative  overflow-hidden py-[2rem]">
                  <p className=" mf:w-12/12 w-full mx-auto mf:text-[24px] md:text-[20px] text-[14px]">
                    {items.paragraph1}
                  </p>
                  <br />
                  <br />

                  <a className=" textGradient my-8 text-[30px]">{items.name}</a>
                </div>
              </div> */}
              <div className="relative flex flex-col text-gray-700 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.2)] rounded-xl w-70 h-80 m-4">
                <div className=" flex gap-4 mx-4 my-1 h-14 ">
                  <div className="w-full">
                    <div className="flex items-center">
                      <span>
                        <img
                          className="min-h-[1.8rem]"
                          src="/images/Icons/google-icon.svg"
                          alt="google-icon"
                        />
                      </span>
                      <p className="font-medium text-2xl w-full text-center">
                        {items.name}
                      </p>
                      
                    </div>
                    <div className="flex items-center justify-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ms-1 ${
                            index < items.rating
                              ? "text-yellow-300"
                              : "text-gray-300"
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-4 flex flex-col gap-2">
                  {/* <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {items.paragraph1}
                  </h4> */}
                  <p className="block text-md leading-relaxed text-center ">
                    {items.para2}
                  </p>
                </div>
              </div>
            </div>
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
