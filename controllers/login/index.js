const Login = require('../../models/login');

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

    // Jika login berhasil
    res.status(200).json({ message: 'Login sukses' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in' });
  }
}

module.exports = {
  loginUser,
};