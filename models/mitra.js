const { DataTypes } = require('sequelize');
const { sequelize } = require('./../database');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const Mitra = sequelize.define('mitras', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: uuid.v4,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_photo_profile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fcm_token: {
    type: DataTypes.STRING,
    allowNull: null,
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
  },
});

// Hook function to hash the password before saving
Mitra.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});

module.exports = Mitra;
