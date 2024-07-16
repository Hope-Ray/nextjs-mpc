import { FaUser, FaMobileAlt } from "react-icons/fa";
// import { SubCarousel } from "./SubCarousel/SubCarousel";
// import { SubCarouselLeft } from "./SubCarousel/SubCarouselLeft";
import { SiTicktick } from "react-icons/si";

const SubWelcome = () => {
  return (
    <div className="relative min-h-[100svh] md:h-screen bg-cover bg-no-repeat bg-center">
      <div className="relative md:flex h-full justify-center pt-[87px] px-4 md:px-[10rem]">
        <div className="w-full md:w-1/2 flex flex-col items-center pb-4 justify-center">
          <div className="relative overflow-x-hidden h-[100%] flex flex-col justify-center">
            <div className="bg-[url(/home_new/doctor3.jpeg)] h-[30rem] w-[20rem] bg-cover bg-no-repeat bg-top rounded-md"></div>
          </div>
          <div className="min-h-20 max-w-[20rem]  bg-brandColor rounded-b-md">
              <div className="grid w-full grid-cols-3 items-center gap-2 min-h-20 px-2">
                <div className="flex items-center justify-evenly py-2">
                  <img
                    src="/home_new/Customized_Treatment_2.png"
                    alt="Customized"
                    className="h-[2.5rem] md:h-[3rem] object-contain"
                  />
                  <p className="text-white text-xs text-center font-bold">
                    Customized treatment
                  </p>
                </div>
                <div className="flex items-center justify-evenly py-2">
                  <img
                    src="/home_new/Non_Invasive_3.png"
                    alt="Non-Invasive"
                    className="h-[2.5rem] md:h-[3rem] object-contain"
                  />
                  <p className="text-white text-xs text-center font-bold">
                    No Surgery
                  </p>
                </div>
                <div className="flex items-center justify-evenly py-2">
                  <img
                    src="/home_new/Drug_Free.png"
                    alt="Recovery"
                    className="h-[2.5rem] md:h-[3rem] object-contain"
                  />
                  <p className="text-white text-xs text-center font-bold">
                    No medicine
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="self-start flex flex-col flex-1 justify-center">
            {/* Contact Form */}
            <div className="text-xl text-brandColor text-center font-semibold">
              Bringing USA Technology and Treatments to Mumbai's Affordability!
              <span className="flex items-center justify-center gap-2 mt-[3rem]">
                <SiTicktick />
                Book An Appointment
              </span>
            </div>
            <div className="hero-content min-w-full md:min-w-[50%] md:flex md:flex-col justify-center items-center gap-4">
              <div className="md:min-w-96 py-4 mb-3">
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
                          style={{
                            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                      </div>
                    </div>
                    <div className="relative flex-1 mt-0">
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
                          style={{
                            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="gap-[1rem] font-semibold rounded-[36px] w-full md:w-auto px-10 py-2  items-center transition border-gradient text-[#fff] hover:scale-105"
                    >
                      Get A Call Back
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

export default SubWelcome;
