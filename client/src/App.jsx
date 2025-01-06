import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [url, setUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const handleGenerateQR = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/qr/generate",
        {
          url,
        }
      );
      setQrCodeUrl(response.data.s3Response.Location);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #141e30, #243b55)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', sans-serif",
        color: "#ffffff",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
        QR Code Generator
      </h1>
      <input
        type="text"
        placeholder="Enter URL like https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          padding: "0.8rem",
          fontSize: "1rem",
          borderRadius: "5px",
          border: "none",
          width: "300px",
          marginBottom: "1rem",
          outline: "none",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
      <button
        onClick={handleGenerateQR}
        style={{
          padding: "0.8rem 1.5rem",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#ffffff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Generate
      </button>
      {qrCodeUrl && (
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Your QR Code:
          </h2>
          <img
            src={qrCodeUrl}
            alt="QR Code"
            style={{
              border: "5px solid #ffffff",
              borderRadius: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default App;
