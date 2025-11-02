import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import axios from "axios";
import SEO from "../components/SEO";

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Pre-fill product type if coming from product page
  useEffect(() => {
    if (location.state?.selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        productType: location.state.selectedProduct,
      }));
    }
  }, [location]);

  const productTypes = [
    "Compression Spring",
    "Tension Spring",
    "Torsion Spring",
    "Flat Spring",
    "Flat Wire Spring",
    "Flat Coil Spring",
    "Die Spring",
    "Leaf Spring",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post("/api/enquiries", formData);

      setStatus({
        type: "success",
        message:
          response.data.message ||
          "Thank you! Your enquiry has been submitted successfully. We will contact you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        productType: "",
        message: "",
      });

      // Scroll to success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.errors?.[0]?.message ||
        "Failed to submit enquiry. Please try again or call us directly.";

      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SEO
        title="Contact Noor Springs - Get Quote for Custom Spring Manufacturing"
        description="Contact Noor Springs in Visakhapatnam for custom spring solutions. Call +91-9440596384 or send enquiry. Located near Dolphin Hotel, Suryabagh. Open Mon-Sat 9 AM - 6 PM."
        keywords="contact Noor Springs, spring quote, spring enquiry, Visakhapatnam spring manufacturer, custom spring order, spring supplier contact"
        canonical="https://noorsprings.in/contact"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-100">
              Have questions or need a custom quote? We're here to help. Contact
              us today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Status Messages */}
          {status.message && (
            <div
              className={`mb-8 p-4 rounded-lg flex items-start space-x-3 ${
                status.type === "success"
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle
                  className="text-green-600 flex-shrink-0 mt-0.5"
                  size={24}
                />
              ) : (
                <AlertCircle
                  className="text-red-600 flex-shrink-0 mt-0.5"
                  size={24}
                />
              )}
              <p
                className={
                  status.type === "success" ? "text-green-800" : "text-red-800"
                }
              >
                {status.message}
              </p>
            </div>
          )}

          {/* Technical Enquiry CTA */}
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-primary rounded-lg">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-steel-900 mb-2">
                  📐 Need to Submit Detailed Spring Specifications?
                </h3>
                <p className="text-steel-700">
                  Use our dedicated technical enquiry form to submit OD, ID,
                  wire diameter, number of rings, and upload technical
                  drawings/PDFs
                </p>
              </div>
              <Link
                to="/spring-enquiry"
                className="btn-primary whitespace-nowrap flex items-center"
              >
                <ArrowRight size={20} className="mr-2" />
                Technical Enquiry Form
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-steel-600 mb-8">
                Reach out to us through any of the following channels. We're
                available Monday to Saturday to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <MapPin className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-1">
                      Address
                    </h3>
                    <p className="text-steel-600">
                      Door No. 21-16/6 1C, Near Dolphin Hotel,
                      <br />
                      Near Fire Station, Suryabagh,
                      <br />
                      Visakhapatnam, Andhra Pradesh 530020
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Phone className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-1">Phone</h3>
                    <a
                      href="tel:9440596384"
                      className="text-primary-600 hover:underline text-lg"
                    >
                      9440596384
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-1">Email</h3>
                    <a
                      href="mailto:noorsprings@gmail.com"
                      className="text-primary-600 hover:underline"
                    >
                      noorsprings@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Clock className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steel-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-steel-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/919440596384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle size={24} />
                  <span className="font-medium text-lg">Chat on WhatsApp</span>
                </a>
              </div>

              {/* Payment Modes */}
              <div className="mt-8 p-6 bg-steel-50 rounded-lg">
                <h3 className="font-semibold text-steel-900 mb-3">
                  Payment Modes
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white rounded-lg text-steel-700 border border-steel-200">
                    Cash
                  </span>
                  <span className="px-4 py-2 bg-white rounded-lg text-steel-700 border border-steel-200">
                    Cheque
                  </span>
                  <span className="px-4 py-2 bg-white rounded-lg text-steel-700 border border-steel-200">
                    Demand Draft
                  </span>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-steel-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Send Us An Enquiry</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-steel-900 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-steel-900 mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-steel-900 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="10-digit phone number"
                  />
                  <p className="text-sm text-steel-500 mt-1">
                    Enter 10-digit number without spaces or dashes
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="productType"
                    className="block text-sm font-medium text-steel-900 mb-2"
                  >
                    Product Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a product type</option>
                    {productTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-steel-900 mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-steel-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Please provide details about your requirements, specifications, quantity, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Submit Enquiry
                    </>
                  )}
                </button>

                <p className="text-sm text-steel-600 text-center">
                  We respect your privacy. Your information will only be used to
                  respond to your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-steel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Find Us On Map
          </h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.3454607136414!2d83.2968836387526!3d17.712055150875297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431c7d0279c9%3A0x401826d3e4698a6a!2sNoor%20Springs!5e0!3m2!1sen!2sin!4v1762091515903!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Noor Springs Location - Suryabagh, Visakhapatnam"
            ></iframe>
          </div>
          <p className="text-center text-steel-600 mt-4">
            Near Dolphin Hotel & Fire Station, Suryabagh, Visakhapatnam
          </p>
        </div>
      </section>
    </div>
  );
}
