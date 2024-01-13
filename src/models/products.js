'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {  
      // define association here
      products.belongsTo(models.categories, {
      foreignKey: "categoryId"
      })
      products.belongsTo(models.users)
      products.hasOne(models.productsinCarts)
      products.hasOne(models.purchases)
      products.belongsToMany(models.productimgs, {through: "productimgsProducts"})

     
    }
  }
  products.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title:{
      type:DataTypes.STRING(200),
      allowNull:false
    },
    descryption:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    price:{
      type: DataTypes.DECIMAL,
      allowNull:false
    },
    stay:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    categoryId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    status:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    }
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};