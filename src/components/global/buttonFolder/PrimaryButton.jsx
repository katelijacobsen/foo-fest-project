"use client";
import { motion } from "motion/react";
const Button = ({ buttonContent, color, aria_label_text, type }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <button aria-label={aria_label_text} type={type} className={`font-semibold rounded-sm px-8 py-3 text-customWhite  ${color}   w-fit`}>
        {buttonContent}
      </button>
    </motion.div>
  );
};

export default Button;

// sådan skal knappen styles
// <BorderButton color="bg-gradient-to-r from-[#ec2783] from-12% via-[#d82023] via-46% to-[#ec4d08] to-87%" buttonContent="Sekundær knap"></BorderButton>
