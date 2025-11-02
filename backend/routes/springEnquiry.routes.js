import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import {
  createSpringEnquiry,
  getAllSpringEnquiries,
  getSpringEnquiryById,
  updateSpringEnquiryStatus,
  deleteSpringEnquiry,
} from "../controllers/springEnquiry.controller.js";

const router = express.Router();

// Create uploads directory if it doesn't exist
const uploadDir = "uploads/spring-enquiries";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  // Allowed file types
  const allowedTypes = /pdf|jpg|jpeg|png|dwg|dxf/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file type. Only PDF, JPG, PNG, DWG, and DXF files are allowed."
      )
    );
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB per file
    files: 5, // Maximum 5 files
  },
  fileFilter: fileFilter,
});

// Public routes
router.post("/", upload.array("files", 5), createSpringEnquiry);

// Admin routes (you can add authentication middleware later)
router.get("/", getAllSpringEnquiries);
router.get("/:id", getSpringEnquiryById);
router.patch("/:id/status", updateSpringEnquiryStatus);
router.delete("/:id", deleteSpringEnquiry);

export default router;
