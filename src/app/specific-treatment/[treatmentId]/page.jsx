import treatmentsData from "@/hooks/treatments";
import { FaArrowRight, FaHome  } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import AppointmentForm from "@/components/SpecificTreatment/AppointmentForm";
import ModalManager from "@/components/SpecificTreatment/ModalManager";

import Link from "next/link";

export async function generateStaticParams() {
  return Object.keys(treatmentsData).map((key) => ({
    treatmentId: key,
  }));
}

export async function generateMetadata({ params }) {
  const { treatmentId } = params;
  const treatment = treatmentsData[treatmentId];

  // Ensure treatment exists and has keywords
  if (treatment) {
    const keywords = treatment.keywords || [];

    return {
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      keywords: keywords,
      alternates: {
        canonical: `https://mypainclinicglobal.com/specific-treatment/${treatmentId}`,
      },
      openGraph: {
        title:
          "Pain Management Clinic & Physiotherapy in Mumbai, Bandra | My Pain Clinic",
        description: `South Asia's largest pain management and physiotherapy clinic in Bandra, Mumbai. Get relief from pain with our personalized treatment plans. Book your appointment today`,
        url: `https://mypainclinicglobal.com/specific-treatment/${treatmentId}`,
        siteName: "My Pain Clinic",
        images: [
          {
            url: "https://mypainclinicglobal.com/images/main-slider/banners1.jpg",
          },
        ],
        type: "website",
      },
    };
  }
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

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${treatmentData.title} in Bandra, Mumbai`,
    image: `https://mypainclinicglobal.com${treatmentData.image}`,
    "@id": "https://mypainclinicglobal.com/",
    url: `https://mypainclinicglobal.com/specific-treatment/${treatmentId}`,
    telephone: "8169400905",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit B1, V.N. Sphere Mall, Linking Road, Bandra (West)",
      addressLocality: "Mumbai",
      postalCode: "400050",
      addressCountry: "IN",
    },
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://mypainclinicglobal.com/specific-treatment/${treatmentId}`,
    additionalType: `https://mypainclinicglobal.com/specific-treatment/${treatmentId}`,
    alternateName: `${treatmentData.title}`,
    areaServed: "Mumbai",
    category: `https://mypainclinicglobal.com/specific-treatment/${treatmentId}`,
    description: `${treatmentData.description}`,
    image: `https://mypainclinicglobal.com${treatmentData.image}`,
    logo: "https://mypainclinicglobal.com/images/logo-mpc.png",
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
                <div className="mt-6 md:mt-1 leading-normal">
                  <span className="font-semibold">{type}</span>
                  {` ${details[0]}`}
                </div>
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdLocalBusiness),
        }}
      ></script>
      <script
        type="application/ld+json"
        className="schemantra"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      ></script>
      <div className="pt-[87px] min-h-screen">
        <div className="bg-white h-full w-full">
          <div className="relative min-h-[20rem]">
            <div className="bg-brandColor px-4 md:flex md:px-[5rem]">
              <div className="w-full md:w-[70%] py-[2rem] md:pe-[2rem]">
                <div>
                  <nav
                    className="flex px-0 py-3  bg-brandColor"
                    aria-label="Breadcrumb"
                  >
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                      <li className="inline-flex items-center">
                        <Link
                          href="/"
                          className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white"
                        >
                          <FaHome className="w-3 h-3 me-1.5"/>
                          Home
                        </Link>
                      </li>
                      <li aria-current="page">
                        <div className="flex items-center">
                        <FaArrowRight className="w-3 h-3 text-gray-300"/>
                          <span className="ms-1 text-sm font-medium text-gray-100 md:ms-2">
                          {treatmentData.title}
                          </span>
                        </div>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="text-white">
                  <h1 className="text-5xl mb-4">{treatmentData.title}</h1>
                  <p className="text-justify text-lg">
                    {treatmentData.description}
                  </p>
                </div>
              </div>
              <div
                className={`md:flex-1 flex justify-center items-center md:min-h-[20rem] h-auto`}
              >
                <img src={treatmentData.image} className="" alt="" />
              </div>
            </div>
            <div className="px-4 md:flex md:px-[5rem] py-[2rem] min-h-[20rem]">
              <div className="w-full md:w-[70%] md:pe-[2rem]">
                {treatmentData.content &&
                  Object.entries(treatmentData.content).map(
                    ([sectionTitle, items]) => (
                      <div key={sectionTitle} className="mt-[2rem]">
                        <h2 className="text-4xl">{sectionTitle}</h2>
                        {renderContent(items)}
                      </div>
                    )
                  )}
                <div className="text-lg text-justify  mt-10">
                  {treatmentData?.para}
                </div>
              </div>
              <div className="hidden md:block flex-1">
                <AppointmentForm />
              </div>
            </div>
            <div className="px-4 md:px-[5rem] pb-[2rem] flex flex-col justify-center gap-4">
              <p className="text-base font-semibold">
                We provide tailored treatment solutions recognizing the
                individuality of each person's pain. To receive a personalised
                treatment plan, you can schedule a consultation at{" "}
                <span className="font-futura">MY PAIN CLINIC</span>, today!
              </p>
              <div className="text-center">
                <ModalManager />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreatmentDetails;
