import nodemailer from "nodemailer";

// Create email transporter
const createTransporter = () => {
  // Check if email configuration is provided
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER) {
    console.warn(
      "Email configuration not found. Email notifications will be skipped."
    );
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send enquiry notification email
export const sendEnquiryNotification = async (enquiry) => {
  const transporter = createTransporter();

  if (!transporter) {
    console.log("Email notification skipped - no configuration");
    return;
  }

  const mailOptions = {
    from: `"Noor Springs Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || "noorsprings@example.com",
    subject: `New Enquiry from ${enquiry.name} - ${enquiry.productType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Customer Enquiry
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${enquiry.name}</p>
          <p><strong>Email:</strong> ${enquiry.email}</p>
          <p><strong>Phone:</strong> ${enquiry.phone}</p>
          <p><strong>Product Type:</strong> ${enquiry.productType}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: white; padding: 10px; border-radius: 3px;">
            ${enquiry.message}
          </p>
        </div>
        
        <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
          This enquiry was submitted on ${new Date(
            enquiry.createdAt
          ).toLocaleString()}
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Enquiry notification email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

// Send spring enquiry notification email
export const sendSpringEnquiryNotification = async (enquiry) => {
  const transporter = createTransporter();

  if (!transporter) {
    console.log("Email notification skipped - no configuration");
    return;
  }

  const mailOptions = {
    from: `"Noor Springs Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || "noorsprings@example.com",
    subject: `Spring Specification Enquiry - ${enquiry.springType} - ${enquiry.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Spring Specification Enquiry
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Customer Details</h3>
          <p><strong>Name:</strong> ${enquiry.name}</p>
          <p><strong>Email:</strong> ${enquiry.email}</p>
          <p><strong>Phone:</strong> ${enquiry.phone}</p>
          ${
            enquiry.company
              ? `<p><strong>Company:</strong> ${enquiry.company}</p>`
              : ""
          }
        </div>

        <div style="background-color: #eff6ff; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Spring Specifications</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Spring Type:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                enquiry.springType
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Outer Diameter (OD):</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                enquiry.outerDiameter
              } mm</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Inner Diameter (ID):</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                enquiry.innerDiameter
              } mm</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Number of Rings/Coils:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                enquiry.numberOfRings
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Wire Diameter:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                enquiry.wireDiameter
              } mm</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Free Length:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                enquiry.length
              } mm</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Quantity Required:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                enquiry.numberOfPieces
              } pieces</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Material:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                enquiry.material
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Surface Finish:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${
                enquiry.finish
              }</td>
            </tr>
            ${
              enquiry.loadRequirement
                ? `<tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Load Requirement:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${enquiry.loadRequirement}</td>
            </tr>`
                : ""
            }
          </table>
        </div>

        ${
          enquiry.additionalInfo
            ? `<div style="background-color: #f3f4f6; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Additional Information</h3>
          <p style="background-color: white; padding: 10px; border-radius: 3px;">
            ${enquiry.additionalInfo}
          </p>
        </div>`
            : ""
        }

        ${
          enquiry.attachments && enquiry.attachments.length > 0
            ? `<div style="background-color: #fef3c7; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #92400e; margin-top: 0;">Attachments (${
            enquiry.attachments.length
          })</h3>
          <ul style="margin: 0; padding-left: 20px;">
            ${enquiry.attachments
              .map(
                (file) =>
                  `<li>${file.originalName} (${(file.size / 1024).toFixed(
                    1
                  )} KB)</li>`
              )
              .join("")}
          </ul>
          <p style="font-size: 12px; color: #78350f; margin-top: 10px;">
            Files are stored in the server's uploads directory.
          </p>
        </div>`
            : ""
        }
        
        <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
          This enquiry was submitted on ${new Date(
            enquiry.createdAt
          ).toLocaleString()}
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Spring enquiry notification email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
