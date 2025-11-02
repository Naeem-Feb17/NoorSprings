import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import LanguageThemeSwitcher from "./LanguageThemeSwitcher";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { name: t.home, path: "/" },
    { name: t.about, path: "/about" },
    { name: t.products, path: "/products" },
    { name: t.contact, path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-steel-800 shadow-lg sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-display font-bold text-primary-600 dark:text-primary-400">
                Noor Springs
              </span>
              <span className="text-xs text-steel-600 dark:text-steel-400 -mt-1">
                {t.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400"
                    : "text-steel-700 dark:text-steel-300 hover:text-primary-600 dark:hover:text-primary-400"
                } pb-1`}
              >
                {link.name}
              </Link>
            ))}

            <LanguageThemeSwitcher />

            <a
              href="tel:9440596384"
              className="flex items-center space-x-2 btn-primary"
            >
              <Phone size={18} />
              <span>{t.callNow}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-steel-700 dark:text-steel-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-steel-800 border-t border-steel-200 dark:border-steel-700">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? "bg-primary-600 text-white"
                    : "text-steel-700 dark:text-steel-300 hover:bg-steel-100 dark:hover:bg-steel-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:9440596384"
              className="flex items-center justify-center space-x-2 btn-primary w-full mt-4"
            >
              <Phone size={18} />
              <span>Call: 9440596384</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
