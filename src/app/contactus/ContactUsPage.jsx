"use client"
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaUser, FaRegUser, FaMobileAlt, FaPhoneVolume  } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Career from "@/components/Contactus/Career";
import { useState } from "react";
import CustomNotification from "@/components/CustomNotification";

const ContactUsPage = () => {
  const [notifications, setNotifications] = useState([]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    subject: "",
    message: "",
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
    const { firstName, lastName, email ,number ,subject, message } = formData;
    const queryString = new URLSearchParams({
      email: email,
      last_name: lastName,
      first_name: firstName,
      message: message,
      phone_number: number,
      subject: subject,
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
        lastName: "",
        email: "",
        number: "",
        subject: "",
        message: "",
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

  const rightAxisAnimation = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: false },
    transition: {
      delay: 0.5,
      x: { type: "spring", stiffness: 50 },
      opacity: { duration: 0.2 },
      ease: "easeIn",
      duration: 1.5,
    },
  };

  const leftAxisAnimation = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: false },
    transition: {
      delay: 0.5,
      x: { type: "spring", stiffness: 50 },
      opacity: { duration: 0.2 },
      ease: "easeIn",
      duration: 1.5,
    },
  };

  return (
    <>
      <div className="bg-white pt-[100px] md:pt-44 text-black" id="assessments">
        <div className="container mx-auto md:px-[5rem] px-4 grid md:grid-cols-2 gap-8 bg-white">
          <motion.div
            {...leftAxisAnimation}
            className="contact-content bg-white rounded-lg p-4 shadow-[5px_5px_4px_rgba(0,0,0,0.2)] border border-1"
          >
            <h3 className="md:text-2xl font-medium text-brandColor">
              YOUR JOURNEY TO PAIN-FREE, VIBRANT LIFE BEGINS HERE
            </h3>
            <p className="w-5/6 text-gray-500">
              We’re happy to answer any questions you may have and help your
              determine which of our services best fit your needs.
            </p>

            <div className="flex md:justify-center shadow-lg mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0839103953545!2d72.83372101028955!3d19.060047982066788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96909359289%3A0x9a0f11bb4b62fb92!2sMy%20Pain%20Clinic!5e0!3m2!1sen!2sin!4v1716887554561!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ boder: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...rightAxisAnimation} className="bg-white rounded-lg shadow-[5px_5px_4px_rgba(0,0,0,0.2)] border border-1">
            <div className="text-2xl text-center md:text-3xl font-medium text-brandColor py-2">
              GET IN TOUCH
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-b border-slate-400/25"></div>
                </div>
              </div>
            </div>
            <form className="p-5" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <div className="relative flex-1">
                  <label className="block text-lg font-normal text-gray-700">
                    First Name <span className="text-red-500">*</span>
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
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="relative flex-1">
                  <label className="block text-lg font-normal text-gray-700">
                    Last Name
                  </label>
                  <div className="mt-1 flex items-center relative group">
                    {/* <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                      <FaRegUser className="h-5 w-5" />
                    </span> */}
                    <input
                      id="last-name"
                      type="text"
                      className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                      placeholder=""
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row pt-2 gap-2 md:gap-4">
                <div className="relative flex-1">
                  <label className="block text-lg font-normal text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 flex items-center relative group">
                    <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                      <FaEnvelope className="h-5 w-5" />
                    </span>
                    <input
                      required
                      id="email"
                      aria-required="true"
                      type="email"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                      placeholder=""
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="relative flex-1">
                  <label className="block text-lg font-normal text-gray-700">
                    Phone Number
                  </label>
                  <div className="mt-1 flex items-center relative group">
                    <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                      <FaMobileAlt className="h-5 w-5" />
                    </span>
                    <input
                      id="phone"
                      type="number"
                      title="Please enter valid phone number for ex: 9996667770"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                      placeholder=""
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="relative pt-2">
                <label className="block text-lg font-normal text-gray-700">
                  Subject
                </label>
                <div className="mt-1 flex items-center relative group">
                  <span className="absolute left-3 text-gray-500 group-focus-within:text-brandColor transition-colors duration-300">
                    <MdSubject className="h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor"
                    placeholder=""
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="pt-2">
                <label className="block text-lg font-normal text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-brandColor resize-none"
                  rows="4"
                  placeholder="Type your message here"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="gap-[1rem] font-medium rounded-[36px] mf:w-[200px] mf:px-[0rem] px-[0.8rem] py-[0.8rem]  items-center transition border-gradient text-[#fff] hover:scale-105"
                >
                  {loading ? (
                        <span className="loader">
                          <span class="">Loading...</span>
                        </span> // Add your loader here
                      ) : (
                        "Submit"
                      )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
        <div className="container bg-white mx-auto md:px-[5rem] px-4 grid md:grid-cols-3 gap-4 mt-10 pb-[2rem]">
          {/* CARD 1 */}
          <motion.div
            {...yAxisAnimation}
            className="shadow-[5px_5px_4px_rgba(0,0,0,0.2)] border border-1 bg-white rounded-md h-28 flex gap-2 p-2 content-center"
          >
            <div className="flex justify-center items-center">
              <IoLocationSharp className="text-brandColor text-[30px]"/>
            </div>
            <div>
              <h3 className="text-lg font-medium text-brandColor font-futura">
                MY PAIN CLINIC
              </h3>
              <p className="text-sm font-medium">
                Address : Sphere Mall, Navchandra Building, V. N, Linking Rd,
                Bandra West, Mumbai, Maharashtra 400050
              </p>
            </div>
          </motion.div>
          {/* Card 2 */}
          <div>
            <motion.div
              {...yAxisAnimation}
              className="shadow-[5px_5px_4px_rgba(0,0,0,0.2)] border border-1 bg-white rounded-md h-28 flex gap-2 p-2 content-center"
            >
              <div className="flex justify-center items-center">
                <FaPhoneVolume className="text-brandColor text-[30px]"/>
              </div>
              <div className="">
                <h3 className="text-lg font-medium text-brandColor content-center">
                  Reach Out To Us{" "}
                </h3>
                <h3 className="text-sm font-medium">
                <strong className="text-brandColor">Phone: </strong>+91 81694 00905, +91 81694 00916,
                </h3>
                <h3 className="text-sm font-medium">+91 81694 00907,</h3>
                <h3 className="text-sm font-medium"><strong className="text-brandColor">Email: </strong>connect@mypainclinicglobal.com</h3>
              </div>
            </motion.div>
          </div>
          {/* Card 3 */}
          <div>
            <motion.div
              {...yAxisAnimation}
              className="shadow-[5px_5px_4px_rgba(0,0,0,0.2)] border border-1 bg-white rounded-md h-28 flex gap-4 p-2"
            >
              <div className="flex justify-center items-center">
                <FaEnvelope className="text-brandColor text-[30px]"/>
              </div>
              <div>
                <h3 className="text-lg font-medium text-brandColor">Career</h3>
                <p className="text-base font-medium">
                  career@mypainclinicglobal.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        {/* <Career/> */}
      </div>
      <div className="fixed top-2 right-[10%] md:top-[90px] md:right-6 z-50 pointer-events-none flex flex-col gap-1 min-w-72">
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
}

export default ContactUsPage