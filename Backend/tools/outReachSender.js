const nodemailer = require("nodemailer");
require("dotenv").config();

async function outreachSender(email, message) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // verify connection
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"FireReach AI" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Helping Secure Your Growing Engineering Team",
      text: message,
    });

    console.log("Email sent:", info.messageId);

    return "Email Sent Successfully";
  } catch (error) {
    console.error("Email Sending Error:", error);

    return "Email Sending Failed";
  }
}

module.exports = outreachSender;
