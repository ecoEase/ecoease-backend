const bcrypt = require('bcrypt');
const Mitra = require('../../models/mitra');

async function registerMitra(req, res) {
  const { first_name, last_name, email, password, address, url_photo_profile } = req.body;

  if (!first_name || !last_name || !email || !password || !address) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await Mitra.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Mitra.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      address,
      url_photo_profile,
    });

    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
}

module.exports = {
  registerMitra,
};
