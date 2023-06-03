const { DataTypes } = require('sequelize');
const { sequelize } = require('../database')
const uuid = require('uuid');
const Garbages = require('./garbage');
const Orders = require('./orders');

const DetailTransaction = sequelize.define('detailtransaction', {
  garbage_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  order_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true,
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
//relasi untuk ke tabel garbage
Garbages.belongsToMany(Orders, {
  through: 'detailtransaction',
  foreignKey: 'garbage_id'
})
//relasi untuk ke tabel order
Orders.belongsToMany(Garbages, {
  through: 'detailtransaction',
  foreignKey: 'order_id'
})
module.exports = DetailTransaction;
