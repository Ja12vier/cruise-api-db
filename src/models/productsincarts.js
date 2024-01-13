'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productsinCarts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productsinCarts.belongsTo(models.carts)
      productsinCarts.belongsTo(models.products)
      productsinCarts.belongsTo(models.users)

    }
  }
  productsinCarts.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
     userId:{
      type: DataTypes.INTEGER,
      
    },
    cartId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
     productId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    quantity:{
      type: DataTypes.DECIMAL,
      allowNull:false
    },
    status:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    }
  }, {
    sequelize,
    modelName: 'productsinCarts',
  });
  return productsinCarts;
};