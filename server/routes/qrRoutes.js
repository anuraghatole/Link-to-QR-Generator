const express = require("express");
const router = express.Router();
const { generateQRCode } = require("../controllers/qrController"); // Correct path to qrController

// POST /api/qr/generate
router.post("/generate", generateQRCode);

module.exports = router;
