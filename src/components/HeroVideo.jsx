"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Vidéo de fond */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/18296880-uhd_4096_2160_50fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay sombre */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />

      {/* Texte superposé */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          Bienvenue chez FASTLOCK
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-xl md:text-2xl text-gray-200 max-w-2xl"
        >
          Découvrez nos modèles en 3D et louez la voiture de vos rêves.
        </motion.p>
      </div>
    </section>
  );
}
