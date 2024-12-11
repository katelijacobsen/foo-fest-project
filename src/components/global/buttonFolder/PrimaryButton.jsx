"use client";
import { motion, AnimatePresence } from "motion/react";
const Button = ({ buttonContent, color }) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`rounded-sm px-8 py-3 text-customWhite  ${color} w-fit`}>
      {buttonContent}
    </motion.button>
  );
};

export default Button;

// sådan skal knappen styles
// <BorderButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Sekundær knap"></BorderButton>
