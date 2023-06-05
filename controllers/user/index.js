const bcrypt = require('bcrypt');
const User = require('../../models/user');
const ImgUpload = require('../../imgupload/imgUpload');

async function registerUser(req, res) {
  const { firstName, lastName, email, password, phone_number } = req.body;

  if (!firstName || !lastName || !email || !password || !phone_number) {
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

    let url_photo_profile = null;
    if (req.file && req.file.cloudStoragePublicUrl) {
      url_photo_profile = req.file.cloudStoragePublicUrl;
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: password,
      url_photo_profile,
      phone_number,
    });

    res.json({ message: 'Registration successful', data: user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
}

module.exports = {
  registerUser,
};
