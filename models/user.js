const sequelize = require('../services/db').sequelize;
var Sequelize = require('sequelize');
const User = sequelize.define('user',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    }
  },
  {
    tableName:'user',
    timestamps: false
  }
);

sequelize.models.User;
exports.User = User;