'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, title:{
        type:Sequelize.STRING(200),
        allowNull:false
      },
      descryption:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      quantity:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      price:{
        type: Sequelize.DECIMAL,
        allowNull:false
      },
      categoryId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: "categories",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: "users",
          key: "id"
        },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
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
    await queryInterface.dropTable('products');
  }
};