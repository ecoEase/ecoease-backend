const Sequelize = require('sequelize');
const sequelize = require('../sequelize');
const uuid = require('uuid')

const Orders = sequelize.define('Orders', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: uuid.v4
    },
    status: {
        type: Sequelize.ENUM('NOT_TAKEN', 'ON_PROGRESS', 'TAKEN', 'CANCELED'),
        defaultValue: 'NOT_TAKEN',
        allowNull: false,
    },
    total_transaction: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mitra_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mitra_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    location_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    created: {
        type: Sequelize.DATE
    },
});

module.exports = Orders;