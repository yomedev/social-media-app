import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendVerificationCode = async (email: string, code: string) => {
  const options = {
    from: process.env.EMAIL,
    to: email,
    subject: "Verification code",
    text: code,
  };

  await transporter.sendMail(options, (err: Error) => {
    console.log(err);
  });
};

// export const options = {
//   from: process.env.EMAIL,
//   to: 'user@gmail.com',
//   subject: 'hello world',
//   html: emailHtml,
// };
