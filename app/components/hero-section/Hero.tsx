"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  delay,
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { useView } from "@/contexts/ViewContext";

export default function Hero() {
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const animateIn1 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 1.5,
      duration: 0.7,
      ease: easeIn,
    },
  };

  const animateIn2 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2,
    },
  };

  const { setSectionInView } = useView();

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-10deg"]);

  return (
    <section
      ref={ref}
      className="pt-36 sm:pt-0 flex flex-col sm:flex-row h-dvh items-center gap-6 sm:justify-between"
      id="home"
    >
      <div className="text sm:w-[60%]">
        <motion.div
          className="grid grid-cols-9 w-fit smm:flex gap-2 mb-2 xl:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <p className="text-white/60 text-xl smm:text-2xl mb-3 smm:mb-0 lg:text-3xl col-span-6">
            Hey, there
          </p>
          <motion.div
            animate={handWaveAnimation}
            style={{ transformOrigin: "bottom right" }}
            className="col-span-3"
          >
            <Image
              src="/hand-wave.svg"
              width={30}
              height={30}
              alt="hand-waving"
            />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <p className="text-white/50 inline">I&apos;m </p>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#92e1e6] via-[#68aad9] to-[#3C84C7]">
            Vedant Pancholi
          </span>
          <p>Aspiring AI/ML Engineer </p>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={animateIn2}
          className="text-white/40  text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6 "
        >
          I build scalable solutions that turn data into action 🚀
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12"
        >
          <a
            href="https://drive.google.com/file/d/1RLBTypIUwLm5ZwFXA6VMnQ2S_qyS_T5d/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-5 py-2 rounded-xl font-semibold border border-blue-400/50 backdrop-blur-sm text-white hover:text-white hover:underline hover:underline-offset-4 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Resume
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-3 px-5 py-2 rounded-xl font-semibold border border-white/20 backdrop-blur-sm text-white hover:text-white hover:underline hover:underline-offset-4 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Explore Projects
          </a>
        </motion.div>
      </div>

      {/* IMAGE */}
      <div data-blobity-tooltip="Developer">
        <motion.div
          ref={imgRef}
          style={{ rotate }}
          className="h-image flex items-center w-[350px] h-[380px] xl:w-[480px] xl:h-[470px] justify-center relative"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <Image
            src="/transparent-vedant-min.png"
            priority
            fill
            alt="Vedant's picture"
            className="bg-image-radial px-10 pt-20"
          />
        </motion.div>
      </div>
    </section>
  );
}
