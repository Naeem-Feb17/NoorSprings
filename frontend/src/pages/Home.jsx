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

export default function Home() {
  const { t } = useLanguage();
  const products = [
    {
      name: "Compression Springs",
      description:
        "High-quality compression springs for various industrial applications",
      image: "🔵",
    },
    {
      name: "Flat Springs",
      description: "Durable flat springs made from premium materials",
      image: "⚪",
    },
    {
      name: "Torsion Springs",
      description: "Precision-engineered torsion springs for rotational force",
      image: "🔘",
    },
    {
      name: "Flat Wire Springs",
      description: "Specialized flat wire springs for unique applications",
      image: "⚫",
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
        canonical="https://noorsprings.in/"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-steel-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
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
              <div key={index} className="card group">
                <div className="h-48 bg-gradient-to-br from-steel-100 to-steel-200 dark:from-steel-700 dark:to-steel-800 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-steel-600 dark:text-steel-400 mb-4">
                    {product.description}
                  </p>
                  <Link
                    to="/contact"
                    className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center"
                  >
                    {t.enquireNow}
                    <ArrowRight size={16} className="ml-1" />
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

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.needCustomSolutions}
          </h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-8">
            {t.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary bg-white text-primary-600 hover:bg-primary-50 inline-flex items-center justify-center"
            >
              {t.requestQuote}
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="tel:9440596384"
              className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              {t.callNow}: 9440596384
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
