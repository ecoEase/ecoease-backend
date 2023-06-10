const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const { sequelize } = require('./../database');

const Login = sequelize.define('users', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      const hashedPassword = bcrypt.hashSync(value, 10);
      this.setDataValue('password', hashedPassword);
    },
  },
});

Login.prototype.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = Login;
