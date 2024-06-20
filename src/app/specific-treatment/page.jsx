"use client";
import { FaUser, FaMobileAlt, FaArrowLeft } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";

import Link from "next/link";
import StaggeredDropDown from "@/components/Dropdown/StaggeredDropDown";

const SpecificTreatment = () => {
  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDuplicate = () => {
    console.log("Duplicate clicked");
  };

  const handleShare = () => {
    console.log("Share clicked");
  };

  const optionsList = [
    { text: "Surgery Recommended", onClick: handleEdit },
    { text: "MRI / Spine X-ray", onClick: handleDuplicate },
    { text: "None", onClick: handleShare },
  ];

  return (
    <div className="pt-[87px] h-min-screen">
      <div className="bg-white h-full w-full">
        <div className="relative min-h-[20rem]">
          <div className="bg-brandColor px-4 md:flex md:px-[5rem]">
            <div className="w-full md:w-[70%] py-[2rem] md:pe-[2rem]">
              <Link
                href="/weTreat"
                className="mb-8 hidden md:flex items-center text-xs"
              >
                <span>
                  <FaArrowLeft />
                </span>
                <p className="ms-2">Back to Treatments</p>
              </Link>
              <div className="text-white">
                {/* Title here */}
                <h2 className="text-5xl mb-4">Back Pain</h2>
                {/* Description here */}
                <p className="text-justify text-lg">
                  Back pain refers to discomfort or pain that you feel anywhere
                  along your spine or in the muscles, nerves, or other soft
                  tissues surrounding the spine. It's a very common condition
                  that can vary widely in intensity and duration. Back pain can
                  be acute, lasting for a few days to a few weeks, or chronic,
                  lasting for more than three months. It can range from a dull,
                  constant ache to a sudden, sharp pain that makes it difficult
                  to move. The pain can also radiate to other areas of the body,
                  such as the hips, legs, or shoulders.
                </p>
              </div>
            </div>
            {/* Image link here with tailwind utility class */}
            <div className="bg-[url('/home_new/back.jpg')] bg-cover bg-center md:flex-1 h-[20rem] md:h-auto"></div>
          </div>
          <div className="px-4 md:flex md:px-[5rem] py-[2rem] min-h-[20rem]">
            {/* Content Here */}
            <div className="w-full md:w-[70%] py-[2rem] pe-[2rem]">
              <p className="text-4xl">Potential Causes of Back Pain:</p> {/*Here I want the title of the content's object like it can be potential or causes or anything else */}
              <ul className="list-disc md:pl-6 text-lg ml-10 text-justify">
                <li>
                  Muscle or Ligament Strain: Often due to sudden movements or
                  lifting heavy objects improperly.
                </li>
                <li>
                  Poor Posture: Slouching, sitting for long periods, or standing
                  incorrectly can strain the muscles and ligaments in the back.
                </li>
                <li>
                  Injury or Trauma: Accidents, falls, or sports injuries can
                  damage the spine or surrounding tissues.
                </li>
                <li>
                  Degenerative Conditions: Osteoarthritis, degenerative disc
                  disease, or spinal stenosis can cause gradual wear and tear on
                  the spine, leading to back pain.
                </li>
                <li>
                  Herniated Discs: Discs between the vertebrae can bulge or
                  rupture, pressing on nearby nerves and causing pain.
                </li>
                <li>
                  Structural Issues: Abnormalities in the spine, such as
                  scoliosis or lordosis, can contribute to back pain.
                </li>
                <li>
                  Underlying Medical Conditions: Conditions like kidney stones,
                  infections, or inflammatory diseases can cause back pain as a
                  symptom.
                </li>
                <li>
                  Psychological Factors: Stress, anxiety, and depression can
                  exacerbate back pain or make it more difficult to manage.
                </li>
                <li>
                  Changes in Reflexes: A slipped disc can affect reflexes,
                  causing them to become weaker or absent.
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="bg-[#F1F1F6] rounded-lg md:w-min-40 p-4 mb-3 fixed-0">
                <div className="text-xl text-center md:text-2xl font-medium text-brandColor py-2">
                  BOOK AN APPOINTMENT
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-b border-slate-400/25"></div>
                    </div>
                  </div>
                </div>
                <form className="space-y-4 px-5 pb-3">
                  <div className="flex flex-col space-y-3">
                    <div className="relative flex-1">
                      <div className="flex items-center relative group">
                        <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                          <FaUser className="h-5 w-5" />
                        </span>
                        <input
                          required
                          id="first-name"
                          aria-required="true"
                          type="text"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <div className="flex items-center relative group">
                        <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                          <FaMobileAlt className="h-5 w-5" />
                        </span>
                        <input
                          required
                          id="number"
                          aria-required="true"
                          type="text"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                          placeholder="Your Contact Number"
                        />
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <div className="flex items-center relative group">
                        <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                          <IoMailOutline className="h-5 w-5" />
                        </span>
                        <input
                          required
                          id="email"
                          aria-required="true"
                          type="email"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <div className="flex items-center relative w-full">
                        <StaggeredDropDown
                          buttonName="MRI/ Spine X-ray"
                          optionsList={optionsList}
                        />
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <div className="flex items-center relative group">
                        <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                          <IoLocationOutline className="h-5 w-5" />
                        </span>
                        <input
                          required
                          id="location"
                          aria-required="true"
                          type="text"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                          placeholder="Location"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="gap-[1rem] font-semibold rounded-[36px] w-full md:w-auto px-6 py-2  items-center transition border-gradient text-[#fff] hover:scale-105"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificTreatment;
