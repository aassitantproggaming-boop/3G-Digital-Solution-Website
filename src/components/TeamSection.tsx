import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  social?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export default function TeamSection() {
  const t = useTranslations("team");

  const [teamMembers, setTeamMembers] = React.useState<TeamMember[]>([
    {
      id: 1,
      name: "Rendra Kusuma",
      position: t("founder"),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Visioner dan pemimpin tim",
      social: {
        email: "rendra@3gdigital.com",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Adi Wijaya",
      position: t("developer"),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Full-Stack Developer",
      social: {
        email: "adi@3gdigital.com",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Siti Nurhaliza",
      position: t("designer"),
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "UI/UX Designer",
      social: {
        email: "siti@3gdigital.com",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 4,
      name: "Budi Santoso",
      position: t("editor"),
      image: "https://images.unsplash.com/photo-1507841957669-0a42d7d37f7b?w=400&h=400&fit=crop",
      bio: "Senior Video Editor",
      social: {
        email: "budi@3gdigital.com",
        linkedin: "#",
        twitter: "#",
      },
    },
  ]);

  return (
    <section id="team" className="py-20 bg-white">
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="card-staff relative h-96 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Front of Card */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                {/* Avatar */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full border-4 border-white mb-4 object-cover"
                />

                {/* Info */}
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                <p className="text-sm opacity-90 text-center mt-2">{member.position}</p>
                <p className="text-xs opacity-75 text-center mt-4">{member.bio}</p>
              </div>

              {/* Back of Card - Social Links */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-700 to-red-900 rounded-lg p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm text-center mb-4">
                  Hubungi Kami
                </p>
                <div className="flex gap-4">
                  {member.social?.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-white hover:text-red-200 transition-colors"
                      title="Email"
                    >
                      <Mail size={20} />
                    </a>
                  )}
                  {member.social?.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-white hover:text-red-200 transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social?.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-white hover:text-red-200 transition-colors"
                      title="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
