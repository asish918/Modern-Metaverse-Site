'use client';

import { motion } from "framer-motion";
import { TypingText } from '../components'

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, mount: 0.25 }}
      className={`${styles.innerWidth} max-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white'
      >
        <span className="font-extrabold text-white">
          Lorem
        </span> ipsum dolor sit amet consectetur adipisicing elit. Officia corporis qui cupiditate assumenda optio unde iste eius odio deleniti, fugiat aut aspernatur alias deserunt,
        <span className="font-extrabold text-white"> beatae
        </span> ut! Repellat molestias tempora tempore, illo eius
        <span className="font-extrabold text-white"> assumenda 
        </span> accusantium dolorum! Veritatis nesciunt nam facilis quaerat?
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
