import SpringEnquiry from "../models/SpringEnquiry.model.js";
import { sendSpringEnquiryNotification } from "../utils/emailService.js";

// Create new spring enquiry
export const createSpringEnquiry = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      springType,
      outerDiameter,
      innerDiameter,
      numberOfRings,
      wireDiameter,
      length,
      numberOfPieces,
      material,
      finish,
      loadRequirement,
      additionalInfo,
    } = req.body;

    // Prepare attachments from uploaded files
    const attachments = req.files
      ? req.files.map((file) => ({
          filename: file.filename,
          originalName: file.originalname,
          mimetype: file.mimetype,
          size: file.size,
          path: file.path,
        }))
      : [];

    // Create enquiry
    const enquiry = await SpringEnquiry.create({
      name,
      email,
      phone,
      company,
      springType,
      outerDiameter,
      innerDiameter,
      numberOfRings,
      wireDiameter,
      length,
      numberOfPieces,
      material,
      finish,
      loadRequirement,
      additionalInfo,
      attachments,
    });

    // Send email notification (optional)
    try {
      await sendSpringEnquiryNotification(enquiry);
    } catch (emailError) {
      console.error("Email notification failed:", emailError.message);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message:
        "Spring enquiry submitted successfully! We will review your specifications and contact you soon with a detailed quotation.",
      data: enquiry,
    });
  } catch (error) {
    console.error("Error creating spring enquiry:", error);
    res.status(400).json({
      success: false,
      message: "Failed to submit spring enquiry",
      error: error.message,
    });
  }
};

// Get all spring enquiries (for admin dashboard)
export const getAllSpringEnquiries = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    const query = status ? { status } : {};

    const enquiries = await SpringEnquiry.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await SpringEnquiry.countDocuments(query);

    res.status(200).json({
      success: true,
      data: enquiries,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count,
    });
  } catch (error) {
    console.error("Error fetching spring enquiries:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch spring enquiries",
      error: error.message,
    });
  }
};

// Get single spring enquiry by ID
export const getSpringEnquiryById = async (req, res) => {
  try {
    const enquiry = await SpringEnquiry.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Spring enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error("Error fetching spring enquiry:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch spring enquiry",
      error: error.message,
    });
  }
};

// Update spring enquiry status
export const updateSpringEnquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const enquiry = await SpringEnquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Spring enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Spring enquiry status updated successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Error updating spring enquiry:", error);
    res.status(400).json({
      success: false,
      message: "Failed to update spring enquiry",
      error: error.message,
    });
  }
};

// Delete spring enquiry
export const deleteSpringEnquiry = async (req, res) => {
  try {
    const enquiry = await SpringEnquiry.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Spring enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Spring enquiry deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting spring enquiry:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete spring enquiry",
      error: error.message,
    });
  }
};
