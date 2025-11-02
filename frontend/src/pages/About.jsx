import {
  Building,
  Users,
  Target,
  Award,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import SEO from "../components/SEO";

export default function About() {
  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Quality First",
      description:
        "We never compromise on quality. Every spring is manufactured using premium materials and rigorous quality checks.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Customer Focused",
      description:
        "Your satisfaction is our priority. We work closely with clients to understand and meet their specific requirements.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Innovation",
      description:
        "Constantly evolving our manufacturing processes to deliver better products and faster turnaround times.",
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Reliability",
      description:
        "Over a decade of consistent service delivery has made us a trusted partner for businesses across India.",
    },
  ];

  const milestones = [
    { year: "2011", event: "Noor Springs established in Visakhapatnam" },
    { year: "2014", event: "Expanded product range to include flat springs" },
    {
      year: "2017",
      event: "Achieved ISO certification for quality management",
    },
    { year: "2020", event: "Crossed 500+ satisfied customers milestone" },
    { year: "2023", event: "Introduced advanced manufacturing equipment" },
  ];

  return (
    <div>
      <SEO
        title="About Noor Springs - Spring Manufacturing Excellence Since 2011"
        description="Learn about Noor Springs, a trusted spring manufacturer in Visakhapatnam since 2011. Founded by Mr. Noor Mohammed, we deliver quality compression, tension, and torsion springs to industries across India."
        keywords="about Noor Springs, spring manufacturer history, Visakhapatnam springs, Mr. Noor Mohammed, spring manufacturing company"
        canonical="https://noorsprings.in/about"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About Noor Springs
            </h1>
            <p className="text-xl text-primary-100">
              Building trust through quality since 2011. Your reliable partner
              for all spring manufacturing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <div className="space-y-4 text-steel-700 text-lg">
                <p>
                  Established in <strong>2011</strong>, Noor Springs has grown
                  from a small manufacturing unit to one of Visakhapatnam's most
                  trusted spring manufacturers. Under the visionary leadership
                  of <strong>Mr. Noor Mohammed</strong> (Proprietor), we have
                  built a reputation for excellence and reliability.
                </p>
                <p>
                  Located in the heart of Suryabagh, Visakhapatnam, our
                  state-of-the-art facility manufactures a comprehensive range
                  of springs including compression springs, torsion springs,
                  flat springs, and custom solutions tailored to our clients'
                  specific needs.
                </p>
                <p>
                  With over <strong>13 years of industry experience</strong>, we
                  serve diverse sectors including automotive, electrical,
                  mechanical, household applications, and industrial machinery.
                  Our commitment to quality, competitive pricing, and timely
                  delivery has earned us the trust of over 500 satisfied
                  customers.
                </p>
              </div>
            </div>

            <div className="bg-steel-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-steel-900">
                Company Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building
                    className="text-primary-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <div className="font-semibold text-steel-900">
                      Business Name
                    </div>
                    <div className="text-steel-700">Noor Springs</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users
                    className="text-primary-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <div className="font-semibold text-steel-900">
                      Proprietor
                    </div>
                    <div className="text-steel-700">Mr. Noor Mohammed</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award
                    className="text-primary-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <div className="font-semibold text-steel-900">
                      Year Established
                    </div>
                    <div className="text-steel-700">2011</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Building
                    className="text-primary-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <div className="font-semibold text-steel-900">
                      Business Type
                    </div>
                    <div className="text-steel-700">
                      Manufacturer / Supplier / Dealer
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin
                    className="text-primary-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <div className="font-semibold text-steel-900">
                      GST Number
                    </div>
                    <div className="text-steel-700">37AQFPM3706Q</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin
                    className="text-primary-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <div className="font-semibold text-steel-900">Location</div>
                    <div className="text-steel-700">
                      Door No. 21-16/6 1C, Near Dolphin Hotel,
                      <br />
                      Suryabagh, Visakhapatnam,
                      <br />
                      Andhra Pradesh 530020
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone
                    className="text-primary-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <div className="font-semibold text-steel-900">Contact</div>
                    <a
                      href="tel:9440596384"
                      className="text-primary-600 hover:underline"
                    >
                      9440596384
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">
                Our Mission
              </h3>
              <p className="text-steel-700 text-lg">
                To manufacture world-class springs that exceed customer
                expectations through continuous innovation, quality
                craftsmanship, and unwavering commitment to excellence. We
                strive to be the preferred spring manufacturing partner for
                industries across India.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary-600">
                Our Vision
              </h3>
              <p className="text-steel-700 text-lg">
                To become the leading spring manufacturer in India, recognized
                for our quality products, customer-centric approach, and
                sustainable manufacturing practices. We aim to expand our reach
                while maintaining the personal touch that has defined our
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 text-primary-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-steel-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-steel-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-steel-300">
              Key milestones in our growth story
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-24 text-primary-400 font-bold text-xl">
                  {milestone.year}
                </div>
                <div className="flex-grow border-l-4 border-primary-600 pl-6 pb-8">
                  <p className="text-lg text-steel-200">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Partner With Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-steel-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-steel-900">
                Quality Materials
              </h3>
              <p className="text-steel-600">
                We use only premium stainless steel and high-grade materials to
                ensure durability and performance.
              </p>
            </div>

            <div className="bg-steel-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-steel-900">
                Expert Craftsmanship
              </h3>
              <p className="text-steel-600">
                Our skilled technicians bring decades of combined experience in
                spring manufacturing.
              </p>
            </div>

            <div className="bg-steel-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-steel-900">
                Custom Solutions
              </h3>
              <p className="text-steel-600">
                We specialize in creating custom springs tailored to your exact
                specifications.
              </p>
            </div>

            <div className="bg-steel-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-steel-900">
                Competitive Pricing
              </h3>
              <p className="text-steel-600">
                Fair and transparent pricing without compromising on quality or
                service.
              </p>
            </div>

            <div className="bg-steel-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-steel-900">
                Fast Turnaround
              </h3>
              <p className="text-steel-600">
                Quick production and delivery times to keep your projects on
                schedule.
              </p>
            </div>

            <div className="bg-steel-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-steel-900">
                Excellent Support
              </h3>
              <p className="text-steel-600">
                Dedicated customer service team ready to assist you at every
                step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
