"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FeatureSection({ title, description, img, reverse }) {
  return (
    <section
      className={`w-full py-24 px-4 flex flex-col md:flex-row items-center justify-center gap-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Texte */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-accent mb-4">{title}</h2>
        <p className="text-secondary">{description}</p>
      </motion.div>

      {/* Image / 3D */}
      <motion.div
        className="md:w-1/2 h-64 md:h-96 bg-primary rounded-xl overflow-hidden shadow-lg flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </section>
  );
}
