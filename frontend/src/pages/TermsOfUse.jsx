import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function TermsOfUse() {
  return (
    <div>
      <SEO
        title="Terms of Use - Noor Springs"
        description="Terms and conditions of use for Noor Springs website. Please read our terms before using our services."
        keywords="terms of use, terms and conditions, legal terms, Noor Springs"
        canonical="https://noorspring.vercel.app/terms-of-use"
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Terms of Use
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
              1. Agreement to Terms
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              These Terms of Use (the "Terms") constitute a legally binding
              agreement between you and Noor Springs ("Company," "we," "us," or
              "our") governing your use of our website located at
              https://noorspring.vercel.app/ and all related content, services,
              and transactions available through the Website (collectively, the
              "Website").
            </p>
            <p className="text-steel-700 mb-6 leading-relaxed">
              By accessing and using the Website, you acknowledge that you have
              read, understood, and agree to be bound by all the terms and
              conditions outlined herein. If you do not agree with any of these
              Terms, please refrain from using the Website immediately. Your
              continued use of the Website constitutes your acceptance of these
              Terms.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              2. Modifications to Terms
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              Noor Springs reserves the right to modify these Terms at any time
              without prior notice. Changes to the Terms will be effective
              immediately upon posting to the Website. Your continued use of the
              Website following any modifications constitutes your acceptance of
              the updated Terms. We encourage you to review these Terms
              regularly to stay informed of any updates.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              3. Use License
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              Permission is granted to temporarily download one copy of the
              materials (including information and software) on the Website for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul className="list-disc list-inside text-steel-700 mb-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or for any public
                display
              </li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>
                Remove any copyright or proprietary notices from the materials
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any other server
              </li>
              <li>
                Use any automated tools or scripts to access, collect, or
                manipulate data from the Website
              </li>
              <li>
                Conduct any systematic retrieval of data or other content from
                the Website to create or compile, directly or indirectly, a
                collection, compilation, database, or directory without written
                permission
              </li>
              <li>
                Frame, inline link, or reference any portion of the Website
                without our express written consent
              </li>
              <li>
                Use the Website in any manner that could damage, disable,
                overburden, or impair our servers or networks
              </li>
              <li>
                Attempt to gain unauthorized access to secure portions of the
                Website
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              4. Disclaimer of Warranties
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              The materials on the Website are provided on an "as-is" basis.
              Noor Springs makes no warranties, expressed or implied, and hereby
              disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
            <p className="text-steel-700 mb-6 leading-relaxed">
              Further, Noor Springs does not warrant or make any representations
              concerning the accuracy, likely results, or reliability of the use
              of the materials on the Website or otherwise relating to such
              materials or on any sites linked to this site.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              5. Limitations of Liability
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              In no event shall Noor Springs or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on the Website, even if Noor
              Springs or a Noor Springs authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              6. Accuracy of Materials
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              The materials appearing on the Website could include technical,
              typographical, or photographic errors. Noor Springs does not
              warrant that any of the materials on the Website are accurate,
              complete, or current. Noor Springs may make changes to the
              materials contained on the Website at any time without notice.
              However, Noor Springs does not make any commitment to update the
              materials.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              7. Links and Third-Party Content
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              Noor Springs has not reviewed all of the sites linked to its
              Website and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement by Noor
              Springs of the site. Use of any such linked website is at the
              user's own risk.
            </p>
            <p className="text-steel-700 mb-6 leading-relaxed">
              If you believe that any content linked from our Website violates
              your rights or contains inaccurate information, please notify us
              immediately using the contact information provided below.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              8. Modifications to Website
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              Noor Springs may revise these materials contained on the Website
              and the Website itself at any time without notice. However, Noor
              Springs does not make any commitment to update the materials. Noor
              Springs may also make improvements or changes to the Website, its
              products, services, or any materials or information contained
              thereon at any time without notice.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              9. Intellectual Property Rights
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              All content on the Website, including but not limited to text,
              graphics, logos, images, audio clips, digital downloads, data
              compilations, and software, is the property of Noor Springs, its
              content suppliers, or other creators and is protected by
              international copyright and intellectual property laws.
            </p>
            <p className="text-steel-700 mb-6 leading-relaxed">
              You may not reproduce, modify, distribute, transmit, display,
              publish, license, create derivative works from, transfer, or sell
              any information, software, products, or services obtained from the
              Website without our prior written consent.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              10. User Responsibilities and Conduct
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              You agree to comply with all applicable laws and regulations when
              using the Website. You further agree not to:
            </p>
            <ul className="list-disc list-inside text-steel-700 mb-6 space-y-2">
              <li>
                Violate any applicable law, statute, ordinance, or regulation
              </li>
              <li>
                Infringe upon or violate the intellectual property rights or
                other rights of Noor Springs or any third party
              </li>
              <li>
                Transmit any viruses, worms, or other malicious or harmful code
              </li>
              <li>
                Engage in spam, phishing, hacking, or any other unauthorized
                access attempts
              </li>
              <li>
                Post or transmit defamatory, obscene, abusive, or otherwise
                objectionable content
              </li>
              <li>
                Harass, threaten, or intimidate any other users or our staff
              </li>
              <li>
                Impersonate another person or entity or misrepresent your
                affiliation
              </li>
              <li>
                Collect or track personal information about others without
                consent
              </li>
              <li>
                Interfere with or disrupt the normal functioning of the Website
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              11. Products, Pricing, and Availability
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              All product descriptions, pricing information, and product
              availability on the Website are subject to change without notice.
              Noor Springs reserves the right to:
            </p>
            <ul className="list-disc list-inside text-steel-700 mb-6 space-y-2">
              <li>
                Correct any typographical errors or inaccuracies in pricing
              </li>
              <li>Limit quantities available for purchase</li>
              <li>Refuse or cancel any order for any reason</li>
              <li>
                Discontinue or modify any products or services at any time
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              12. Order and Quote Process
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              When you submit an enquiry or request for a quote through our
              Website:
            </p>
            <ul className="list-disc list-inside text-steel-700 mb-6 space-y-2">
              <li>
                You are providing us with information to prepare a quotation
              </li>
              <li>
                A quotation is not a binding contract; it is an invitation for
                you to make an offer
              </li>
              <li>
                We will respond with a formal quote, and an order is confirmed
                only upon our written acceptance
              </li>
              <li>
                All quotes are valid for 30 days unless otherwise specified
              </li>
              <li>Prices are in Indian Rupees (INR) unless otherwise stated</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              13. Payment Terms
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              We accept payment through the following methods as displayed on
              our website: Cash, Cheque, and Demand Draft. All payments must be
              received before the commencement of production unless alternative
              arrangements have been agreed upon in writing. We are not
              responsible for any unauthorized charges or fraudulent
              transactions on your payment method.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              14. Limitation of Use for Certain Purposes
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              Our springs and products are manufactured for industrial,
              commercial, and household applications. Users must ensure that the
              products are suitable for their intended purpose and comply with
              all applicable safety regulations and standards. Noor Springs is
              not responsible for misuse or improper application of products.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              15. Advertising and Third-Party Content
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              Our Website displays advertisements served by Google AdSense and
              other third-party advertisers. We do not endorse or guarantee the
              accuracy of third-party advertisements. Clicking on any
              advertisement or third-party link is at your own risk. Noor
              Springs is not responsible for the content, accuracy, or practices
              of third-party advertisers.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              16. Indemnification
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Noor Springs and
              its officers, directors, employees, agents, and successors from
              any and all claims, damages, liabilities, costs, and expenses
              (including reasonable attorneys' fees) arising out of or related
              to your use of the Website or violation of these Terms.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              17. Termination
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              Noor Springs may terminate or suspend your access to the Website
              at any time, for any reason, without prior notice or liability.
              This includes violation of these Terms, suspected fraudulent
              activity, or any other conduct we deem inappropriate or harmful to
              other users or our business.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              18. Severability
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              If any provision of these Terms is found to be invalid or
              unenforceable, that provision shall be modified to the minimum
              extent necessary to make it valid, or if such modification is not
              possible, it shall be severed. The remainder of these Terms shall
              remain in full force and effect.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              19. Governing Law and Jurisdiction
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              These Terms of Use are governed by and construed in accordance
              with the laws of India, and you irrevocably submit to the
              exclusive jurisdiction of the courts of Visakhapatnam, Andhra
              Pradesh for the resolution of any disputes.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              20. Dispute Resolution
            </h2>
            <p className="text-steel-700 mb-4 leading-relaxed">
              Before initiating any legal proceedings, we encourage you to
              contact us to attempt to resolve any disputes through informal
              discussion. If we cannot resolve the matter within 30 days, you
              may pursue formal legal remedies.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-steel-900">
              21. Contact Information
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              If you have any questions about these Terms of Use or need to
              contact us, please reach out through the following channels:
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
              22. Acknowledgment
            </h2>
            <p className="text-steel-700 mb-6 leading-relaxed">
              By using the Website, you acknowledge that you have read these
              Terms of Use in their entirety, understand them, and agree to be
              bound by them. If you do not agree with any part of these Terms,
              please do not use the Website.
            </p>

            <div className="mt-12 pt-8 border-t border-steel-200">
              <p className="text-steel-600 text-sm">
                © 2025 Noor Springs. All rights reserved. These Terms of Use are
                effective as of December 2025. We reserve the right to modify
                these terms at any time. Please check this page periodically for
                updates.
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
