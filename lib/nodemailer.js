"use server"


const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "devanotira@gmail.com",
    pass: process.env.NEXT_APP_PASSWORD,
  },
});

export default transporter