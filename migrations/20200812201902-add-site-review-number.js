"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "films",
      "reviewCode",
      { type: Sequelize.INTEGER},
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("films", "reviewCode", {});
  },
};