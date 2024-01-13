'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      carts.belongsTo(models.users)
      carts.hasOne(models.orders)
      carts.hasMany(models.productsinCarts)
      carts.hasMany(models.purchases)

    }
  }
  carts.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true
      
    }
  }, {
    sequelize,
    modelName: 'carts',
  });
  return carts;
};