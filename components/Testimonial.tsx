"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { testimonials } from "@/lib/data";

const Testimonial = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="section-container">
        <h2 className="section-heading">O que dizem sobre o ZAPGPT</h2>
        <p className="section-paragraph">
          Veja o depoimento de pessoas que ja utilizam nossa ferramenta, é surreal.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
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
            className="flex gap-5 pr-5 flex-none"
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <>
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_right,rgb(255,255,255,.1),black)] max-w-xs flex-none flex flex-col justify-between"
                  >
                    <div className="text-lg tracking-tight">
                      {testimonial.text}
                    </div>

                    <div className="flex items-center gap-3 mt-5">
                      <div className="relative before:content-[''] before:border before:border-white/30 before:inset-0 before:absolute before:rounded-lg before:z-10">
                        <Image
                          priority
                          unoptimized
                          quality={100}
                          src={testimonial.avatar}
                          alt={`${testimonial.name} avatar`}
                          width={50}
                          height={50}
                          className="size-11 rounded-lg"
                        />
                      </div>
                      <div className="">
                        <div>{testimonial.name}</div>
                        <div className="text-white/50 text-sm">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
