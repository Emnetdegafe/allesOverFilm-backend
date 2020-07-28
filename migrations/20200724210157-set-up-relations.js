"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("films", "mediumId", {
      type: Sequelize.INTEGER,
      references: {
        model: "media",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("reviews", "mediumId", {
      type: Sequelize.INTEGER,
      references: {
        model: "media",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("reviews", "filmId", {
      type: Sequelize.INTEGER,
      references: {
        model: "films",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("films", "mediumId");
    await queryInterface.removeColumn("reviews", "mediumId");
    await queryInterface.removeColumn("reviews", "filmId");


  },
};
