const Login = require('../../models/login');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');

// Handler untuk login user
async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    // Cari user berdasarkan email
    const user = await Login.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'User tidak ditemukan' });
    }

    // Membandingkan password yang diinput dengan password user yang sudah di-hash
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Password salah' });
    }
    const secret = 'please change this secret later!'
    const token = jwt.sign({ user }, secret, { expiresIn: "7d" })
    const userFullData = await User.findOne({ where: { email } });
    // Jika login berhasil
    res.status(200).json({ message: 'Login sukses', data: userFullData, token: token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: `Error logging in ${error}` });
  }
}

module.exports = {
  loginUser,
};
