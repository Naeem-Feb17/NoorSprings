import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import AdBanner from "../components/AdBanner";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Compression",
    "Tension",
    "Torsion",
    "Flat",
    "Specialty",
  ];

  const products = [
    {
      id: 1,
      name: "Flat Compression Spring",
      category: "Compression",
      description:
        "Stainless steel compression springs, 15cm height × 5cm length, silver color. 250kg load capacity, ideal for electrical and mechanical applications.",
      specs: [
        "Material: Stainless Steel",
        "Height: 15cm",
        "Length: 5cm",
        "Load: 250kg",
      ],
      image: "🔵",
    },
    {
      id: 2,
      name: "Flat Wire Springs",
      category: "Flat",
      description:
        "Sturdy design and lightweight flat wire springs. 15cm height, silver color with 5mm wire diameter. Versatile use in automotive and household applications.",
      specs: [
        "Material: Stainless Steel",
        "Height: 15cm",
        "Wire Dia: 5mm",
        "Load: 250kg",
      ],
      image: "⚪",
    },
    {
      id: 3,
      name: "Flat Coil Spring (Garage)",
      category: "Flat",
      description:
        "Premium quality stainless steel flat coil spring for garage doors. 15 yard height, 10cm length, 5cm wire diameter, 500kg load capacity.",
      specs: [
        "Material: Stainless Steel",
        "Height: 15 Yard",
        "Length: 10cm",
        "Load: 500kg",
      ],
      image: "⚫",
    },
    {
      id: 4,
      name: "Compression Spring - Heavy Duty",
      category: "Compression",
      description:
        "High-strength compression springs for industrial machinery and heavy-duty applications. Custom sizes available.",
      specs: [
        "Material: High Carbon Steel",
        "Custom Sizes",
        "Load: Up to 1000kg",
      ],
      image: "🔘",
    },
    {
      id: 5,
      name: "Tension/Extension Spring",
      category: "Tension",
      description:
        "Precision-engineered extension springs that pull back when stretched. Perfect for trampolines, garage doors, and machinery.",
      specs: ["Material: Spring Steel", "Various Sizes", "Load: Variable"],
      image: "⭕",
    },
    {
      id: 6,
      name: "Torsion Spring",
      category: "Torsion",
      description:
        "Rotational force springs used in hinges, clothespins, and vehicle suspensions. Custom torque specifications available.",
      specs: ["Material: Music Wire", "Custom Angles", "Torque: Variable"],
      image: "🔴",
    },
    {
      id: 7,
      name: "Die Spring",
      category: "Specialty",
      description:
        "Heavy-duty compression springs used in tooling and dies. Available in light, medium, and heavy load ratings.",
      specs: ["Material: Chrome Silicon", "Color Coded", "High Precision"],
      image: "🟡",
    },
    {
      id: 8,
      name: "Leaf Spring",
      category: "Specialty",
      description:
        "Stack or layering of metal strips, commonly used in vehicle suspension systems for load distribution.",
      specs: ["Material: Spring Steel", "Layered Design", "Vehicle Grade"],
      image: "🟢",
    },
    {
      id: 9,
      name: "Conical Spring",
      category: "Compression",
      description:
        "Cone-shaped compression springs offering variable spring rates and space-saving design.",
      specs: ["Material: Stainless Steel", "Variable Rate", "Space Saving"],
      image: "🟣",
    },
    {
      id: 10,
      name: "Barrel Spring",
      category: "Compression",
      description:
        "Barrel-shaped springs with convex sides, providing uniform stress distribution and resistance to buckling.",
      specs: ["Material: Spring Steel", "Uniform Stress", "Stable Design"],
      image: "🟠",
    },
    {
      id: 11,
      name: "Wave Spring",
      category: "Specialty",
      description:
        "Space-efficient spring design with wave-like coils, ideal for tight spaces requiring high force.",
      specs: ["Material: Spring Steel", "Compact Design", "High Force"],
      image: "🔷",
    },
    {
      id: 12,
      name: "Custom Springs",
      category: "Specialty",
      description:
        "Made-to-order springs designed to your exact specifications. Any material, size, or load requirement.",
      specs: ["Custom Material", "Any Dimension", "Your Specs"],
      image: "⭐",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <SEO
        title="Spring Products - Compression, Tension, Torsion & Flat Springs | Noor Springs"
        description="Explore our wide range of springs: compression springs, tension springs, torsion springs, flat springs, and custom solutions. Quality manufacturing in Visakhapatnam with fast delivery."
        keywords="compression springs, tension springs, torsion springs, flat springs, die springs, leaf springs, coil springs, custom springs, industrial springs Visakhapatnam"
        canonical="https://noorspring.vercel.app/products"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-primary-100">
              Comprehensive range of high-quality springs for every application.
              From standard to custom solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="bg-steel-50 py-8 sticky top-20 z-40 border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-steel-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto">
              <Filter className="text-steel-600 flex-shrink-0" size={20} />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white"
                      : "bg-white text-steel-700 hover:bg-steel-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spring Specification Enquiry CTA */}
      <section className="py-8 bg-gradient-to-r from-primary to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                Need Custom Spring Specifications?
              </h3>
              <p className="text-blue-100">
                Submit detailed technical specs (OD, ID, Wire Dia, Rings) with
                drawings for accurate quotations
              </p>
            </div>
            <Link
              to="/spring-enquiry"
              className="btn-secondary bg-white text-primary hover:bg-blue-50 whitespace-nowrap flex items-center"
            >
              Technical Enquiry Form
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advertisement Banner */}
      <section className="py-8 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdBanner slot="YOUR_AD_SLOT" format="auto" />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-steel-600">
                No products found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-steel-600">
                  Showing{" "}
                  <span className="font-semibold text-steel-900">
                    {filteredProducts.length}
                  </span>{" "}
                  products
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="card group">
                    <div className="h-48 bg-gradient-to-br from-steel-100 to-steel-200 flex items-center justify-center text-6xl">
                      {product.image}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-steel-600 mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-steel-900 mb-2 text-sm">
                          Specifications:
                        </h4>
                        <ul className="space-y-1">
                          {product.specs.map((spec, index) => (
                            <li
                              key={index}
                              className="text-sm text-steel-600 flex items-start"
                            >
                              <span className="text-primary-600 mr-2">•</span>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/contact"
                        state={{ selectedProduct: product.name }}
                        className="btn-primary w-full text-center inline-flex items-center justify-center"
                      >
                        Request Quote
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-steel-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-steel-300 mb-8">
            We specialize in custom spring manufacturing. Contact us with your
            specifications, and we'll create the perfect solution for your
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary bg-primary-600 hover:bg-primary-700 inline-flex items-center justify-center"
            >
              Request Custom Quote
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="tel:9440596384"
              className="btn-outline border-white text-white hover:bg-white hover:text-steel-900 inline-flex items-center justify-center"
            >
              Call: 9440596384
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-steel-600">
                Every spring undergoes rigorous quality testing
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-steel-600">Quick turnaround on all orders</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">
                Competitive Pricing
              </h3>
              <p className="text-steel-600">
                Best value without compromising quality
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
