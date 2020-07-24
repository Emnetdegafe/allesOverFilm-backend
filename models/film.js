'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  film.init({
    title: {type: DataTypes.STRING, allowNull: false}, 
    image: {type: DataTypes.STRING, allowNull: false},
    director: {type: DataTypes.STRING, allowNull: false},
    actors: DataTypes.STRING,
    year: {type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'film',
  });
  return film;
};