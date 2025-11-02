import express from "express";
import { body } from "express-validator";
import {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiryStatus,
  deleteEnquiry,
} from "../controllers/enquiry.controller.js";
import { validateRequest } from "../middleware/validation.middleware.js";

const router = express.Router();

// Validation rules
const enquiryValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 100 })
    .withMessage("Name cannot exceed 100 characters"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .matches(/^[0-9]{10}$/)
    .withMessage("Please provide a valid 10-digit phone number"),
  body("productType")
    .trim()
    .notEmpty()
    .withMessage("Product type is required")
    .isIn([
      "Compression Spring",
      "Tension Spring",
      "Torsion Spring",
      "Flat Spring",
      "Flat Wire Spring",
      "Flat Coil Spring",
      "Die Spring",
      "Leaf Spring",
      "Other",
    ])
    .withMessage("Invalid product type"),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ max: 1000 })
    .withMessage("Message cannot exceed 1000 characters"),
];

// Public routes
router.post("/", enquiryValidation, validateRequest, createEnquiry);

// Admin routes (you can add authentication middleware later)
router.get("/", getAllEnquiries);
router.get("/:id", getEnquiryById);
router.patch("/:id/status", updateEnquiryStatus);
router.delete("/:id", deleteEnquiry);

export default router;
