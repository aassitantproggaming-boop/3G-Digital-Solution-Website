import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Globe, Zap } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-gradient-primary flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl animate-float animation-delay-2000"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
            <p className="text-white font-semibold flex items-center justify-center gap-2">
              <Globe size={18} />
              {t("title")}
            </p>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {t("description")}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary flex items-center gap-2 group">
            {t("cta")}
            <Zap
              size={20}
              className="group-hover:rotate-12 transition-transform"
            />
          </button>
          <button className="btn-secondary">
            Learn More
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <p className="text-4xl font-bold text-white">50+</p>
            <p className="text-white/70 text-sm mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">100%</p>
            <p className="text-white/70 text-sm mt-2">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white">5+</p>
            <p className="text-white/70 text-sm mt-2">Years Experience</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
