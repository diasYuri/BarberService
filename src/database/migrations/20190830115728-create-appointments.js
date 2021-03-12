"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("appointments", {
      id: {
        allowNULL: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNULL: false,
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNULL: false
      },
      provider_id: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNULL: false
      },
      created_at: {
        allowNULL: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNULL: false,
        type: Sequelize.DATE
      }
    });
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("appointments");
  }
};
