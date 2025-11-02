import Enquiry from "../models/Enquiry.model.js";
import { sendEnquiryNotification } from "../utils/emailService.js";

// Create new enquiry
export const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone, productType, message } = req.body;

    // Create enquiry
    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      productType,
      message,
    });

    // Send email notification (optional)
    try {
      await sendEnquiryNotification(enquiry);
    } catch (emailError) {
      console.error("Email notification failed:", emailError.message);
      // Continue even if email fails
    }

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully! We will contact you soon.",
      data: enquiry,
    });
  } catch (error) {
    console.error("Error creating enquiry:", error);
    res.status(400).json({
      success: false,
      message: "Failed to submit enquiry",
      error: error.message,
    });
  }
};

// Get all enquiries (for admin dashboard - future feature)
export const getAllEnquiries = async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    const query = status ? { status } : {};

    const enquiries = await Enquiry.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Enquiry.countDocuments(query);

    res.status(200).json({
      success: true,
      data: enquiries,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count,
    });
  } catch (error) {
    console.error("Error fetching enquiries:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries",
      error: error.message,
    });
  }
};

// Get single enquiry by ID
export const getEnquiryById = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error("Error fetching enquiry:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiry",
      error: error.message,
    });
  }
};

// Update enquiry status
export const updateEnquiryStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry status updated successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Error updating enquiry:", error);
    res.status(400).json({
      success: false,
      message: "Failed to update enquiry",
      error: error.message,
    });
  }
};

// Delete enquiry
export const deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);

    if (!enquiry) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting enquiry:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete enquiry",
      error: error.message,
    });
  }
};
