"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "media",
      [
        {
          name: "streaming",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "DVD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cinema",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UHD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "blu ray",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("media", null, {});
  },
};
