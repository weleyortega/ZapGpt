"use client";

import { useState } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import Tab from "./Tab";
import { tabs } from "@/lib/data";

import productImage from "@/assets/images/product-image.png";

const Product = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundSize = useMotionTemplate`
    ${backgroundSizeX}% auto
  `;

  const backgroundPosition = useMotionTemplate`
    ${backgroundPositionX}% ${backgroundPositionY}%
  `;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      {
        duration: 2,
        ease: "easeInOut",
      }
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      {
        duration: 2,
        ease: "easeInOut",
      }
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      {
        duration: 2,
        ease: "easeInOut",
      }
    );
  };

  return (
    <section className="py-20 md:py-24">
      <div className="section-container">
        <h2 className="section-heading">Fácil de configurar.</h2>
        <p className="section-paragraph">
         Configure em alguns cliques, o <span className="font-bold">zapGpt</span> é Capaz de entender  <span className="font-bold">aúdio, imagens e muito mais.</span>
        </p>
        <p className="section-paragraph">
         clique para ver!
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-3">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.title}
              {...tab}
              onClick={() => handleSelectTab(index)}
              selected={selectedTab === index}
            />
          ))}
        </div>

        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover"
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundSize,
              backgroundPosition,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
