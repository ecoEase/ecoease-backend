const { DataTypes } = require('sequelize');
const { sequelize } = require('../database')
const uuid = require('uuid');
const User = require('./user');
const Mitra = require('./mitra');

const Chatroom = sequelize.define('chatroom', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuid.v4
    },
    mitra_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
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

Chatroom.belongsTo(User, {
    foreignKey: 'user_id'
})
Chatroom.belongsTo(Mitra, {
    foreignKey: 'mitra_id'
})

module.exports = Chatroom;