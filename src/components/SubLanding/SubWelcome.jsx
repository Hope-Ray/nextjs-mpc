import { FaUser, FaMobileAlt } from "react-icons/fa";

const SubWelcome = () => {
  return (
    <div className="bg-slate-300 bg-no-repeat bg-cover bg-bottom min-h-screen relative">
      <div className="container py-2 md:px-[5rem] px-4 grid md:grid-cols-2 gap-1 md:gap-4 absolute top-[87px] inset-0 mx-auto">
        <div className="hero-content flex justify-center items-center">
          <div className="h-auto w-full md:w-96 flex flex-col p-4 gap-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brandColor text-justify">
              YOUR JOURNEY TO PAIN-FREE,<br /> CUSTOMIZED,<br /> NONINVASIVE,<br /> DRUG-FREE TREATMENTS
            </h3>
            <p className="w-full md:w-5/6 text-white text-justify">
              We’re happy to answer any questions you may have and help you
              determine which of our services best fit your needs.
            </p>
            <div className="flex justify-center md:justify-center shadow-lg"></div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="hero-content flex justify-center items-center">
          <div className="bg-[#F1F1F6] rounded-lg min-w-full md:w-96 p-4 mb-3">
            <div className="text-2xl text-center md:text-3xl font-medium text-brandColor py-2">
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
