'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productsinCarts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, cartId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: "carts",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
       productId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: "products",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      
      },
      quantity:{
        type: Sequelize.DECIMAL,
        allowNull:false
      },
      status:{
        type: Sequelize.BOOLEAN,
        allowNull:false,
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
    await queryInterface.dropTable('productsinCarts');
  }
};