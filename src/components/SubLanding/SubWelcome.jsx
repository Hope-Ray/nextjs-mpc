import { FaUser, FaMobileAlt } from "react-icons/fa";
// import { SubCarousel } from "./SubCarousel/SubCarousel";
// import { SubCarouselLeft } from "./SubCarousel/SubCarouselLeft";
import { SiTicktick } from "react-icons/si";
import { useState } from "react";
import CustomNotification from "../CustomNotification";
import { AnimatePresence } from "framer-motion";


const SubWelcome = () => {
  const [notifications, setNotifications] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    number: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { firstName, number } = formData;
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

  return (
    <>
      <div className="relative bg-cover bg-no-repeat bg-center">
        <div className="relative md:flex h-full justify-center pt-[87px] px-4 md:px-[10rem]">
          <div className="w-full md:w-1/2 flex flex-col pt-4 items-center">
            <div className="flex flex-col overflow-x-hidden h-[34rem] md:h-[39rem] 2xl:h-[42rem] rounded-md shadow-[5px_5px_4px_rgba(0,0,0,0.2)] border border-1">
              <div className="bg-[url(/home_new/doctor4.jpeg)] flex-1 w-full md:w-[26rem] 2xl:w-[26rem] bg-cover bg-no-repeat  bg-top rounded-t-md"></div>
              <div className="min-h-20 w-full md:w-[26rem] 2xl:w-[26rem] bg-brandColor rounded-b-md">
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
          </div>
          <div className="w-full md:w-1/2 pt-4 flex">
            <div className="self-start h-full  md:w-full block md:flex md:flex-col  shadow-[5px_5px_4px_rgba(0,0,0,0.2)] border border-1">
              {/* Contact Form */}
              <div className="text-xl 2xl:text-2xl text-brandColor text-center font-semibold mt-8 mx-4">
                Bringing USA Technology and Treatments to Mumbai's
                Affordability!
                <span className="flex items-center justify-center gap-2 mt-[6rem] 2xl:text-2xl">
                  <SiTicktick />
                  Book An Appointment
                </span>
              </div>
              <div className="hero-content min-w-full md:min-w-[50%] md:flex md:flex-col justify-center items-center gap-4 ">
                <div className="md:min-w-[25rem] py-4 mb-3">
                  <form className="space-y-4 px-5 pb-3" onSubmit={handleSubmit}>
                    <div className="flex flex-col space-y-4 2xl:gap-5">
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
                            name="firstName"
                            aria-required="true"
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                            placeholder=""
                            style={{
                              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                            }}
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="relative flex-1 ">
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
                            name="number"
                            aria-required="true"
                            type="number"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                            placeholder=""
                            style={{
                              boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
                            }}
                            value={formData.number}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={loading}
                        className="gap-[1rem] font-semibold rounded-[36px] w-full md:w-auto px-10 py-2 h-10 items-center transition border-gradient text-[#fff] hover:scale-105"
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
              </div>
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
