'use strict';
const {hashPassword} = require('../helper/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Task, {foreignKey: "UserId"} )
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Must be Email format ex. blabla@mail.com'
        },
      },
      unique: {
        args: true,
        msg: 'Email address already in use!'
      }
    },
      
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Password Must be Filled!'
      },
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username must be filled'
        },
      },
      unique: {
        args: true,
        msg: 'Username address already in use!'
      }
    }
  },{
    hooks:{
      beforeCreate(user){
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};