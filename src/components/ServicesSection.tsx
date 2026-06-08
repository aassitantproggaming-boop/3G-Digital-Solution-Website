import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Smartphone, Gamepad2, Video } from "lucide-react";

export default function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    {
      id: 1,
      title: t("website"),
      description: t("website_desc"),
      icon: Smartphone,
      color: "from-blue-500 to-blue-600",
      delay: 0,
    },
    {
      id: 2,
      title: t("game"),
      description: t("game_desc"),
      icon: Gamepad2,
      color: "from-purple-500 to-purple-600",
      delay: 0.2,
    },
    {
      id: 3,
      title: t("video"),
      description: t("video_desc"),
      icon: Video,
      color: "from-red-500 to-red-600",
      delay: 0.4,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t("title")}</h2>
          <p className="section-subtitle">{t("subtitle")}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="card-service"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: service.delay }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform`}
                >
                  <Icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA Button */}
                <button className="text-red-600 font-semibold hover:text-red-700 flex items-center gap-2 group">
                  Learn More
                  <span className="transform group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
