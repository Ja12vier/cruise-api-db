'use strict';
const bcrypt=require("bcrypt")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.orders)
      users.hasMany(models.products)
      users.hasOne(models.carts)
      users.hasOne(models.purchases)
      users.hasOne(models.productsinCarts)
    }
  }
  users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userName:{
      type: DataTypes.STRING(200),
      allowNull: false
    },
    email:{
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: true
    },
    password:{
      type: DataTypes.STRING(200),
      allowNull: false
    },
    role:{
      type: DataTypes.STRING(200),
      allowNull: false
    },
    status:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:true
    }


  }, {
    sequelize,
    modelName: 'users',
  
  
  });

 users.beforeCreate(async(users)=>{
  const encriptarContraseña= await bcrypt.hash(users.password, 10)
  users.password=encriptarContraseña
 })

 users.prototype.toJSON=function(){
  const values=Object.assign({}, this.get())
  delete values.password
   return values
 }
return users


};


