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
    springType: "",
    outerDiameter: "",
    innerDiameter: "",
    numberOfPieces: "",
    additionalInfo: "",
  });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files || []);
    if (files.length + selected.length > 5)
      return setStatus({ type: "error", message: "Max 5 files" });
    setFiles((p) => [...p, ...selected]);
  };

  const removeFile = (i) => setFiles((p) => p.filter((_, idx) => idx !== i));

  const sendToGmail = () => {
    const subject = encodeURIComponent(
      `Spring Enquiry - ${formData.springType} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Dear Noor Springs Team,%0D%0A%0D%0AName: ${formData.name}%0D%0AEmail: ${
        formData.email
      }%0D%0APhone: ${formData.phone}%0D%0AType: ${
        formData.springType
      }%0D%0AQuantity: ${formData.numberOfPieces}%0D%0A%0D%0A${
        formData.additionalInfo || ""
      }%0D%0A`
    );
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=noorsprings@gmail.com&su=${subject}&body=${body}`;
    const w = window.open(url, "_blank");
    if (!w) return false;
    try {
      w.focus();
    } catch (e) {}
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // open gmail synchronously
    const opened = sendToGmail();

    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    const payload = new FormData();
    Object.keys(formData).forEach((k) => payload.append(k, formData[k]));
    files.forEach((f) => payload.append("files", f));

    try {
      await axios.post(`${apiUrl}/api/spring-enquiries`, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setStatus({
        type: "success",
        message: "Submitted (server) — Gmail compose opened.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        springType: "",
        outerDiameter: "",
        innerDiameter: "",
        numberOfPieces: "",
        additionalInfo: "",
      });
      setFiles([]);
    } catch (err) {
      console.warn(err);
      setStatus({
        type: opened ? "info" : "error",
        message: opened
          ? "Server failed but Gmail compose opened."
          : "Unable to submit and Gmail couldn't open.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SEO
        title="Spring Enquiry"
        description="Request a quotation for springs"
      />

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">
            Spring Specification Enquiry
          </h1>

          {status.message && (
            <div
              className={`mb-4 p-3 rounded ${
                status.type === "success"
                  ? "bg-green-50 text-green-800"
                  : "bg-yellow-50 text-yellow-800"
              }`}
            >
              {status.message}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Full name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Spring Type</label>
                <input
                  name="springType"
                  value={formData.springType}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium">
                  Outer Diameter (mm)
                </label>
                <input
                  name="outerDiameter"
                  value={formData.outerDiameter}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Inner Diameter (mm)
                </label>
                <input
                  name="innerDiameter"
                  value={formData.innerDiameter}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Quantity</label>
                <input
                  name="numberOfPieces"
                  value={formData.numberOfPieces}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">
                Additional Info
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="input-field"
                rows="4"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Attach files (optional)
              </label>
              <input
                id="files"
                type="file"
                multiple
                onChange={handleFileChange}
                className="mt-2"
              />
              {files.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {files.map((f, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span className="text-sm">{f.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="text-red-600"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary flex items-center"
              >
                {loading ? (
                  <span className="mr-2">Submitting...</span>
                ) : (
                  <Send size={16} className="mr-2" />
                )}{" "}
                Submit Enquiry
              </button>
              <button
                type="button"
                onClick={() => {
                  sendToGmail();
                }}
                className="btn-outline flex items-center"
              >
                <Mail size={16} className="mr-2" /> Open Gmail Compose
              </button>
              <button
                type="button"
                onClick={() =>
                  window.open(
                    `https://wa.me/919440596384?text=${encodeURIComponent(
                      `Spring enquiry from ${formData.name || "website"}`
                    )}`,
                    "_blank"
                  )
                }
                className="btn-outline flex items-center"
              >
                <MessageCircle size={16} className="mr-2" /> WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
