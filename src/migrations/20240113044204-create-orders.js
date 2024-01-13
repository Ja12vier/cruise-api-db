'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId:{ 
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: "users",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"

      },
      cartId:{
        
          type: Sequelize.INTEGER,
          allowNull: false,
          references:{
            model: "carts",
            key: "id"
          },
          onDelete: "SET NULL",
          onUpdate: "CASCADE"
      
       
      },
      totalPrice:{
        type: Sequelize.DECIMAL,
        allowNull: false,
  
  
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
    await queryInterface.dropTable('orders');
  }
};