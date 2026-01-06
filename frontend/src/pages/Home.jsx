import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Award,
  Clock,
  Phone,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import banner from "../Assests/banner.png";

export default function Home() {
  const { t } = useLanguage();
  const products = [
    {
      name: "Compression Springs",
      description:
        "High-quality compression springs for various industrial applications",
      icon: "compression-spring",
      color: "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900",
      borderColor: "border-blue-200 dark:border-blue-800",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "Tension Springs",
      description: "Extension springs for pulling and holding applications",
      icon: "tension-spring",
      color: "from-green-50 to-green-100 dark:from-green-950 dark:to-green-900",
      borderColor: "border-green-200 dark:border-green-800",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      name: "Torsion Springs",
      description: "Precision-engineered torsion springs for rotational force",
      icon: "torsion-spring",
      color: "from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900",
      borderColor: "border-amber-200 dark:border-amber-800",
      textColor: "text-amber-600 dark:text-amber-400",
    },
    {
      name: "Flat Springs",
      description: "Durable flat springs made from premium materials",
      icon: "flat-spring",
      color: "from-red-50 to-red-100 dark:from-red-950 dark:to-red-900",
      borderColor: "border-red-200 dark:border-red-800",
      textColor: "text-red-600 dark:text-red-400",
    },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t.qualityAssured,
      description: t.qualityDesc,
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t.yearsExperience,
      description: t.experienceDesc,
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: t.customSolutions,
      description: t.customDesc,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t.fastDelivery,
      description: t.fastDesc,
    },
  ];

  return (
    <div>
      <SEO
        title="Noor Springs - Premium Spring Manufacturer in Visakhapatnam | Since 2011"
        description="Noor Springs offers high-quality compression, tension, torsion, and flat springs in Visakhapatnam. ISO certified manufacturing with 13+ years of excellence. Custom spring solutions for all industries."
        keywords="Noor Springs, spring manufacturer Visakhapatnam, compression springs, tension springs, torsion springs, flat springs, industrial springs, custom springs, spring supplier Andhra Pradesh"
        canonical="https://noorspring.vercel.app/"
      />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Darker overlay + subtle backdrop blur to improve text contrast */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
              style={{ textShadow: "0 6px 18px rgba(0,0,0,0.7)" }}
            >
              {t.heroTitle}
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-primary-100"
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.6)" }}
            >
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="btn-primary bg-white text-primary-600 hover:bg-primary-50 inline-flex items-center justify-center"
              >
                {t.viewProducts}
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center"
              >
                {t.getQuote}
              </Link>
              <a
                href="tel:9440596384"
                className="btn-primary bg-green-600 hover:bg-green-700 inline-flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                {t.callNow}
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full"
          >
            <path
              fill="currentColor"
              className="text-white dark:text-steel-900"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-steel-50 dark:bg-steel-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-steel-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-transparent dark:border-steel-700"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-steel-600 dark:text-steel-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-white dark:bg-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.ourProducts}</h2>
            <p className="section-subtitle">{t.productsDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="card group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-transparent hover:border-l-4 hover:border-current bg-white dark:bg-steel-800"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${product.color} dark:bg-gradient-to-br flex items-center justify-center ${product.borderColor} border rounded-t-lg transition-transform duration-300`}
                >
                  <img
                    src={`/icons/${product.icon}.svg`}
                    alt={product.name}
                    className={`w-24 h-24 ${product.textColor} filter drop-shadow-lg`}
                  />
                </div>
                <div className="p-6">
                  <h3
                    className={`text-lg font-semibold mb-2 ${product.textColor} group-hover:text-opacity-100 transition-opacity`}
                  >
                    {product.name}
                  </h3>
                  <p className="text-steel-600 dark:text-steel-400 text-sm mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/contact"
                    className={`${product.textColor} font-medium font-bold hover:underline transition-all inline-flex items-center text-sm`}
                  >
                    Learn More
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="btn-primary inline-flex items-center"
            >
              {t.viewAllProducts}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-steel-900 dark:bg-steel-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.whyChooseNoor}
              </h2>
              <p className="text-steel-200 dark:text-steel-300 text-lg mb-6">
                {t.establishedDesc}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-primary-400 dark:text-primary-300 mr-3 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-steel-200 dark:text-steel-300">
                    {t.premiumMaterials}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-primary-400 dark:text-primary-300 mr-3 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-steel-200 dark:text-steel-300">
                    {t.stateOfArt}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-primary-400 dark:text-primary-300 mr-3 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-steel-200 dark:text-steel-300">
                    {t.customRequirements}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-primary-400 dark:text-primary-300 mr-3 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-steel-200 dark:text-steel-300">
                    {t.competitivePricing}
                  </span>
                </li>
              </ul>
              <Link
                to="/about"
                className="btn-primary bg-primary-600 hover:bg-primary-700 inline-flex items-center"
              >
                {t.learnMore}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-600 dark:bg-primary-700 p-8 rounded-lg text-center shadow-lg">
                <div className="text-4xl font-bold mb-2">13+</div>
                <div className="text-primary-100 dark:text-primary-200">
                  {t.yearsOfExcellence}
                </div>
              </div>
              <div className="bg-primary-700 dark:bg-primary-800 p-8 rounded-lg text-center shadow-lg">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-primary-100 dark:text-primary-200">
                  {t.happyClients}
                </div>
              </div>
              <div className="bg-primary-700 dark:bg-primary-800 p-8 rounded-lg text-center shadow-lg">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-primary-100 dark:text-primary-200">
                  {t.productVarieties}
                </div>
              </div>
              <div className="bg-primary-600 dark:bg-primary-700 p-8 rounded-lg text-center shadow-lg">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-primary-100 dark:text-primary-200">
                  {t.qualityAssuredPercent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - DISTINCT from ads and navigation */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 dark:from-primary-900 dark:to-primary-950 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.needCustomSolutions}
          </h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-10 max-w-2xl mx-auto">
            {t.ctaDescription}
          </p>

          {/* Note: These are BUSINESS CONTACT CALLS-TO-ACTION, not navigation or ads */}
          <div className="bg-primary-600 dark:bg-primary-800 px-4 py-2 rounded-lg mb-6 inline-block">
            <p className="text-sm font-semibold text-primary-50">
              👇 Direct Business Contact Options 👇
            </p>
          </div>

          {/* Prominent CTA buttons - clearly distinct from everything else */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/contact"
              className="px-10 py-5 bg-white text-primary-700 font-black rounded-xl hover:bg-primary-50 shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center justify-center text-lg hover:scale-105 border-2 border-white"
            >
              📋 REQUEST A QUOTE
              <ArrowRight className="ml-3" size={24} />
            </Link>
            <a
              href="tel:9440596384"
              className="px-10 py-5 bg-green-500 hover:bg-green-600 text-white font-black rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center justify-center text-lg hover:scale-105 border-2 border-green-600"
            >
              ☎️ CALL NOW: 9440596384
            </a>
          </div>

          <p className="text-primary-100 text-sm">
            📧 {t.contactUs}: noorsprings@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
