const qrcode = require("qrcode");
const { uploadToS3 } = require("../config/awsConfig");

// POST /api/qr/generate
const generateQRCode = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ message: "URL is required" });

    // Generate QR code
    const qrCodeDataURL = await qrcode.toDataURL(url);

    // Upload QR code to S3
    const s3Response = await uploadToS3(qrCodeDataURL);
    res
      .status(200)
      .json({ message: "QR code generated successfully", s3Response });
  } catch (error) {
    console.error("Error generating QR code:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { generateQRCode };
