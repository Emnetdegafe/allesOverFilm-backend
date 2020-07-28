'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      review.belongsTo(models.medium)
      review.belongsTo(models.film)
    }
  };
  review.init({
    summary: {type:DataTypes.TEXT, allowNull: false},
    conclusion: {type:DataTypes.TEXT, allowNull: false},
    rating: {type:DataTypes.INTEGER, allowNull: false}
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};