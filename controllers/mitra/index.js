const bcrypt = require('bcrypt');
const Mitra = require('../../models/mitra');
const ImgUpload = require('../../imgupload/imgUpload');

async function registerMitra(req, res) {
  const { first_name, last_name, email, password, phone_number } = req.body;

  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await Mitra.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let url_photo_profile = null;
    if (req.file && req.file.cloudStoragePublicUrl) {
      url_photo_profile = req.file.cloudStoragePublicUrl;
    }

    const data = await Mitra.create({
      first_name,
      last_name,
      email,
      phone_number,
      password: hashedPassword,
      url_photo_profile,
    });

    res.json({ message: 'Registration successful', data: data });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: `Error registering user ${error.message}` });
  }
}

async function getMitras(req, res) {
  try {
    const data = await Mitra.findAll()
    res.status(200).json({ message: "Success retrieve all mitra data", data: data })
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: `Error registering user ${error.message}` });
  }
}

module.exports = {
  registerMitra,
  getMitras
};
