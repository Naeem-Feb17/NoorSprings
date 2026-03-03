import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import ProductImageSlider from "../components/ProductImageSlider";

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
      name: "Compression Spring",
      grade: "Standard Grade",
      category: "Compression",
      description:
        "Precision stainless steel compression springs for electrical, mechanical, and general industrial applications.",
      specs: [
        "Wire Dia: 1 mm – 8 mm",
        "Outer Dia (OD): 6 mm – 80 mm",
        "Free Length: 10 mm – 300 mm",
        "Material: Stainless Steel",
        "Load Capacity: up to 250 kg",
      ],
      images: [
        "/springs/shiny-compression-spring.png",
        "/springs/compression-spring-2.png",
      ],
    },
    {
      id: 2,
      name: "Flat Spring",
      grade: "Light Duty",
      category: "Flat",
      description:
        "Tightly wound flat wire clock springs used in clocks, motors, retractable mechanisms, and automotive applications.",
      specs: [
        "Wire Thickness: 0.5 mm – 3 mm",
        "Strip Width: 5 mm – 30 mm",
        "Coil Turns: custom",
        "Material: High-Carbon Steel",
        "Load Capacity: up to 150 kg",
      ],
      images: ["/springs/flat-spring.jpg"],
    },
    {
      id: 3,
      name: "Spiral / Garage Coil Spring",
      grade: "Industrial Grade",
      category: "Flat",
      description:
        "Heavy-gauge spiral flat coil springs designed for garage doors, counterbalance systems, and torsional energy storage.",
      specs: [
        "Wire Dia: 5 mm – 15 mm",
        "OD: 80 mm – 250 mm",
        "Free Length: up to 15 ft",
        "Material: Stainless Steel",
        "Load Capacity: up to 500 kg",
      ],
      images: ["/springs/spiral-spring.png"],
    },
    {
      id: 4,
      name: "Compression Spring — Heavy Duty",
      grade: "Heavy Duty",
      category: "Compression",
      description:
        "High-strength industrial compression springs for heavy machinery, presses, and load-bearing equipment. Custom sizes available.",
      specs: [
        "Wire Dia: 8 mm – 30 mm",
        "OD: 50 mm – 200 mm",
        "Free Length: 50 mm – 500 mm",
        "Material: High Carbon Steel",
        "Load Capacity: up to 1000 kg",
      ],
      images: ["/springs/compression-spring-1.png"],
    },
    {
      id: 5,
      name: "Tension / Extension Spring",
      grade: "Standard Grade",
      category: "Tension",
      description:
        "Extension springs that store energy and return to original length. Ideal for trampolines, garage doors, and machinery.",
      specs: [
        "Wire Dia: 0.5 mm – 10 mm",
        "OD: 5 mm – 80 mm",
        "Free Length: 10 mm – 400 mm",
        "Material: Spring Steel",
        "Load Capacity: variable",
      ],
      images: [
        "/springs/cylindrical-tension-spring.png",
        "/springs/extension-spring.png",
      ],
    },
    {
      id: 6,
      name: "Torsion Spring",
      grade: "Custom Made",
      category: "Torsion",
      description:
        "Precision torsion springs applying rotational torque. Used in hinges, clothespins, vehicle suspensions, and tooling.",
      specs: [
        "Wire Dia: 0.5 mm – 12 mm",
        "Leg Length: custom",
        "Helix Direction: LH / RH",
        "Material: Music Wire / SS",
        "Torque: variable",
      ],
      images: ["/springs/torsion-spring.png"],
    },
    {
      id: 7,
      name: "Die Spring",
      grade: "High Precision",
      category: "Specialty",
      description:
        "Color-coded heavy-duty die springs for press tooling and stamping dies. Available in light, medium, and heavy load grades.",
      specs: [
        "Wire Dia: 4 mm – 20 mm",
        "OD: 20 mm – 100 mm",
        "Free Length: 25 mm – 300 mm",
        "Material: Chrome Silicon",
        "Load Rating: Light / Medium / Heavy",
      ],
      images: ["/springs/compression-spring-types.png"],
    },
    {
      id: 8,
      name: "Extension Spring — Heavy Duty",
      grade: "Industrial Grade",
      category: "Tension",
      description:
        "Heavy-gauge extension springs for industrial pulling applications, agricultural machinery, and heavy equipment.",
      specs: [
        "Wire Dia: 5 mm – 15 mm",
        "OD: 30 mm – 120 mm",
        "Free Length: 100 mm – 600 mm",
        "Material: High Carbon Steel",
        "Load Capacity: up to 800 kg",
      ],
      images: ["/springs/heavy-duty-extension-spring.png"],
    },
    {
      id: 9,
      name: "Torsion Spring — Leg Type",
      grade: "Custom Made",
      category: "Torsion",
      description:
        "Double-leg torsion springs with configurable leg angles, used in automotive, electronics, and mechanical assemblies.",
      specs: [
        "Wire Dia: 1 mm – 8 mm",
        "Body OD: 8 mm – 60 mm",
        "Leg Angle: 0° – 360°",
        "Material: Music Wire",
        "Torque: custom specification",
      ],
      images: ["/springs/torsion-spring-2.png"],
    },
    {
      id: 10,
      name: "Compression & Extension Combo",
      grade: "Multi-Purpose",
      category: "Specialty",
      description:
        "Paired compression and extension spring sets for balanced force mechanisms, used in automation and assembly fixtures.",
      specs: [
        "Wire Dia: 1 mm – 10 mm",
        "OD: 10 mm – 100 mm",
        "Free Length: custom",
        "Material: Spring Steel",
        "Supplied as matched pairs",
      ],
      images: ["/springs/compression-extension-spring.png"],
    },
    {
      id: 11,
      name: "R-Pin / Cotter Pin Spring",
      grade: "Fastening Grade",
      category: "Specialty",
      description:
        "Spring steel R-pins and cotter pins for securing axles, clevis pins, and shafts in agricultural and industrial equipment.",
      specs: [
        "Wire Dia: 1.5 mm – 6 mm",
        "Pin Length: 20 mm – 150 mm",
        "Material: Spring Steel",
        "Finish: Zinc / Plain",
        "Load: locking / snap-fit",
      ],
      images: ["/springs/r-pin.png", "/springs/r-pin-2.png"],
    },
    {
      id: 12,
      name: "Custom Springs",
      grade: "Custom Made",
      category: "Specialty",
      description:
        "Made-to-order springs built to your exact drawings and specifications. Any type, material, size, or load requirement.",
      specs: [
        "Any wire diameter",
        "Any OD / Free Length",
        "Any material grade",
        "Supplied with inspection report",
        "Min qty negotiable",
      ],
      images: [
        "/springs/springs.png",
        "/springs/metallic-spring-workbench.png",
      ],
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
        title="Spring Products | Compression, Tension, Torsion, Flat & Custom Springs | Noor Springs Visakhapatnam"
        description="Browse Noor Springs\' full product catalogue: compression springs, tension springs, torsion springs, flat springs, die springs, clock springs, extension springs, R-pins and fully custom springs. Industrial-grade quality from Visakhapatnam. Call +91-9440596384."
        keywords="compression springs Visakhapatnam, tension springs, torsion springs, flat springs, die springs, clock springs, extension springs, heavy duty springs, custom springs India, industrial spring catalogue, spring manufacturer Vizag, coil springs Andhra Pradesh, stainless steel springs, high carbon steel springs"
        canonical="https://noorspring.vercel.app/products"
        breadcrumb={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://noorspring.vercel.app/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Products",
              item: "https://noorspring.vercel.app/products",
            },
          ],
        }}
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

      {/* Wire Banner */}
      <section className="bg-white dark:bg-steel-900 border-b border-steel-200 dark:border-steel-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="lg:w-2/5 relative overflow-hidden min-h-[280px]">
              <img
                src="/springs/wires-different-size.png"
                alt="Spring wire in different sizes and grades"
                className="w-full h-full object-cover"
                style={{ minHeight: "280px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white dark:to-steel-900 hidden lg:block" />
              <div className="absolute bottom-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Premium Wire Stock
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-3/5 px-8 py-10 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-2">
                Raw Material Excellence
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-steel-900 dark:text-white mb-3">
                Wire Available in Every Size &amp; Grade
              </h2>
              <p className="text-steel-600 dark:text-steel-400 mb-6 text-sm leading-relaxed">
                All our springs start with precision-selected wire. From fine
                gauge to heavy-duty rod, we stock a wide range of diameters and
                steel grades to match exact load, corrosion, and fatigue
                requirements.
              </p>

              {/* Wire specs grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    label: "Wire Sizes",
                    value: "0.3 mm – 30 mm",
                    icon: "📏",
                  },
                  {
                    label: "Grades",
                    value: "Carbon · Alloy · SS",
                    icon: "🔩",
                  },
                  {
                    label: "Finishes",
                    value: "Bright · Galv · EP",
                    icon: "✨",
                  },
                  {
                    label: "Purpose",
                    value: "Auto · Industrial · Marine",
                    icon: "🏭",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-steel-50 dark:bg-steel-800 rounded-lg p-3 text-center border border-steel-200 dark:border-steel-700"
                  >
                    <div className="text-xl mb-1">{item.icon}</div>
                    <div className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-steel-700 dark:text-steel-300 font-medium">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Wire grade tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {[
                  "IS 4454 Music Wire",
                  "Hard Drawn",
                  "Oil Tempered",
                  "Stainless 302/304",
                  "Chrome Silicon",
                  "Chrome Vanadium",
                  "Phosphor Bronze",
                ].map((grade) => (
                  <span
                    key={grade}
                    className="text-xs bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800 px-3 py-1 rounded-full font-medium"
                  >
                    {grade}
                  </span>
                ))}
              </div>
            </div>
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
      <section className="py-12 bg-blue-600 dark:bg-blue-800 border-l-4 border-r-4 border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left text-white">
              <h3 className="text-2xl font-black mb-3 text-white">
                📋 SUBMIT CUSTOM SPECIFICATIONS
              </h3>
              <p className="text-white font-semibold mb-2">
                Need custom dimensions? Submit your technical requirements:
              </p>
              <p className="text-blue-100 text-sm">
                OD, ID, Wire Diameter, Rings, Material, Load Requirements +
                Technical Drawings/PDFs
              </p>
            </div>
            <Link
              to="/spring-enquiry"
              className="px-8 py-4 bg-white text-blue-600 font-black rounded-lg hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap flex items-center text-lg border-2 border-white"
            >
              📑 FILL ENQUIRY FORM
              <ArrowRight size={22} className="ml-2" />
            </Link>
          </div>
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
                  <div
                    key={product.id}
                    className="card group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 bg-white dark:bg-steel-800 border border-steel-100 dark:border-steel-700 rounded-xl overflow-hidden"
                  >
                    {/* Image slider */}
                    <ProductImageSlider
                      images={product.images}
                      alt={product.name}
                    />

                    <div className="p-6">
                      {/* Category + Grade badges */}
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs font-semibold text-primary-600 bg-primary-50 dark:bg-primary-950 dark:text-primary-400 px-2.5 py-1 rounded-full">
                          {product.category}
                        </span>
                        <span className="text-xs font-semibold text-steel-600 dark:text-steel-300 bg-steel-100 dark:bg-steel-700 px-2.5 py-1 rounded-full border border-steel-200 dark:border-steel-600">
                          {product.grade}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors dark:text-white">
                        {product.name}
                      </h3>

                      <p className="text-steel-600 dark:text-steel-400 mb-4 line-clamp-2 text-sm leading-relaxed">
                        {product.description}
                      </p>

                      {/* Technical specs table */}
                      <div className="mb-5 bg-steel-50 dark:bg-steel-900 rounded-lg p-3 border border-steel-200 dark:border-steel-700">
                        <h4 className="font-bold text-steel-800 dark:text-steel-200 mb-2 text-xs uppercase tracking-widest">
                          Technical Specs
                        </h4>
                        <ul className="space-y-1">
                          {product.specs.map((spec, index) => (
                            <li
                              key={index}
                              className="text-xs text-steel-700 dark:text-steel-300 flex items-start gap-2"
                            >
                              <span className="text-primary-500 font-bold mt-0.5 flex-shrink-0">
                                ▸
                              </span>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/contact"
                        state={{ selectedProduct: product.name }}
                        className="btn-primary w-full text-center inline-flex items-center justify-center text-sm font-bold bg-primary-600 hover:bg-primary-700 py-3 rounded-lg"
                      >
                        💬 REQUEST QUOTE
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
      <section className="py-16 bg-steel-900 text-white border-l-8 border-r-8 border-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            📞 CAN'T FIND WHAT YOU NEED?
          </h2>
          <p className="text-xl text-steel-300 mb-8 font-semibold">
            We specialize in CUSTOM spring manufacturing. Get in touch with your
            exact requirements, and we'll create the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary bg-primary-600 hover:bg-primary-700 inline-flex items-center justify-center px-8 py-4 font-black text-lg"
            >
              📋 REQUEST CUSTOM QUOTE
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="tel:9440596384"
              className="btn-outline border-white text-white hover:bg-white hover:text-steel-900 inline-flex items-center justify-center px-8 py-4 font-black text-lg"
            >
              ☎️ CALL: 9440596384
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
