const bcrypt = require('bcrypt');
const User = require('../../models/user');

async function registerUser(req, res) {
  const { firstName, lastName, email, password, address, url_photo_profile, phone_number } = req.body;

  if (!firstName || !lastName || !email || !password || !address || !phone_number) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const existingUserPhone = await User.findOne({ where: { phone_number } });
    if (existingUserPhone) {
      return res.status(409).json({ message: 'Phone number already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
      url_photo_profile,
      phone_number,
    });

    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
}

module.exports = {
  registerUser,
};
