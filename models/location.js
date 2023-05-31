const { DataTypes } = require('sequelize');
const { sequelize } = require('./../database')
const uuid = require('uuid')

const Location = sequelize.define('location', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuid.v4
    },
    latitude: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    longitude: {
        type: DataTypes.DOUBLE,
        allowNull: false
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

module.exports = Location;