const Sequelize = require('sequelize');

const sequelize = new Sequelize('eco', 'root', 'AXasrqAAq', {
  host: '34.101.168.239',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });

module.exports = {
  sequelize,
};
