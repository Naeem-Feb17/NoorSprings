import { useState } from "react";
import {
  Upload,
  Send,
  MessageCircle,
  Mail,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";
import axios from "axios";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";

export default function SpringEnquiry() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    springType: "",
    outerDiameter: "",
    innerDiameter: "",
    numberOfRings: "",
    wireDiameter: "",
    length: "",
    numberOfPieces: "",
    material: "",
    finish: "",
    loadRequirement: "",
    additionalInfo: "",
  });

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const springTypes = [
    "Compression Spring",
    "Tension Spring",
    "Torsion Spring",
    "Flat Spring",
    "Flat Wire Spring",
    "Flat Coil Spring",
    "Die Spring",
    "Leaf Spring",
    "Custom Spring",
  ];

  const materials = [
    "Stainless Steel (SS304/SS316)",
    "Carbon Steel",
    "Alloy Steel",
    "Phosphor Bronze",
    "Beryllium Copper",
    "Music Wire",
    "Other",
  ];

  const finishes = [
    "Zinc Plated",
    "Nickel Plated",
    "Chrome Plated",
    "Powder Coated",
    "Black Oxide",
    "Phosphate Coated",
    "Plain/Uncoated",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Limit to 5 files max
    if (files.length + selectedFiles.length > 5) {
      setStatus({
        type: "error",
        message: "Maximum 5 files allowed",
      });
      return;
    }

    // Check file sizes (max 10MB per file)
    const oversizedFiles = selectedFiles.filter(
      (file) => file.size > 10 * 1024 * 1024
    );
    if (oversizedFiles.length > 0) {
      setStatus({
        type: "error",
        message: "Each file must be less than 10MB",
      });
      return;
    }

    setFiles((prev) => [...prev, ...selectedFiles]);
    setStatus({ type: "", message: "" });
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();

      // Append all form fields
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Append files
      files.forEach((file) => {
        formDataToSend.append("files", file);
      });

      const response = await axios.post(
        "/api/spring-enquiries",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setStatus({
        type: "success",
        message:
          response.data.message ||
          "Thank you! Your spring enquiry has been submitted successfully. We will contact you soon with a detailed quotation.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        springType: "",
        outerDiameter: "",
        innerDiameter: "",
        numberOfRings: "",
        wireDiameter: "",
        length: "",
        numberOfPieces: "",
        material: "",
        finish: "",
        loadRequirement: "",
        additionalInfo: "",
      });
      setFiles([]);

      // Reset file input
      const fileInput = document.getElementById("files");
      if (fileInput) fileInput.value = "";

      // Scroll to success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to submit enquiry. Please try again or contact us directly.";

      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const sendToWhatsApp = () => {
    const message = `
*Spring Enquiry Request*

*Personal Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "N/A"}

*Spring Specifications:*
Type: ${formData.springType}
Outer Diameter (OD): ${formData.outerDiameter} mm
Inner Diameter (ID): ${formData.innerDiameter} mm
Number of Rings/Coils: ${formData.numberOfRings}
Wire Diameter: ${formData.wireDiameter} mm
Length: ${formData.length} mm
Quantity: ${formData.numberOfPieces} pieces
Material: ${formData.material}
Finish: ${formData.finish}
Load Requirement: ${formData.loadRequirement}

*Additional Information:*
${formData.additionalInfo || "None"}

Note: Please share technical drawings/PDFs via email if available.
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919440596384?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const sendToGmail = () => {
    const subject = encodeURIComponent(
      `Spring Enquiry - ${formData.springType} - ${formData.name}`
    );
    const body = encodeURIComponent(`
Dear Noor Springs Team,

I would like to request a quotation for the following spring specifications:

PERSONAL DETAILS:
-----------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "N/A"}

SPRING SPECIFICATIONS:
---------------------
Type: ${formData.springType}
Outer Diameter (OD): ${formData.outerDiameter} mm
Inner Diameter (ID): ${formData.innerDiameter} mm
Number of Rings/Coils: ${formData.numberOfRings}
Wire Diameter: ${formData.wireDiameter} mm
Length: ${formData.length} mm
Quantity Required: ${formData.numberOfPieces} pieces
Material: ${formData.material}
Finish/Coating: ${formData.finish}
Load Requirement: ${formData.loadRequirement}

ADDITIONAL INFORMATION:
----------------------
${formData.additionalInfo || "None"}

I will attach technical drawings/PDFs separately if required.

Best Regards,
${formData.name}
    `);

    const gmailUrl = `mailto:noorsprings@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = gmailUrl;
  };

  return (
    <div>
      <SEO
        title="Spring Enquiry Form - Custom Spring Quotation | Noor Springs"
        description="Get a custom quotation for springs. Submit detailed specifications including OD, ID, wire diameter, number of rings, and load requirements. Upload technical drawings for accurate quotes."
        keywords="spring quotation, custom spring enquiry, spring specifications, OD ID spring, wire diameter, spring load calculation, technical drawing upload"
        canonicalUrl="https://noorsprings.in/spring-enquiry"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Spring Specification Enquiry
            </h1>
            <p className="text-xl text-blue-100">
              Submit detailed technical specifications and get accurate
              quotations
            </p>
          </div>
        </div>
      </section>

      {/* Status Messages */}
      {status.message && (
        <div className="container mx-auto px-4 py-6">
          <div
            className={`max-w-4xl mx-auto p-4 rounded-lg flex items-start ${
              status.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle className="mr-3 flex-shrink-0" size={24} />
            ) : (
              <AlertCircle className="mr-3 flex-shrink-0" size={24} />
            )}
            <div>
              <p className="font-medium">{status.message}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Form Section */}
      <section className="py-16 bg-steel-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Instructions */}
              <div className="mb-8 p-6 bg-blue-50 border-l-4 border-primary rounded">
                <h3 className="text-lg font-semibold text-steel-900 mb-2">
                  📋 How to Fill This Form
                </h3>
                <ul className="text-steel-700 space-y-1 list-disc list-inside">
                  <li>Fill in all required fields marked with *</li>
                  <li>Provide accurate measurements in millimeters (mm)</li>
                  <li>
                    Upload technical drawings/PDFs if available (max 5 files,
                    10MB each)
                  </li>
                  <li>Submit via form, WhatsApp, or Gmail</li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl font-bold text-steel-900 mb-4 pb-2 border-b-2 border-primary">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        className="input-field"
                        placeholder="9876543210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Your Company Pvt Ltd"
                      />
                    </div>
                  </div>
                </div>

                {/* Spring Specifications */}
                <div>
                  <h3 className="text-2xl font-bold text-steel-900 mb-4 pb-2 border-b-2 border-primary">
                    Spring Specifications
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Spring Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="springType"
                        value={formData.springType}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select Spring Type</option>
                        {springTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Outer Diameter (OD){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          step="0.01"
                          name="outerDiameter"
                          value={formData.outerDiameter}
                          onChange={handleChange}
                          required
                          className="input-field pr-12"
                          placeholder="25.5"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-500">
                          mm
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Inner Diameter (ID){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          step="0.01"
                          name="innerDiameter"
                          value={formData.innerDiameter}
                          onChange={handleChange}
                          required
                          className="input-field pr-12"
                          placeholder="20.0"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-500">
                          mm
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Number of Rings/Coils{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.5"
                        name="numberOfRings"
                        value={formData.numberOfRings}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="10"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Wire Diameter <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          step="0.01"
                          name="wireDiameter"
                          value={formData.wireDiameter}
                          onChange={handleChange}
                          required
                          className="input-field pr-12"
                          placeholder="2.5"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-500">
                          mm
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Free Length <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          step="0.01"
                          name="length"
                          value={formData.length}
                          onChange={handleChange}
                          required
                          className="input-field pr-12"
                          placeholder="50.0"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-500">
                          mm
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Quantity Required{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="numberOfPieces"
                        value={formData.numberOfPieces}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Material <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select Material</option>
                        {materials.map((material) => (
                          <option key={material} value={material}>
                            {material}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Surface Finish/Coating{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="finish"
                        value={formData.finish}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select Finish</option>
                        {finishes.map((finish) => (
                          <option key={finish} value={finish}>
                            {finish}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-steel-900 mb-2">
                        Load Requirement (Optional)
                      </label>
                      <input
                        type="text"
                        name="loadRequirement"
                        value={formData.loadRequirement}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="e.g., 50N at 30mm compression"
                      />
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <h3 className="text-2xl font-bold text-steel-900 mb-4 pb-2 border-b-2 border-primary">
                    Technical Documents
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-steel-900 mb-2">
                      Upload Technical Drawings/PDFs (Optional)
                    </label>
                    <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-steel-300 border-dashed rounded-lg hover:border-primary transition-colors">
                      <div className="space-y-2 text-center">
                        <Upload className="mx-auto h-12 w-12 text-steel-400" />
                        <div className="flex text-sm text-steel-600">
                          <label
                            htmlFor="files"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark"
                          >
                            <span>Upload files</span>
                            <input
                              id="files"
                              name="files"
                              type="file"
                              multiple
                              accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf"
                              onChange={handleFileChange}
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-steel-500">
                          PDF, JPG, PNG, DWG, DXF up to 10MB each (max 5 files)
                        </p>
                      </div>
                    </div>

                    {/* File List */}
                    {files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {files.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-steel-50 rounded-lg"
                          >
                            <div className="flex items-center">
                              <Upload className="text-primary mr-2" size={20} />
                              <span className="text-sm text-steel-700">
                                {file.name} ({(file.size / 1024).toFixed(1)} KB)
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X size={20} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-2xl font-bold text-steel-900 mb-4 pb-2 border-b-2 border-primary">
                    Additional Information
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-steel-900 mb-2">
                      Special Requirements or Notes (Optional)
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows="4"
                      className="input-field"
                      placeholder="Any special requirements, tolerances, application details, or other information that might help us provide an accurate quotation..."
                    />
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="space-y-4">
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

                  {/* Alternative Contact Methods */}
                  <div className="text-center">
                    <p className="text-steel-600 mb-3">Or send enquiry via:</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        type="button"
                        onClick={sendToWhatsApp}
                        className="btn-outline flex items-center justify-center"
                      >
                        <MessageCircle size={20} className="mr-2" />
                        Send to WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={sendToGmail}
                        className="btn-outline flex items-center justify-center"
                      >
                        <Mail size={20} className="mr-2" />
                        Send via Gmail
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-steel-600 text-center">
                  We respect your privacy. Your information will only be used to
                  provide quotations and respond to your enquiry.
                </p>
              </form>
            </div>

            {/* Help Section */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-steel-900 mb-3">
                💡 Need Help with Specifications?
              </h3>
              <p className="text-steel-700 mb-4">
                If you don't have all the technical details, don't worry!
                Contact us and our experts will help you determine the right
                specifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919440596384" className="btn-primary text-center">
                  📞 Call: +91-9440596384
                </a>
                <a
                  href="https://wa.me/919440596384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-center"
                >
                  💬 WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
