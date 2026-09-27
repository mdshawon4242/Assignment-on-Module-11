const express = require("express");
const multer = require("multer");


const app = express()

app.use(express.json());

app.post("/uploads/", (req, res) => {

})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})