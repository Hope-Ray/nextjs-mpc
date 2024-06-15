"use client"
import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { useMotionValue, animate, motion } from "framer-motion";
import Card from "./Card";

const ServicesSlide = () => {
  const images = [
    {
      src: "/home_new/nerve_pain.jpg",
      title: "Nerve Pain",
      description: "Description for nerve pain",
    },
    {
      src: "/home_new/acl_tear_pain.jpg",
      title: "ACL Tear Pain",
      description: "Description for ACL tear pain",
    },
    {
      src: "/home_new/joint.jpg",
      title: "Joint Pain",
      description: "Description for joint pain",
    },
    {
      src: "/home_new/full Body.jpg",
      title: "Full Body Pain",
      description: "Description for full body pain",
    },
    {
      src: "/home_new/nerve_pain.jpg",
      title: "Nerve Pain",
      description: "Description for nerve pain",
    },
    {
      src: "/home_new/acl_tear_pain.jpg",
      title: "ACL Tear Pain",
      description: "Description for ACL tear pain",
    },
    {
      src: "/home_new/joint.jpg",
      title: "Joint Pain",
      description: "Description for joint pain",
    },
    {
      src: "/home_new/full Body.jpg",
      title: "Full Body Pain",
      description: "Description for full body pain",
    },
  ];

  const FAST_DURATION = 40;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();
  let xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <main className="relative py-[3rem] mt-[3rem]">
      <div className="absolute top-0 left-[-300px] right-[-300px] bg-white" style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%', zIndex: "5" , height: "5rem"}} id="curv-top"></div>

      <div>
        <motion.div
          className="flex gap-4"
          ref={ref}
          style={{ x: xTranslation, width: "max-content" }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...images, ...images].map((item, idx) => (
            <Card
              image={item.src}
              title={item.title}
              description={item.description}
              key={idx}
            />
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-[-300px] right-[-300px] bg-white" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0', zIndex: "5" , height: "5rem"}} id="curv-top"></div>
    </main>
  );
}

export default ServicesSlide