const { default: transporter } = require("@/lib/nodemailer");

function message(messagetext,title) {
  const mailOptions = {
    from: "devanotira@gmail.com",
    to: "devanoken15@gmail.com",
    subject: title,
    text: messagetext,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}

export default message;
