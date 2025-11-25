import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-steel-900 dark:bg-steel-950 text-white border-t border-steel-700 dark:border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display font-bold text-primary-400 dark:text-primary-300 mb-4">
              Noor Springs
            </h3>
            <p className="text-steel-300 dark:text-steel-400 mb-4">
              {t.footerDescription}
            </p>
            <p className="text-steel-400 dark:text-steel-500 text-sm">
              GST: 37AQFPM3706Q
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-steel-300 dark:text-steel-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-steel-300 dark:text-steel-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-steel-300 dark:text-steel-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors"
                >
                  {t.products}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-steel-300 dark:text-steel-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors"
                >
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contactUs}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-primary-400 dark:text-primary-300 mt-1 flex-shrink-0"
                />
                <span className="text-steel-300 dark:text-steel-400 text-sm">
                  Door No. 21-16/6 1C, Near Dolphin Hotel,
                  <br />
                  Suryabagh, Visakhapatnam,
                  <br />
                  Andhra Pradesh 530020
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone
                  size={20}
                  className="text-primary-400 dark:text-primary-300 flex-shrink-0"
                />
                <a
                  href="tel:9440596384"
                  className="text-steel-300 dark:text-steel-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors"
                >
                  9440596384
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail
                  size={20}
                  className="text-primary-400 dark:text-primary-300 flex-shrink-0"
                />
                <a
                  href="mailto:noorsprings@gmail.com"
                  className="text-steel-300 dark:text-steel-400 hover:text-primary-400 dark:hover:text-primary-300 transition-colors"
                >
                  noorsprings@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours & WhatsApp */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.businessHours}</h4>
            <div className="flex items-start space-x-3 mb-4">
              <Clock
                size={20}
                className="text-primary-400 dark:text-primary-300 mt-1 flex-shrink-0"
              />
              <div className="text-steel-300 dark:text-steel-400 text-sm">
                <p>{t.mondayToSaturday}</p>
                <p className="font-semibold">9:00 AM - 6:00 PM</p>
                <p className="mt-2 text-steel-400 dark:text-steel-500">
                  {t.sundayClosed}
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/919440596384"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors duration-200 mt-4"
            >
              <MessageCircle size={20} />
              <span>{t.whatsappUs}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-steel-700 dark:border-steel-800 text-center text-steel-400 dark:text-steel-500 text-sm">
          <p>
            &copy; {currentYear} Noor Springs. {t.allRightsReserved} |
            {t.proprietor}
          </p>
          <p className="mt-2">{t.qualitySprings}</p>
        </div>
      </div>
    </footer>
  );
}
