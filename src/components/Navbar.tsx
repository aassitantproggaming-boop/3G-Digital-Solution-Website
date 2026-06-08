import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  const locales = [
    { code: "id", name: "Bahasa Indonesia" },
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
    { code: "de", name: "Deutsch" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">3G</span>
            </div>
            <span className="hidden sm:block font-bold text-lg text-gray-900">
              3G Digital
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}#home`} className="navbar-link">
              {t("navigation.home")}
            </Link>
            <Link href={`/${locale}#services`} className="navbar-link">
              {t("navigation.services")}
            </Link>
            <Link href={`/${locale}#team`} className="navbar-link">
              {t("navigation.team")}
            </Link>
            <Link href={`/${locale}#portfolio`} className="navbar-link">
              {t("navigation.portfolio")}
            </Link>
            <Link href={`/${locale}#contact`} className="navbar-link">
              {t("navigation.contact")}
            </Link>

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">
                <Globe size={20} />
                <span className="font-medium">{locale.toUpperCase()}</span>
              </button>
              <div className="absolute right-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {locales.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}`}
                    className="block px-4 py-2 hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {lang.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={`/${locale}/admin`}
              className="btn-primary text-sm py-2 px-4"
            >
              {t("navigation.admin")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href={`/${locale}#home`}
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t("navigation.home")}
              </Link>
              <Link
                href={`/${locale}#services`}
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t("navigation.services")}
              </Link>
              <Link
                href={`/${locale}#team`}
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t("navigation.team")}
              </Link>
              <Link
                href={`/${locale}#portfolio`}
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t("navigation.portfolio")}
              </Link>
              <Link
                href={`/${locale}#contact`}
                className="text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t("navigation.contact")}
              </Link>

              {/* Mobile Language Selector */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-gray-600 mb-2">
                  Language
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {locales.map((lang) => (
                    <Link
                      key={lang.code}
                      href={`/${lang.code}`}
                      className="px-3 py-2 text-sm bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {lang.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={`/${locale}/admin`}
                className="btn-primary w-full text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("navigation.admin")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
