const prisma = require('../prisma');
const { sendReferralEmail } = require('../services/emailService');

const createReferral = async (req, res) => {
  const { referrerName, referrerEmail, refereeName, refereeEmail, courseName } = req.body;

  if (!referrerName || !referrerEmail || !refereeName || !refereeEmail || !courseName) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
        courseName,
      },
    });

    await sendReferralEmail(referrerName, refereeEmail, refereeName, courseName);

    res.status(201).json(referral);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { createReferral };
