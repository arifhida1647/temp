const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "arifhida1647@gmail.com",
    pass: "xqmsfpyh yrae mpfp", // Ganti dengan kata sandi Anda
  },
});

router.get("/", async (req, res, next) => {
  const { to, subject, text } = req.query; // Menangkap parameter dari query string

  try {
    const info = await transporter.sendMail({
      from: {
        name: "arif",
        address: "arifhida1647@gmail.com",
      },
      to: to,
      subject: subject,
      text: text,
    });

    console.log("Message sent: %s", info.messageId);
    res.send("Email sent successfully");
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).send("Failed to send email");
  }
});

module.exports = router;
