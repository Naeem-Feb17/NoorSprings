import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <div>
      <SEO
        title="Privacy Policy - Noor Springs"
        description="Privacy policy of Noor Springs. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information, Noor Springs"
        canonical="https://noorspring.vercel.app/privacy-policy"
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-primary-100">
            Last Updated: December 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              1. Introduction
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              Noor Springs ("we," "us," "our," or "Company") is committed to
              protecting your privacy and ensuring you have a positive
              experience on our website. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website at https://noorspring.vercel.app/ and related
              subdomains (collectively, the "Website").
            </p>
            <p className="text-steel-700 mb-6 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree
              with our policies and practices, please do not use our Website. By
              accessing and using the Website, you signify that you have read,
              understood, and agree to be bound by all the terms of this Privacy
              Policy.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              2. Information We Collect
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              We may collect information about you in a variety of ways. The
              information we may collect on our Website includes:
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8 text-steel-800">
              2.1 Personal Data Provided Directly
            </h3>
            <ul className="list-disc list-inside text-steel-700 mb-6 space-y-2">
              <li>
                <strong>Contact Form Information:</strong> When you fill out our
                contact or enquiry forms, we collect your full name, email
                address, phone number, and message.
              </li>
              <li>
                <strong>Product Enquiry Information:</strong> When you submit
                product specifications or technical enquiries, we collect
                details about your requirements, including dimensions,
                materials, and drawings.
              </li>
              <li>
                <strong>Email Communications:</strong> Any email you send us may
                be collected and stored for customer service and business
                purposes.
              </li>
              <li>
                <strong>Call/WhatsApp Communications:</strong> We may record or
                note details from phone calls and WhatsApp messages for quality
                assurance and record-keeping.
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8 text-steel-800">
              2.2 Automatically Collected Information
            </h3>
            <ul className="list-disc list-inside text-steel-700 mb-6 space-y-2">
              <li>
                <strong>Google Analytics:</strong> We use Google Analytics to
                track website usage, visitor behavior, pages visited, and
                referral sources. This helps us understand how you use our
                Website and improve our services.
              </li>
              <li>
                <strong>Cookies:</strong> Our Website uses cookies to enhance
                your browsing experience. Cookies are small files stored on your
                device that help us remember your preferences.
              </li>
              <li>
                <strong>IP Address:</strong> We automatically collect your IP
                address to analyze traffic patterns and detect fraudulent
                activity.
              </li>
              <li>
                <strong>Device Information:</strong> We collect information
                about your device, including browser type, operating system, and
                device type.
              </li>
              <li>
                <strong>Log Data:</strong> Our servers automatically record
                information about your interactions with the Website, including
                timestamps, URLs visited, and pages viewed.
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4 mt-8 text-steel-800">
              2.3 Third-Party Information
            </h3>
            <p className="text-steel-700 mb-4 leading-relaxed">
              We may receive information about you from third-party services,
              including Google AdSense and other advertising partners, to help
              us serve relevant ads and understand audience demographics.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              3. How We Use Your Information
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              We use the information we collect for various purposes:
            </p>
            <ul className="list-disc list-inside text-steel-700 mb-6 space-y-2">
              <li>
                <strong>Customer Service:</strong> To respond to your inquiries,
                provide product information, and process orders or quotes.
              </li>
              <li>
                <strong>Order Fulfillment:</strong> To prepare, ship, and
                deliver your orders, and to send related communications.
              </li>
              <li>
                <strong>Marketing Communications:</strong> To send you product
                updates, special offers, and promotional content (with your
                consent).
              </li>
              <li>
                <strong>Analytics:</strong> To analyze Website usage, identify
                trends, and improve the user experience.
              </li>
              <li>
                <strong>Fraud Detection:</strong> To prevent fraudulent
                transactions and unauthorized access.
              </li>
              <li>
                <strong>Legal Compliance:</strong> To comply with applicable
                laws, regulations, and legal processes.
              </li>
              <li>
                <strong>Personalization:</strong> To customize your experience
                on our Website based on your preferences and behavior.
              </li>
              <li>
                <strong>Business Operations:</strong> To maintain and improve
                our services, conduct internal research, and develop new
                features.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              4. Data Retention
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required by law. Generally:
            </p>
            <ul className="list-disc list-inside text-steel-700 mb-6 space-y-2">
              <li>Customer inquiry information is retained for 2 years</li>
              <li>
                Transaction records are retained for 7 years for tax purposes
              </li>
              <li>
                Automatically collected data (cookies, analytics) is typically
                retained for 13 months
              </li>
              <li>
                Marketing preferences are retained until you unsubscribe or
                request deletion
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              5. Data Security
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              We take data security seriously and implement appropriate
              technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure,
              or destruction. Our Website uses HTTPS (SSL/TLS encryption) to
              secure data transmitted between your browser and our servers.
            </p>
            <p className="text-steel-700 mb-4 leading-relaxed">
              However, no method of transmission over the Internet or electronic
              storage is completely secure. While we strive to protect your
              personal information, we cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              6. Third-Party Disclosure
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share your information with:
            </p>
            <ul className="list-disc list-inside text-steel-700 mb-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> Third parties who assist us
                in operating our Website and conducting our business (email
                providers, analytics services, hosting providers)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law,
                government requests, or to enforce our terms and conditions
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger,
                acquisition, bankruptcy, or sale of assets
              </li>
              <li>
                <strong>Ad Networks:</strong> We partner with Google AdSense to
                display targeted advertisements. Google may use your data
                according to their privacy policy.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              7. Your Rights and Choices
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <ul className="list-disc list-inside text-steel-700 mb-6 space-y-2">
              <li>
                <strong>Right to Access:</strong> You can request a copy of the
                personal information we hold about you.
              </li>
              <li>
                <strong>Right to Correction:</strong> You can request that we
                correct inaccurate or incomplete information.
              </li>
              <li>
                <strong>Right to Deletion:</strong> You can request deletion of
                your personal information, subject to legal obligations.
              </li>
              <li>
                <strong>Right to Opt-Out:</strong> You can opt out of marketing
                communications by clicking the unsubscribe link in our emails.
              </li>
              <li>
                <strong>Cookie Management:</strong> You can disable cookies
                through your browser settings.
              </li>
            </ul>
            <p className="text-steel-700 mb-6 leading-relaxed">
              To exercise any of these rights, please contact us using the
              information provided below.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              Our Website uses cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc list-inside text-steel-700 mb-6 space-y-2">
              <li>Remember your preferences and login information</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Serve targeted advertisements</li>
              <li>Enhance security and prevent fraud</li>
            </ul>
            <p className="text-steel-700 mb-4 leading-relaxed">
              You can control cookies through your browser settings. Disabling
              cookies may affect the functionality of certain features on our
              Website.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              9. Google Analytics and AdSense
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              Our Website uses Google Analytics to collect and analyze website
              traffic. Google may use cookies to track your interactions across
              multiple websites. For more information about Google's privacy
              practices, please visit:
              <a
                href="https://policies.google.com/privacy"
                className="text-primary-600 hover:text-primary-700 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Privacy Policy
              </a>
            </p>
            <p className="text-steel-700 mb-6 leading-relaxed">
              We also display ads served by Google AdSense. Google may use
              cookies to serve personalized ads based on your browsing history.
              You can opt out of personalized ads at:
              <a
                href="https://adssettings.google.com"
                className="text-primary-600 hover:text-primary-700 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              10. Children's Privacy
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              Our Website is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If we learn that we have collected personal information from a
              child under 13, we will promptly delete such information and
              terminate the child's account.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the updated Privacy Policy on this page and updating the
              "Last Updated" date. Your continued use of the Website after such
              modifications constitutes your acknowledgment and acceptance of
              the updated Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              12. Contact Us
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <div className="bg-steel-50 p-6 rounded-lg mb-8">
              <p className="text-steel-900 font-semibold mb-3">Noor Springs</p>
              <p className="text-steel-700 mb-2">
                Door No. 21-16/6 1C, Near Dolphin Hotel, Suryabagh,
                Visakhapatnam, Andhra Pradesh 530020, India
              </p>
              <p className="text-steel-700 mb-2">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:9440596384"
                  className="text-primary-600 hover:text-primary-700"
                >
                  9440596384
                </a>
              </p>
              <p className="text-steel-700 mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:noorsprings@gmail.com"
                  className="text-primary-600 hover:text-primary-700"
                >
                  noorsprings@gmail.com
                </a>
              </p>
              <p className="text-steel-700">
                <strong>Business Hours:</strong> Monday - Saturday: 9:00 AM -
                7:00 PM IST
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              13. Grievance Officer (India)
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              For users in India, you can file complaints with our Grievance
              Officer regarding any violation of applicable data protection
              laws:
            </p>
            <div className="bg-steel-50 p-6 rounded-lg mb-8">
              <p className="text-steel-900 font-semibold mb-3">
                Data Protection Officer
              </p>
              <p className="text-steel-700 mb-2">Noor Springs</p>
              <p className="text-steel-700 mb-2">
                Email:{" "}
                <a
                  href="mailto:noorsprings@gmail.com"
                  className="text-primary-600 hover:text-primary-700"
                >
                  noorsprings@gmail.com
                </a>
              </p>
              <p className="text-steel-700">
                Response Time: Within 5 business days
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-steel-200">
              <p className="text-steel-600 text-sm">
                © 2025 Noor Springs. All rights reserved. This Privacy Policy is
                effective as of December 2025 and will remain in effect except
                with respect to any changes in its provisions in the future,
                which will be in effect immediately upon posting of the revised
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <section className="py-8 bg-steel-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/" className="btn-primary inline-flex items-center">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
