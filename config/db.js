const Sequelize = require('sequelize');
const sequelize = new Sequelize('GeneralAssembly2018', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

/* Sequelize authentication/connection testing */
sequelize
.authenticate()
.then(() => {
	console.log("Sequelize connection to MYSQL established");
})
.catch(err => {
	console.error("Sequelize connection to MYSQL failed:", err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;