'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productimgs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      productimgs.belongsToMany(models.products,{through: "productimgsProducts"})
    }
  }
  productimgs.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    publicId: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'productimgs',
  });
  return productimgs;
};