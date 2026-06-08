import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Portfolio {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

export default function PortfolioSection() {
  const t = useTranslations("portfolio");

  const [portfolios] = React.useState<Portfolio[]>([
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Website",
      image: "https://images.unsplash.com/photo-1460925895917-adf4e7e996ab?w=500&h=300&fit=crop",
      description: "Platform e-commerce modern dengan integrasi payment gateway",
      link: "#",
    },
    {
      id: 2,
      title: "Mobile Game",
      category: "Game",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=300&fit=crop",
      description: "Game mobile 2D dengan Unity dan gameplay yang seru",
      link: "#",
    },
    {
      id: 3,
      title: "Corporate Video",
      category: "Video",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop",
      description: "Video promosi perusahaan dengan efek cinematik profesional",
      link: "#",
    },
    {
      id: 4,
      title: "Social Media App",
      category: "Website",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      description: "Aplikasi media sosial dengan fitur real-time",
      link: "#",
    },
    {
      id: 5,
      title: "Educational Game",
      category: "Game",
      image: "https://images.unsplash.com/photo-1535016120754-fd45c1d54d0d?w=500&h=300&fit=crop",
      description: "Game edukatif untuk pembelajaran interaktif",
      link: "#",
    },
    {
      id: 6,
      title: "Music Video",
      category: "Video",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=300&fit=crop",
      description: "Music video dengan produksi kelas dunia",
      link: "#",
    },
  ]);

  const stats = [
    { label: t("completed"), value: "50+" },
    { label: t("clients"), value: "100%" },
    { label: t("year"), value: "5+" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
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

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-bold text-red-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolios.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg h-64"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-red-400 font-semibold mb-4">
                  {project.category}
                </p>
                <p className="text-white text-sm text-center mb-4 line-clamp-2">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  View <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="btn-primary">View All Portfolio</button>
        </motion.div>
      </div>
    </section>
  );
}
