"use client";
import { motion } from "motion/react";

const MotionWhileInView = () => {
  return (
    <section className="h-screen grid place-content-center">
      <motion.h1 className={`text-white text-3xl`} initial={{ scale: 1 }} whileInView={{ scale: 3 }}>
        FOO FEST
      </motion.h1>
    </section>
  );
};

export default MotionWhileInView;
