"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Welcome = () => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      loop: 1,
      mute: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 0,
      playlist:
        "https://www.youtube.com/embed/CCtJzygIwWw?controls=0&autoplay=1&mute=1&loop=1&playlist=CCtJzygIwWw&showinfo=0&modestbranding=1", // Use the same video ID for looping
    },
  };

  return (
    <div className="w-full min-h-[25rem] md:h-screen welcomebg text-[#fff] bg-[#F7F7FC] relative ">
      <video
        autoPlay
        muted
        disablePictureInPicture
        playsInline
        loop
        src="https://hope-ray.github.io/mpc-video/MPC_INTRO%20(1).mp4"
        className="pointer-events-none hidden md:block"
      >
        Video Not available - error
      </video>
      <video
        autoPlay
        muted
        disablePictureInPicture
        playsInline
        loop
        src="https://hope-ray.github.io/mpc-video/MPC_Mob.mp4"
        className="block md:hidden pointer-events-none mt-[87px] md:mt-0 pb-[25%] md:pb-0"
      >
        Video Not available - error
      </video>

      {/* <div className="youtube-container hidden md:block">
        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/CCtJzygIwWw?autoplay=1&mute=1&color=white&&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&loop=1&playlist=CCtJzygIwWw&vq=hd720"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div> */}
      <div className="hidden md:flex justify-end items-end  gap-[3rem] md:h-full h-full py-[2rem] md:w-[100%] w-[90%] md:mx-0 mx-auto">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 50, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 40 },
            opacity: { duration: 0.2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="w-3/6 h-full md:w-3/12 welcome-slash relative"
          style={{ zIndex: 10 }}
        >
          {/* <p className="z-50 absolute">dasdsa</p> */}
          <div className=" md:mr-0 z-50 absolute bottom-[3rem]">
            <h2 className="text-4xl font-medium md:w-10/12 text-right font-futura">
              MY PAIN CLINIC
            </h2>
            <div className="flex justify-end gap-[2rem] md:w-10/12 text-right">
              <Link
                href="/contactus"
                className=" w-[200px] h-[53px] flex justify-center items-center text-brandColor text-[16px]  rounded-[6px] transition-all ease-linear delay-150 bg-white md:my-[1rem] my-[0.3rem] font-bold hover:opacity-90"
              >
                Consult Now
              </Link>
            </div>
            <h2 className="text-2xl font-medium md:w-10/12 text-right mb-0 md:mb-3 2xl:mb-4">
              Multispeciality
            </h2>
            <h2 className="text-2xl font-medium md:w-10/12 text-right mb-0 md:mb-3 2xl:mb-4">
              Physiotherapy Clinic
            </h2>
            <h2 className="text-2xl font-medium md:w-10/12 text-right mb-0 md:mb-3 2xl:mb-4">
              for Pain-Free Living
            </h2>
            <p className=" mf:text-[20px] text-[14px] md:my-2 my-1 md:w-10/12 text-right">
              Clinical excellence, pain Management and sports medicine
              rehabilitation
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
