"use client";

import { motion } from "framer-motion";

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
    <div className="w-full md:h-screen h-screen welcomebg text-[#fff] bg-[#F7F7FC] relative ">
      <video autoPlay muted loop src="https://hope-ray.github.io/mpc-video/MPC_INTRO%20(1).mp4">
        Video Not available - error
      </video>

      {/* <div id="video-bg" className="absolute inset-0 z-0 video-player">
        <YouTube
          videoId="https://www.youtube.com/embed/CCtJzygIwWw?controls=0&autoplay=1&mute=1&loop=1&playlist=CCtJzygIwWw&showinfo=0&modestbranding=0"
          opts={videoOptions}
          className="w-full h-full object-cover"
          iframeClassName="video-frame"
        />
        <iframe className="video-frame" src="https://www.youtube.com/embed/CCtJzygIwWw?si=VLFn_B62XGX0E3sE&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
              <a
                href="/contactus"
                className=" w-[200px] h-[53px] flex justify-center items-center text-brandColor text-[16px]  rounded-[6px] transition-all ease-linear delay-150 bg-white md:my-[1rem] my-[0.3rem] font-bold hover:opacity-90"
              >
                Consult Now
              </a>
            </div>
            <h2 className="text-2xl font-medium  md:w-10/12 text-right mb-0 md:mb-4">
              Your Journey
            </h2>
            <h2 className="text-2xl font-medium  md:w-10/12 text-right mb-0 md:mb-4">
              to a Pain-Free Life
            </h2>
            <h2 className="text-2xl font-medium  md:w-10/12 text-right mb-0 md:mb-4">
              Begins Here
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
