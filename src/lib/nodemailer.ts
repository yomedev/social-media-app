import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

type emailOptionsParams = {
  email: string;
  subject: string;
  text?: string;
  html?: string;
};

export const getEmailOPtions = ({
  email,
  subject,
  text,
  html,
}: emailOptionsParams) => {
  return {
    from: process.env.EMAIL,
    to: email,
    subject,
    text,
    html,
  };
};
