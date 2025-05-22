const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sendMail = require("./controllers/mainController");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", sendMail);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
