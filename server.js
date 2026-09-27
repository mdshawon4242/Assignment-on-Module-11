const express = require("express");
const multer = require("multer");
const app = express()

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    }
  })
})

app.use(express.json());

app.post("/upload", upload.single("file"),(req, res) => {
  res.status(200).send({ message: 'File uploaded successfully' });
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})