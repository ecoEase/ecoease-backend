const { DataTypes } = require('sequelize');
const { sequelize } = require('./../database')
const uuid = require('uuid');
const Location = require('./location');
const Address = require('./address');
const User = require('./user');
const Mitra = require('./mitra');

const Orders = sequelize.define('order', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuid.v4
    },
    status: {
        type: DataTypes.ENUM('NOT_TAKEN', 'TAKEN', 'ON_PROCESS', 'FINISHED', 'CANCELED'),
        defaultValue: 'NOT_TAKEN',
        allowNull: false,
    },
    total_transaction: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mitra_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    location_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address_id: {
        type: DataTypes.STRING,
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

//todo: add relation to address, user, mitra table
Orders.belongsTo(Location, {
    foreignKey: 'location_id'
})
Orders.belongsTo(Address, {
    foreignKey: 'address_id'
})
Orders.belongsTo(User, {
    foreignKey: 'user_id'
})
Orders.belongsTo(Mitra, {
    foreignKey: 'mitra_id'
})
module.exports = Orders;