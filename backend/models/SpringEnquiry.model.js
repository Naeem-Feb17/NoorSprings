import mongoose from "mongoose";

const springEnquirySchema = new mongoose.Schema(
  {
    // Personal Information
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^[0-9]{10}$/, "Please provide a valid 10-digit phone number"],
    },
    company: {
      type: String,
      trim: true,
      maxlength: [200, "Company name cannot exceed 200 characters"],
    },

    // Spring Specifications
    springType: {
      type: String,
      required: [true, "Spring type is required"],
      enum: [
        "Compression Spring",
        "Tension Spring",
        "Torsion Spring",
        "Flat Spring",
        "Flat Wire Spring",
        "Flat Coil Spring",
        "Die Spring",
        "Leaf Spring",
        "Custom Spring",
      ],
    },
    outerDiameter: {
      type: Number,
      required: [true, "Outer diameter is required"],
      min: [0.01, "Outer diameter must be greater than 0"],
    },
    innerDiameter: {
      type: Number,
      required: [true, "Inner diameter is required"],
      min: [0.01, "Inner diameter must be greater than 0"],
    },
    numberOfRings: {
      type: Number,
      required: [true, "Number of rings/coils is required"],
      min: [0.5, "Number of rings must be at least 0.5"],
    },
    wireDiameter: {
      type: Number,
      required: [true, "Wire diameter is required"],
      min: [0.01, "Wire diameter must be greater than 0"],
    },
    length: {
      type: Number,
      required: [true, "Length is required"],
      min: [0.01, "Length must be greater than 0"],
    },
    numberOfPieces: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"],
    },
    material: {
      type: String,
      required: [true, "Material is required"],
    },
    finish: {
      type: String,
      required: [true, "Surface finish is required"],
    },
    loadRequirement: {
      type: String,
      trim: true,
      maxlength: [200, "Load requirement cannot exceed 200 characters"],
    },

    // Additional Information
    additionalInfo: {
      type: String,
      trim: true,
      maxlength: [2000, "Additional information cannot exceed 2000 characters"],
    },

    // File attachments (storing file paths/URLs)
    attachments: [
      {
        filename: String,
        originalName: String,
        mimetype: String,
        size: Number,
        path: String,
      },
    ],

    // Status tracking
    status: {
      type: String,
      enum: ["pending", "reviewed", "quoted", "confirmed", "completed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const SpringEnquiry = mongoose.model("SpringEnquiry", springEnquirySchema);

export default SpringEnquiry;
