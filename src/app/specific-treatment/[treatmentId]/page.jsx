
import treatmentsData from "@/hooks/treatments";
import { FaUser, FaMobileAlt, FaArrowLeft } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";

import Link from "next/link";

export async function generateStaticParams() {

  return Object.keys(treatmentsData).map((key) => ({
    treatmentId: key,
  }))
}

 const TreatmentDetails = ({ params }) => {

  const { treatmentId } = params

  const fetchTreatmentData = (treatmentSlug) => {
    return treatmentsData[treatmentSlug] || null;
  };

  const treatmentData = fetchTreatmentData(treatmentId);


  if (!treatmentData) {
    return <div className="pt-[87px] h-min-screen">Loading...</div>;
  }

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDuplicate = () => {
    console.log("Duplicate clicked");
  };

  const handleShare = () => {
    console.log("Share clicked");
  };

  // const optionsList = [
  //   { text: "Surgery Recommended", onClick: handleEdit },
  //   { text: "MRI / Spine X-ray", onClick: handleDuplicate },
  //   { text: "None", onClick: handleShare },
  // ];

  return (
    <div className="pt-[87px] min-h-screen">
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
                <h2 className="text-5xl mb-4">{treatmentData.title}</h2>
                {/* Description here */}
                <p className="text-justify text-lg">
                  {treatmentData.description}
                </p>
              </div>
            </div>
            {/* Image link here with tailwind utility class */}
            <div className={`md:flex-1 h-[20rem] md:h-auto`}>
              <img src={treatmentData.image} className="" alt="" />
            </div>
          </div>
          <div className="px-4 md:flex md:px-[5rem] py-[2rem] min-h-[20rem]">
            {/* Content Here */}
            <div className="w-full md:w-[70%] pb-[2rem] pe-[2rem]">
      {treatmentData.content &&
        Object.entries(treatmentData.content).map(([sectionTitle, items]) => (
          <div key={sectionTitle} className="mt-[2rem]">
            <p className="text-4xl">{sectionTitle}</p>
            {Array.isArray(items) ? (
              // Case where items is an array (e.g., sciatica)
              <ul className="list-disc md:pl-6 text-lg ml-10 text-justify">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              // Case where items is an object with types and details (e.g., hamstring-injuries)
              <ul className="list-disc md:pl-6 text-lg ml-10 text-justify">
                {Object.entries(items).map(([type, details], idx) => (
                  <li key={idx}>
                    <strong>{type}</strong>
                    <ul className="list-disc md:pl-6 ml-5">
                      {details.map((detail, subIdx) => (
                        <li key={subIdx}>{detail}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
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
                    {/* <div className="relative flex-1">
                      <div className="flex items-center relative w-full">
                        <StaggeredDropDown
                          buttonName="MRI/ Spine X-ray"
                          optionsList={optionsList}
                        />
                      </div>
                    </div> */}
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




export default TreatmentDetails;