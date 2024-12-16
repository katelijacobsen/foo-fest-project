"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

function LineUpCard({ name, slug, logo, bio }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  // const imageUrl = logo && (logo.startsWith("https://") || logo.startsWith("http://")) ? logo : `http://localhost:8080/logos/${logo}`;
  const imageUrl = logo && (logo.startsWith("https://") || logo.startsWith("http://")) ? logo : `https://spring-awesome-stream.glitch.me/logos/${logo}`;

  return (
    <div className="flip-card w-[400px] h-[300px] cursor-pointer" onClick={handleFlip}>
      <motion.div className="flip-card-inner w-[100%] h-[100%] border-solid border-[1px] border-gray-600" initial={false} animate={{ rotateY: isFlipped ? 180 : 360 }} transition={{ duration: 0.6, animationDirection: "normal" }} onAnimationComplete={() => setIsAnimating(false)}>
        <div className="flip-card-front w-[100%] h-[100%] bg-customBlack">
          <div className="relative w-full h-64">
            {imageUrl ? (
              <>
                <Image className="hover:brightness-50 transition ease-in-out duration-75 w-full h-full object-cover" src={imageUrl} width={400} height={400} alt={`${name} logo`} />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <p className="text-white text-center text-3xl font-bold">{name}</p>
                </div>
              </>
            ) : (
              <span className="text-white">No image</span>
            )}
          </div>
          <div className="bg-customOrange py-4 px-2 ">
            <h2 className="font-bold text-xl text-white">{name}</h2>
          </div>
        </div>
        <div className="flip-card-back bg-customBlack w-[100%] h-[100%] overflow-auto p-4 ">
          <h2 className="font-bold text-xl md:text-2xl pb-4">Om bandet:</h2>
          <p>{bio}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default LineUpCard;
