"use strict";

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    mediaType: DataTypes.STRING,
    image: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {});

  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Video, {
      foreignKey: "categoryId",
      as: "videos"
    }); // Category.hasMany(models.Song, { as: "category" });
  };

  return Category;
};