import { FaUser, FaMobileAlt } from "react-icons/fa";
import { SubCarousel } from "./SubCarousel/SubCarousel";

const SubWelcome = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-[#EAECEC] bg-bottom h-screen relative">
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}
      <div className="md:flex h-full pt-[87px]">
        <div className="hero-content md:w-[50%] flex flex-col h-full overflow-hidden">
          <div className="flex-1 w-full overflow-hidden">
            <SubCarousel />
          </div>
          <div className="min-h-[20%] w-full flex flex-col gap-2 justify-center items-center p-4 overflow-hidden">
            <h3 className="text-2xl md:text-lg 2xl:text-3xl font-bold text-brandColor text-center">
              CUTTING EDGE TECH
              <br />
              For the first time in INDIA
            </h3>
            {/* <p className="w-full md:w-5/6 text-base text-justify">
              We provide tailored treatment solutions recognizing the
              individuality of each person's pain. To receive a personalised
              treatment plan, you can schedule a consultation at MY PAIN CLINIC,
              today!
            </p> */}
          </div>
          <div className="flex-1 w-full overflow-hidden">
            <SubCarousel />
          </div>
        </div>

        {/* Contact Form */}
        <div className="hero-content hidden md:w-[50%] md:flex md:flex-col justify-center items-center gap-4">
          <div className="min-h-[20%] w-full flex flex-col gap-2 justify-center overflow-hidden">
            <h3 className="text-2xl md:text-lg 2xl:text-3xl font-bold text-brandColor text-center">
              YOUR JOURNEY TO PAIN-FREE,
              <br /> CUSTOMIZED, NONINVASIVE, DRUG-FREE TREATMENTS
            </h3>
            <p className="w-full text-base text-center">
              We’re happy to answer any questions you may have and help you
              determine which of our services best fit your needs.
            </p>
          </div>
          <div className="bg-[#F1F1F6] rounded-lg md:w-96 p-4 mb-3 shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">
            <div className="text-2xl text-center md:text-3xl font-medium  text-brandColor py-2">
              BOOK AN APPOINTMENT
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-b border-slate-400/25"></div>
                </div>
              </div>
            </div>
            <form className="space-y-4 px-5 pb-3">
              <div className="flex flex-col space-y-4">
                <div className="relative flex-1">
                  <label className="block text-lg font-normal text-gray-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex items-center relative group">
                    <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                      <FaUser className="h-5 w-5" />
                    </span>
                    <input
                      required
                      id="first-name"
                      aria-required="true"
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="relative flex-1">
                  <label className="block text-lg font-normal text-gray-700">
                    Number <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex items-center relative group">
                    <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                      <FaMobileAlt className="h-5 w-5" />
                    </span>
                    <input
                      required
                      id="number"
                      aria-required="true"
                      type="text"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                      placeholder=""
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
  );
};

export default SubWelcome;
