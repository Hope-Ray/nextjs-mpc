'use client'
import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaYoutube
} from "react-icons/fa6";
import { motion } from "framer-motion";
const yAxisAnimation = {
  initial: { y: 140, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: {
    delay: 0.8,
    y: { type: "spring", stiffness: 40 }, // Animating on the Y-axis
    opacity: { duration: 0.2 },
    ease: "easeIn",
    duration: 1,
  },
};
const Footer = () => {
  return (
    <footer
      className="text-white px-8 lg:min-h-[60vh] py-12 bg-[#5488c4] relative FooterBg z-40"
      id="contact"
    >
      {/* <img className='absolute h-[40vh] bottom-[20%] left-0 right-0' src={Images1} alt="" /> */}
      <div className="container max-w-7xl z-10 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="mb-8 md:mb-0">
          <motion.h3
            {...yAxisAnimation}
            className="md:text-2xl text-lg font-semibold mb-4"
          >
            Important Links
          </motion.h3>
          <ul className="space-y-3">
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="mb-2"
            >
              About Us
            </motion.li>
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="mb-2"
            >
              Assesments
            </motion.li>
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.4,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="mb-2"
            >
              <a href="tel:+1514890000" className="hover:text-yellow-400">
                Services
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
            >
              <a
                href="mailto:calinscompagnies@calins.com"
                className="hover:text-yellow-400"
              >
                Treatments
              </a>
            </motion.li>
          </ul>
        </div>

        <div>
          <motion.h3
            {...yAxisAnimation}
            className="md:text-2xl text-lg font-semibold mb-4"
          >
            Opening Hours
          </motion.h3>
          <ul className="mb-4 space-y-6">
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex justify-start items-end"
            >
              <p href="#" className="hover:text-yellow-400">
                Monday - Saturday :
              </p>
              <span>&nbsp;09:00 AM - 07:00 PM</span>
            </motion.li>

            <motion.li
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.4,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex"
            >
              <p href="#" className="hover:text-yellow-400">
                Sunday :
              </p>
              <p>&nbsp;Closed</p>
            </motion.li>
          </ul>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 50 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="mt-4 icons"
          >
            <a href="#" className="mr-2">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="mr-2">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="mailto:calinscompagnies@calins.com">
              <i className="far fa-envelope fa-2x"></i>
            </a>
          </motion.div>
        </div>
        <div className="mb-8 md:mb-0">
          <motion.h3
            {...yAxisAnimation}
            className="md:text-2xl text-lg font-semibold mb-4"
          >
            Contact Us
          </motion.h3>
          <ul className="-ml-6 space-y-4">
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex items-center gap-3"
            >
              <a href="#" className="hover:text-yellow-400 flex flex-1 gap-4">
                <div className="min-h-30 flex items-center justify-center  rounded-md border-2 border-transparent text-4xl">
                  <IoLocationOutline id="location-icon" />
                </div>
                <p>
                  Address : Sphere Mall, Navchandra Building, V. N, Linking Rd,
                  Bandra West, Mumbai, Maharashtra 400050
                </p>
              </a>
            </motion.li>

            <motion.li
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex items-center gap-3"
            >
              <div className="flex flex-1 gap-4">
                <div className="min-h-30 flex items-center justify-center  rounded-md border-2 border-transparent text-4xl">
                  <IoCallOutline />
                </div>
                <p>
                  Phone :
                  <br />{" "}
                  <a className="hover:text-yellow-400" href="https://wa.me/+918169400907">+91 81694 00907,</a>
                  <br />{" "}
                  <a className="hover:text-yellow-400" href="https://wa.me/+918169400916">+91 81694 00916,</a>
                  <br />{" "}
                  <a className="hover:text-yellow-400" href="https://wa.me/+918169400905">+91 81694 00905</a>
                </p>
              </div>
            </motion.li>
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.4,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex items-center gap-3"
            >
              <a
                href="mailto:connect@mypainclinicglobal.com"
                className="hover:text-yellow-400 flex flex-1 gap-4"
              >
                <div className="min-h-30 flex items-center justify-center  rounded-md border-2 border-transparent text-4xl">
                  <IoMailOutline />
                </div>
                Email : connect@mypainclinicglobal.com
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.5,
                x: { type: "spring", stiffness: 50 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex space-x-2 ml-6 text-xl"
            >
              <a
                href="https://instagram.com/mypainclinicglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 border-solid border-2 border-white rounded-full text-xs hover:bg-white hover:text-brandColor"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/MyPainClinicGBF?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 border-solid border-2 border-white rounded-full text-xs hover:bg-white hover:text-brandColor"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-1 border-solid border-2 border-white rounded-full text-xs hover:bg-white hover:text-brandColor"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="p-1 border-solid border-2 border-white rounded-full text-xs hover:bg-white hover:text-brandColor"
              >
                <FaLinkedinIn />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>

      <div
        className="mb-2"
        style={{
          position: "absolute",
          bottom: 0,
          textAlign: "center",
          width: "90%",
        }}
      >
        <span>
          &copy; 2024&nbsp;
          <a
            className="hover:text-yellow-400"
            href="https://mypainclinicglobal.com/"
          >
            MY PAIN CLINIC&nbsp;
          </a>
          
          <a
            className="hover:text-yellow-400"
            href="https://www.salt-tech.com/"
          >
            | Design By Salt Tech
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
