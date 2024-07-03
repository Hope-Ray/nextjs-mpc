import treatmentsData from "@/hooks/treatments";
import { FaUser, FaMobileAlt, FaArrowLeft } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import AppointmentForm from "@/components/SpecificTreatment/AppointmentForm";
import ModalManager from "@/components/SpecificTreatment/ModalManager";

import Link from "next/link";

export async function generateStaticParams() {
  return Object.keys(treatmentsData).map((key) => ({
    treatmentId: key,
  }));
}

const TreatmentDetails = ({ params }) => {
  const { treatmentId } = params;

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

  const renderContent = (items) => {
    if (Array.isArray(items)) {
      return (
        <ul className="list-disc list-inside md:pl-10 text-lg">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return (
        <ul className="list-disc md:pl-10 text-lg  text-justify">
          {Object.entries(items).map(([type, details], idx) => (
            <div key={idx}>
              {/* <div className="font-semibold">{type}</div> */}
              {Array.isArray(details) ? (
                <div className="mt-1 leading-normal"><span className="font-semibold">{type}</span>{` ${details[0]}`}</div>
              ) : (
                <p>{details}</p>
              )}
            </div>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="pt-[87px] min-h-screen">
      <div className="bg-white h-full w-full">
        <div className="relative min-h-[20rem]">
          <div className="bg-brandColor px-4 md:flex md:px-[5rem]">
            <div className="w-full md:w-[70%] py-[2rem] md:pe-[2rem]">
              {/* <Link
                href="/weTreat"
                className="mb-8 hidden md:flex items-center text-xs"
              >
                <span>
                  <FaArrowLeft />
                </span>
                <p className="ms-2">Back to Treatments</p>
              </Link> */}
              <div className="text-white">
                <h2 className="text-5xl mb-4">{treatmentData.title}</h2>
                <p className="text-justify text-lg">
                  {treatmentData.description}
                </p>
              </div>
            </div>
            <div className={`md:flex-1 flex justify-center items-center md:min-h-[20rem] h-auto`}>
              <img src={treatmentData.image} className="" alt="" />
            </div>
          </div>
          <div className="px-4 md:flex md:px-[5rem] py-[2rem] min-h-[20rem]">
            <div className="w-full md:w-[70%] pe-[2rem]">
              {treatmentData.content &&
                Object.entries(treatmentData.content).map(
                  ([sectionTitle, items]) => (
                    <div key={sectionTitle} className="mt-[2rem]">
                      <p className="text-4xl">{sectionTitle}</p>
                      {renderContent(items)}
                    </div>
                  )
                )}
                <div className="text-lg text-justify  mt-10">
                  {treatmentData?.para}
                </div>
            </div>
            <div className="flex-1">
              <AppointmentForm />
            </div>
          </div>
          <div className="px-4 md:px-[5rem] pb-[2rem] flex flex-col justify-center gap-4">
            <p className="text-base font-semibold">
              We provide tailored treatment solutions recognizing the
              individuality of each person's pain. To receive a personalised
              treatment plan, you can schedule a consultation at MY PAIN CLINIC,
              today!
            </p>
            <div className="text-center">
              <ModalManager />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetails;
