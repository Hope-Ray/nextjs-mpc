import { FaUser, FaMobileAlt } from "react-icons/fa";
// import { SubCarousel } from "./SubCarousel/SubCarousel";
// import { SubCarouselLeft } from "./SubCarousel/SubCarouselLeft";
import { SiTicktick } from "react-icons/si";
import { useState } from "react";
import CustomNotification from "../CustomNotification";
import { AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const SubWelcome = ({ setIsOpen }) => {
  const [notifications, setNotifications] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    number: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    number: "",
  });

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = "";

    if (name === "number" && value !== "" && !validatePhoneNumber(value)) {
      error = "Please enter a valid 10-digit phone number";
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, number } = formData;

    if (!validatePhoneNumber(number)) {
      setErrors({
        ...errors,
        number: "Please enter a valid 10-digit phone number",
      });
      return;
    }
    setLoading(true);

    const queryString = new URLSearchParams({
      first_name: firstName,
      phone_number: number,
    }).toString();

    const apiUrl = `https://mypainclinicglobal.com/send_email/index.php?${queryString}`;

    try {
      const response = await fetch(apiUrl, { method: "GET" });
      if (response.ok) {
        // alert("Form submitted successfully!");
        addNotification(`Form submitted successfully`);
      } else {
        // alert("Failed to submit the form.");
        addNotification("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert("An error occurred. Please try again.");
      addNotification("An error occurred. Please try again.");
    } finally {
      setLoading(false);
      setFormData({
        firstName: "",
        number: "",
      });
    }
  };

  const addNotification = (text) => {
    const id = Math.random();
    setNotifications((prev) => [...prev, { id, text }]);
  };

  const removeNotif = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const customStyle = {
    borderRadius: "20% 66% 11% 32% / 44% 44% 25% 43%",
    background: "rgb(84, 136, 196, 0.3)", // Light blue tint with transparency
    WebkitBackdropFilter: "blur(10px)", // For Safari support
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(173, 216, 230, 0.25)", // Light blue border
  };

  const solidCustomStyle = {
    borderRadius: "75% 25% 1% 25% / 64% 46% 25% 0%",
    background: "rgb(84, 136, 196, 0.4)", // Light blue tint with transparency
    WebkitBackdropFilter: "blur(10px)", // For Safari support
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(173, 216, 230, 0.25)", // Light blue border
  };

  return (
    <>
      <div className="relative min-h-svh md:min-h-[100vh] pt-[87px] px-4 flex flex-col md:flex-row md:justify-between gap-4 md:gap-0 md:px-[5rem]">
        <div className="w-full md:w-[30.5rem] flex flex-col gap-6 md:gap-8 md:justify-start 2xl:justify-center mt-8 md:mt-6 2xl:mt-0 ">
          <h1 className="text-3xl mb-5 md:mb-0 md:text-5xl font-semibold ">
            Multispeciality <br />
            Physiotherapy Clinic <br />
            for Pain-Free Living
          </h1>
          <h2 className="text-2xl mb-5 md:mb-0 font-semibold md:text-lg text-slate-500">
            Bringing USA and European Technology and Treatments <br />
            to India’s Affordability!
          </h2>
          <div className="flex flex-col">
            <div className="relative">
              <form onSubmit={handleSubmit}>
                <div className="mt-1 flex items-center relative group">
                  <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                    <FaMobileAlt className="h-5 w-5" />
                  </span>
                  <input
                    required
                    id="number"
                    name="number"
                    aria-required="true"
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor "
                    placeholder="Your Number"
                    style={{
                      boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
                {errors.number && (
                  <p className="text-red-500 text-sm mt-1">{errors.number}</p>
                )}
                <div
                  className={`flex justify-center mt-4 ${
                    errors.number ? "md:mt-0" : "md:mt-4"
                  }`}
                >
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r w-full md:w-1/2 bg-white font-semibold text-brandColor border-[1px] border-brandColor px-2 py-2 rounded-full hover:opacity-90 hover:bg-slate-50 transition-opacity md:my-2"
                  >
                    {loading ? (
                      <span className="loader">
                        <span class="">Loading...</span>
                      </span> // Add your loader here
                    ) : (
                      "Get A Call Back"
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-2">
              <div className="flex flex-col md:flex-row max-h-[2.5rem] gap-2">
                <a
                  href="tel:+91 81694 00907"
                  role="button"
                  rel="noopener noreferrer"
                  className="flex-1 bg-brandColor font-semibold text-white rounded-full hover:opacity-90 transition-opacity  md:mt-0 flex gap-2 justify-center items-center p-2"
                >
                  <IoCall size={20} /> Call Now
                </a>
                <a
                  href="https://wa.me/+918169400907"
                  role="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 font-semibold text-white rounded-full hover:opacity-90 transition-opacity md:mt-0 flex gap-2 justify-center items-center p-2"
                >
                  <FaWhatsapp size={25} />
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] min-h-full hidden md:flex flex-1">
          <div className="flex-1 flex flex-col">
            <div className="ml-auto md:h-[85%] 2xl:h-[90%] md:w-auto md:min-w-[80%] hidden md:flex">
              <div className="flex-1 relative" style={customStyle}>
                <div
                  className="md:h-[80%] md:w-[90%] absolute bottom-0 right-0"
                  style={solidCustomStyle}
                ></div>
                <div className="md:bg-[url(/home_new/doctor_sub.png)] absolute bottom-0 md:h-[95%] md:w-[80%] bg-cover bg-no-repeat bg-bottom left-0 right-0 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:absolute md:block md:left-[0rem] md:bottom-0 md:w-[100%]">
          <div className="flex min-w-[80%] ml-[5rem] ">
            <div className="w-full bg-white border-[1px] p-2  md:rounded-l-3xl flex flex-col md:flex-row md:justify-between">
              <div className="h-full rounded-lg min-w-[12%] p-1 flex gap-4">
                <span className="flex gap-2 font-bold items-center text-md">
                  <img src="/images/Icons/google-icon.svg"  className="h-[4rem] 2xl:h-[4.9rem]" alt="" />
                  <div className="md:text-lg 2xl:text-2xl">Reviews</div>
                </span>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex items-center">
                    <div className="font-bold text-lg xl:text-2xl pt-[5px]"><p>4.9</p></div>
                    <div className="flex items-center">
                      {[...Array(4)].map((_, index) => (
                        <svg
                          key={index}
                          
                          viewBox="0 0 22 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-yellow-500 h-[20px] w-[22px]"
                        >
                          <polygon points="11,1.5 13.5,7.7 20,8.3 15,12.3 16.5,18.7 11,15 5.5,18.7 7,12.3 2,8.3 8.5,7.7" />
                        </svg>
                      ))}
                      <div className="relative w-5 h-5">
                        <svg
                          width="22"
                          height="20"
                          viewBox="0 0 22 20"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute top-0 left-0 text-gray-300"
                        >
                          <polygon points="11,1.5 13.5,7.7 20,8.3 15,12.3 16.5,18.7 11,15 5.5,18.7 7,12.3 2,8.3 8.5,7.7" />
                        </svg>
                        <svg
                          width="22"
                          height="20"
                          viewBox="0 0 22 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute top-0 left-0 text-yellow-500"
                        >
                          <defs>
                            <mask id="star-mask">
                              <rect
                                x="0"
                                y="0"
                                width="70%"
                                height="100%"
                                fill="white"
                              />
                              <rect
                                x="70%"
                                y="0"
                                width="30%"
                                height="100%"
                                fill="black"
                              />
                            </mask>
                          </defs>
                          <polygon
                            points="11,1.5 13.5,7.7 20,8.3 15,12.3 16.5,18.7 11,15 5.5,18.7 7,12.3 2,8.3 8.5,7.7"
                            fill="currentColor"
                            mask="url(#star-mask)"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="text-[0.7rem] 2xl:text-[0.8rem]  underline text-gray-500">
                    <a
                      target="_blank"
                      href="https://www.google.com/search?q=my+pain+clinic&rlz=1C1RXMK_enIN1075IN1075&oq=my+pain+&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhgIARAuGEMYrwEYxwEYkgMYyQMYgAQYigUyBggCEEUYOTIICAMQRRgnGDsyBggEEEUYOzIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPKgCALACAQ&sourceid=chrome&ie=UTF-8#lrd=0x3be7c96909359289:0x9a0f11bb4b62fb92,1,,,,"
                    >
                      Read Our Reviews
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-8 md:mr-[5.2rem] xl:ml-[10rem] 2xl:ml-[5rem] 2xl:mr-[0rem]">
                <div className="flex items-center">
                  <img
                    src="/home_new/Non_Invasive_3.png"
                    alt="Non Invasive"
                    className="h-[2.5rem] md:min-h-[4rem] 2xl:min-h-[5rem] object-contain bg-brandColor rounded-full"
                  />
                  <p className="text-brandColor text-center text-base font-bold whitespace-nowrap ml-1 min-w-0">
                    No <br /> Surgery
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src="/home_new/Customized_Treatment_2.png"
                    alt="Customized"
                    className="h-[2.5rem] md:min-h-[4rem] 2xl:min-h-[5rem] object-contain bg-brandColor rounded-full"
                  />
                  <p className="text-brandColor text-center text-base font-bold whitespace-nowrap ml-1 min-w-0">
                    Customized <br /> Treatment
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src="/home_new/Drug_Free.png"
                    alt="Drug Free"
                    className="h-[2.5rem] md:min-h-[4rem] 2xl:min-h-[5rem] object-contain bg-brandColor rounded-full"
                  />
                  <p className="text-brandColor text-center text-base font-bold whitespace-nowrap ml-1 min-w-0">
                    No <br /> Medicine
                  </p>
                </div>
              </div>
              <div className="md:hidden 2xl:block"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-2 right-[90%] md:top-[90px] md:right-2 z-50 pointer-events-none flex flex-col gap-1 min-w-72">
        <AnimatePresence>
          {notifications.map((n) => (
            <CustomNotification
              key={n.id}
              text={n.text}
              id={n.id}
              removeNotif={removeNotif}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SubWelcome;
