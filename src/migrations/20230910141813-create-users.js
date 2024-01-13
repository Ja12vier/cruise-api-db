'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },userName:{
        type: Sequelize.STRING(200),
        allowNull: false
      },
      email:{
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true
      },
      password:{
        type: Sequelize.STRING(200),
        allowNull: false
      },
      role:{
        type: Sequelize.STRING(200),
        allowNull: false
      },
      status:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      
    });
     
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')

  
  }


  
  
};
