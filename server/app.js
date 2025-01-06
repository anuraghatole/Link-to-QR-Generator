require("dotenv").config();
const express = require("express");
const cors = require("cors");
const qrRoutes = require("./routes/qrRoutes"); // Correct path to qrRoutes

const app = express();
app.use(express.json()); // For parsing JSON in the request body
app.use(cors()); // Enable CORS for cross-origin requests

// API Routes
app.use("/api/qr", qrRoutes); // Correct the route prefix to match `/api/qr`

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
console.log("AWS Bucket Name:", process.env.AWS_BUCKET_NAME);
console.log("AWS Access Key ID:", process.env.AWS_ACCESS_KEY_ID);
console.log("AWS Secret Access Key:", process.env.AWS_SECRET_ACCESS_KEY);
