import React from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">3G</span>
              </div>
              <span className="font-bold text-lg">3G Digital Solution</span>
            </div>
            <p className="text-gray-300 text-sm">
              Solusi digital terdepan untuk bisnis global Anda.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-red-500">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-red-500" />
                <span>{t("location")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-red-500" />
                <a href={`mailto:${t("email")}`} className="hover:text-red-500">
                  {t("email")}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-red-500" />
                <a href={`tel:${t("phone")}`} className="hover:text-red-500">
                  {t("phone")}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-red-500">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors text-white font-bold"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors text-white font-bold"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors text-white font-bold"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors text-white font-bold"
              >
                in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            {t("rights")} | {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
