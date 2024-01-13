'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      categories.hasMany(models.products)
    }
  }
  categories.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
     type: DataTypes.STRING(200),
     allowNull:false
    },
    status:{
       type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
    
  }, {
    sequelize,
    modelName: 'categories',
  });
  return categories;
};