"use client";

import ShinyButton from "./ShinyButton";
import stars from "@/assets/images/stars.png";
import gridLines from "@/assets/images/grid-lines.png";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRelativeMousePosition } from "@/hooks/useRelativeMousePostion";

const CTA = () => {
  const ref = useRef<HTMLElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderRef);

  const maskImage = useMotionTemplate`
  radial-gradient(50% 60% at ${mouseX}px ${mouseY}px,black,transparent)
 `;

  return (
    <section className="py-20 md:py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
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
            duration: 60,
          }}
          ref={borderRef}
        >
          <div
            className="absolute inset-0 bg-[rgb(0,128,128)] bg-blend-overlay [mask-image:radial-gradient(50%_60%_at_50%_50%,black,transparent)] group-hover:opacity-0 transition duration-500"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-[rgb(0,128,128)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-500"
            style={{
              maskImage,
              backgroundImage: `url(${gridLines.src})`,
            }}
          />

          <div className="relative">
            <h2 className="max-w-lg mx-auto section-heading">
              O futuro da sua empresa está aqui !
            </h2>
            <p className="section-paragraph">
              Descubra como uma inteligência artificial pode mudar o destino do seu negócio.
              preencha o formulario para um projeto personalizado!
            </p>
            <div className="flex justify-center mt-8">
              <a href="https://form.respondi.app/0C4eaZ9K"><ShinyButton>Quero minha I.A</ShinyButton></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
