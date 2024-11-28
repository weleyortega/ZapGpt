"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import apex from "@/assets/images/logo-apex.png";

const images = [apex, apex, apex, apex, apex, apex];

const LogoTicker = () => {
  return (
    <section className="bg-black py-20 sm:py-24 text-center">
      <div className="section-container">
        <h2 className="text-lg md:text-xl text-white">
          Da <span className="font-bold">conversa</span> a <span className="font-bold">conversão.</span>
        </h2>
        <div className="flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20 after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgba(0,0,0,0))] before:z-10 relative">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0%",
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-16 pr-16"
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <>
                {images.map((image) => (
                  <Image
                    priority
                    unoptimized
                    quality={100}
                    src={image.src}
                    alt={`${image}-logo`}
                    key={image.src}
                    height={50}
                    width={50}
                    className="flex-none h-7 sm:h-8 w-auto"
                  />
                ))}
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
