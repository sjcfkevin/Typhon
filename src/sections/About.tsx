"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const About = () => (
  <section className="paddings relative z-10 py-20" id="about">
    <div className="gradient-02 z-0" />
    <div className="w-full h-full absolute">
      <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          <source src="/videos/about.webm" type="video/webm" />
        </video>
      </div>
    </div>
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flexCenter flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          <span className="smooth-lightning-text">About Typhon</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-[15px] font-normal text-xl md:text-2xl text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Typhon&nbsp;&nbsp;</span>is an advanced AI that interacts with tokens like a human, providing real-time insights, predicting market trends, and optimizing crypto investments. Key features include portfolio management, security scanning, blockchain investigation, tokenomics optimization, and NFT & gaming strategy support.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
