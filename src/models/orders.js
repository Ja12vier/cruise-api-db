'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
       orders.belongsTo(models.carts)
       orders.belongsTo(models.users)
   
    }
  }
  orders.init({
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
    cartId:{
      
        type: DataTypes.INTEGER,
        allowNull: false,
     
    },
    totalPrice:{
      type: DataTypes.DECIMAL,
      allowNull: false,


    },
    status:{
      type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:true
    }
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};