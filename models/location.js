const Sequelize = require('sequelize');
// const sequelize = require('../sequelize');
const sequelize = new Sequelize()
const uuid = require('uuid')

const Location = Sequelize.define('Location', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: uuid.v4
    },
    latitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    longitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Location;