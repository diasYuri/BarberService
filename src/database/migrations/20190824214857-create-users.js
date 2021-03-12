"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      avatar: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password_hash: {
        allowNull: false,
        type: DataTypes.STRING
      },
      provider: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("Users");
  }
};
