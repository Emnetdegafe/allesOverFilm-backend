"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "films",
      "genre",
      { type: Sequelize.ARRAY(Sequelize.STRING) },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("films", "genre", {});
  },
};
