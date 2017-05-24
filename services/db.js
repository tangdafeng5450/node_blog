
var Sequelize = require('sequelize');
const sequelize = new Sequelize('myblog', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
  pool: {
    max: 10,
    min: 2,
    idle: 10000
  },

  // SQLite only
  //storage: 'path/to/database.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

exports.sequelize = sequelize;