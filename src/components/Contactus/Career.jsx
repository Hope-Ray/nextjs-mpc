import { motion } from "framer-motion";
import IconDropdown from "../../../public/images/dropdownIcon.svg";
import Dropdown from "./Dropdown";
const yAxisAnimation = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    delay: 0.8,
    y: { type: "spring", stiffness: 60 }, // Animating on the Y-axis
    opacity: { duration: 0.2 },
    ease: "easeIn",
    duration: 1,
  },
};
const styles = {
  borderTop: "1px solid",
  backgroundImage: "linear-gradient(283.4deg, #5BD6DD 23.54%, #036DED 70.28%)",
  backgroundClip: "border-box",
  backgroundOrigin: "border-box",
  border: "1px, 0px, 0px, 0px",
};
const Career = () => {
  return (
    <div>
      <div className="">
        <div
          {...yAxisAnimation}
          className=" flex items-center flex-col py-[4rem] bg-white"
        >
          <motion.h2 {...yAxisAnimation} className="md:text-5xl text-3xl font-medium text-brandColor">
            Career
          </motion.h2>
          <div className=" w-[100px] h-[2px] mx-auto border-gradient  "></div>
        </div>

        <div className="bg-[#E4E4F1]   md:py-14 py-6">
          <form className="max-w-7xl w-[90%] mx-auto">
            <div className=" flex md:flex-row flex-col justify-between items-center">
              <div className="relative md:w-[30%] w-full md:mt-0 mt-4">
                <label
                  htmlFor=""
                  className="md:text-xl text-lg font-light text-[#454545]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="floating-phone-number"
                  className="block py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545] bg-transparent border-0 border-b-2 border-[#BAC1C5] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Name "
                />
              </div>
              <div className="relative md:w-[30%] w-full md:mt-0 mt-4">
                <label
                  htmlFor=""
                  className="md:text-xl text-lg font-light text-[#454545]"
                >
                  Age
                </label>
                <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400"></span>
                <input
                  type="text"
                  id="floating-phone-number"
                  className="block py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545] bg-transparent border-0 border-b-2 border-[#BAC1C5] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder=" Enter age"
                />
              </div>
              <div className="relative md:w-[30%] w-full md:mt-0 mt-4">
                <label
                  htmlFor=""
                  className="md:text-xl text-lg font-light text-[#454545]"
                >
                  Date
                </label>
                <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400"></span>
                <input
                  type="date"
                  id="floating-phone-number"
                  className="block py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545] bg-transparent border-0 border-b-2 border-[#BAC1C5] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder=" Enter age"
                />
              </div>
            </div>
            <div className="md:py-8 py-4  my-6">
              <h2 className=" md:text-[26px] text-xl font-semibold">
                Qualification
              </h2>
              <div className="grid grid-cols-1 md:mt-8 mt-3 md:grid-cols-2 gap-4 md:w-[85%] w-full">
                <div className=" ">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Bachelors of physiotherapy (BPT)
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Masters of physiotherapy (mPT)
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Personal trainer (PT)
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Doctorate of philosophy im physiotherapy (PhD)
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Strength & conditioning coach
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Others
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className=" flex md:flex-row flex-col justify-between items-center">
              <div className="relative md:w-[30%] w-full md:mt-0 mt-4">
                <label
                  htmlFor=""
                  className="md:text-xl text-lg font-light text-[#454545]"
                >
                  Years of experience
                </label>
                <input
                  type="text"
                  id="floating-phone-number"
                  className="block py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545] bg-transparent border-0 border-b-2 border-[#BAC1C5] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Enter years of experience "
                />
              </div>
              <div className="relative  md:w-[30%] w-full md:mt-0 mt-4">
                <label
                  htmlFor=""
                  className="md:text-xl text-lg font-light text-[#454545]"
                >
                  Currently working at
                </label>
                <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400"></span>
                <input
                  type="text"
                  id="floating-phone-number"
                  className="block py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545] bg-transparent border-0 border-b-2 border-[#BAC1C5] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder=" Enter years of experience"
                />
                <label
                  htmlFor="floating-phone-number"
                  className="absolute  text-[#8B978E] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Enter currently working at
                </label>
              </div>
              <div className="relative  md:w-[30%] w-full md:mt-0 mt-4">
                <label
                  htmlFor=""
                  className="md:text-xl text-lg font-light text-[#454545]"
                >
                  Previous work history (optional)
                </label>
                <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400"></span>
                <input
                  type="input"
                  id="floating-phone-number"
                  className="block py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545] bg-transparent border-0 border-b-2 border-[#BAC1C5] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder=" Enter previous work history"
                />
                <label
                  htmlFor="floating-phone-number"
                  className="absolute  text-[#8B978E] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Enter previous work history
                </label>
              </div>
            </div>
            <div className="my-8 flex md:flex-row flex-col justify-between items-center">
              <div className="relative md:w-[40%] w-full">
                <label
                  htmlFor=""
                  className="md:text-xl text-lg font-light text-[#454545]"
                >
                  Willing to sign a contract
                </label>
                <input
                  type="text"
                  id="floating-phone-number"
                  className="block py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545] bg-transparent border-0 border-b-2 border-[#BAC1C5] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Enter years of experience "
                />
                <img
                  className="absolute top-14 right-20"
                  src={IconDropdown}
                  alt=""
                />
              </div>

              <div className="relative  md:w-[40%] w-full">
                <label
                  htmlFor=""
                  className="md:text-xl text-lg font-light text-[#454545]"
                >
                  Willing to travel to different countries globally
                </label>
                <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400"></span>
                <input
                  type="input"
                  id="floating-phone-number"
                  className="block py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545] bg-transparent border-0 border-b-2 border-[#BAC1C5] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder=" Enter previous work history"
                />

                <img
                  className="absolute top-14 right-20"
                  src={IconDropdown}
                  alt=""
                />
              </div>
            </div>
            <div className="md:py-8 py-4  my-6">
              <h2 className=" md:text-[26px] text-xl font-semibold">
                Specialized in
              </h2>
              <div className="grid grid-cols-1 md:mt-8 mt-3 md:grid-cols-2 gap-4 md:w-[85%] w-full">
                <div className=" ">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Musculoskeletal
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    sports injury and rehabilitation
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Cardio-vascular and respiratory sciences
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Community based rehabilitation
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Neuro physiotherapy
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    pediatric narcotherapy
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="md:py-8 py-4  my-6">
              <h2 className=" md:text-[26px] text-xl font-semibold">
                Applying for which designation
              </h2>
              <div className="grid grid-cols-1 md:mt-8 mt-3 md:grid-cols-2 gap-4 md:w-[85%] w-full">
                <div className=" ">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Assistant physiotherapist
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Physiotherapist
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Personal Trainer
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Senior Physiotherapist
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Head of department
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
                <div className="">
                  <label className="main md:text-[22px] text-lg font-light text-[#454545]  ">
                    Strength & conditioning coach
                    <input type="checkbox" />
                    <span className="checkbox-container"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <Dropdown />
            </div>
            <div className="my-6 md:w-1/2 w-full">
              <label
                htmlFor=""
                className="md:text-xl text-lg font-light text-[#454545]"
              >
                Other
              </label>
              <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400"></span>
              <input
                type="input"
                id="floating-phone-number"
                className="block py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545] bg-transparent border-0 border-b-2 border-[#BAC1C5] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder=" Enter detail"
              />
              <label
                htmlFor="floating-phone-number"
                className="absolute  text-[#8B978E] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Enter detail
              </label>
            </div>
            <div className="my-6 w-full">
              <label
                htmlFor=""
                className="md:text-xl text-lg font-light text-[#454545] "
              >
                Attach your CV and explain in few words in the blow mentioned
                box why you you are applying for this job
              </label>
              <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400"></span>
              <textarea
                rows={3}
                type="textarea"
                id="floating-phone-number"
                className="block mt-2  py-2.5 pe-3 w-full text-[22px] font-thin text-[#454545] bg-transparent border  border-[#BAC1C5] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder=" Enter detail"
              />
            </div>

            <div className="my-8 flex md:flex-row flex-col justify-between items-center">
              <div className="relative md:w-[40%] w-full">
                <label
                  htmlFor=""
                  className="md:text-xl text-lg font-light text-[#454545]"
                >
                  Upload CV
                </label>

                <div className="border border-t-0 border-r-0 border-l-0 border-b-[#B9BFC3]">
                  <label
                    htmlFor="upload"
                    className="flex flex-col md:text-xl text-lg font-light text-[#454545]items-center gap-2 cursor-pointer"
                  >
                    <span className="block py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545]  underline">
                      Choose a file
                    </span>
                  </label>
                  <input id="upload" type="file" className="hidden" />
                </div>
              </div>
              <div className="relative  md:w-[40%] w-full">
                <label
                  htmlFor=""
                  className="md:text-xl text-lg font-light text-[#454545]"
                >
                  Upload your passport sizephotography
                </label>

                <div className="border border-t-0 border-r-0 border-l-0 border-b-[#B9BFC3] ">
                  <label
                    htmlFor="upload"
                    className="flex flex-col md:text-xl text-lg font-light text-[#454545]items-center gap-2 cursor-pointer"
                  >
                    <span className="block py-2.5 pe-0 w-full text-[22px] font-thin text-[#454545]  underline">
                      Choose a file
                    </span>
                  </label>
                  <input id="upload" type="file" className="hidden" />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="border-gradient text-white rounded-full py-2 px-12 hover:from-white hover:to-white  transition-all delay-150 ease-linear"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
