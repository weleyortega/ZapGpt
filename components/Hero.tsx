"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import ShinyButton from "./ShinyButton";
import stars from "@/assets/images/stars.png";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={ref}
      className="text-center h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,black_74%,transparent)] md:[mask-image:linear-gradient(to_bottom,black_65%,transparent)]"
      style={{
        backgroundImage: `url(${stars.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: stars.width,
      }}
      transition={{
        ease: "linear",
        repeat: Infinity,
        duration: 120,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(0,128,128)_15%,rgb(14,0,36,0.5)_78%,transparent)]" />

      {/*Planet */}
      

      {/* Rings */}
      <motion.div
        className="absolute size-[344px] md:size-[580px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          ease: "linear",
          duration: 60,
          repeat: Infinity,
        }}
      >
        <div className="absolute h-4 w-4 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full max-sm:hidden" />
        <div className="absolute h-6 w-6 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-white rounded-full inline-flex items-center justify-center max-sm:hidden">
          <div className="absolute h-3 w-3 bg-white rounded-full" />
        </div>
      </motion.div>

      <motion.div className="absolute size-[444px] md:size-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        className="absolute size-[544px] md:size-[980px] rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          ease: "linear",
          duration: 90,
          repeat: Infinity,
        }}
      >
        <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full max-sm:hidden" />
        <div className="absolute h-2 w-2 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-full max-sm:hidden" />
      </motion.div>

      {/* Content */}
      <div className="section-container relative mt-16">
        <h1 className="text-7xl sm:text-8xl md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] text-transparent bg-clip-text">
          ZAP GPT
        </h1>
        <p className="text-lg md:text-xl text-white/90 mt-6 max-w-lg mx-auto">
          <span className="font-bold">Venda muito mais</span> com  <span className="font-bold">Inteligência artificial, </span>
          tenha um assistente <span className="font-bold">24 horas por dia.</span>
        </p>

        <div className="flex justify-center mt-5">
          <a href="https://wa.me/5567996169420?text=ol%C3%A1%20Gostaria%20de%20saber%20mais%20sobre%20a%20inteligencia%20articial"><ShinyButton>Clique aqui</ShinyButton></a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
