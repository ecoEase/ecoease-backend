const { DataTypes } = require('sequelize');
const { sequelize } = require('./../database');
const uuid = require('uuid');

const Garbages = sequelize.define('garbages', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: uuid.v4,
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  url_photo: {
    type: DataTypes.TEXT,
    allowNull: false,
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

module.exports = Garbages;
