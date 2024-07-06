const nodemailer = require('nodemailer');

const sendReferralEmail = async (referrerName, refereeEmail, refereeName, courseName) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:true,
    port:465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: refereeEmail,
    subject: 'Course Referral',
    text: `Hi ${refereeName},\n\n${referrerName} has referred you to the course: ${courseName}.\n\nBest Regards,\nYour Company`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendReferralEmail };
