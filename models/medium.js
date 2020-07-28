'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medium extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      medium.hasOne(models.review)
    }
  };
  medium.init({
    name: { type: DataTypes.STRING, allowNull: false},

  }, {
    sequelize,
    modelName: 'medium',
  });
  return medium;
};