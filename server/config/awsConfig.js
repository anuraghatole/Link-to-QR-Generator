const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-south-1", // Region for your S3 bucket
});

const bucketName = process.env.AWS_BUCKET_NAME;

const uploadToS3 = async (base64Image) => {
  const buffer = Buffer.from(
    base64Image.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );
  const fileName = `${uuidv4()}.png`;

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: buffer,
    ContentEncoding: "base64",
    ContentType: "image/png",
  };

  return s3.upload(params).promise();
};

module.exports = { uploadToS3 };
