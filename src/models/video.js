"use strict";
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    "Video",
    {
      title: DataTypes.STRING,

      description: DataTypes.STRING,

      categoryId: DataTypes.INTEGER,

      videoUrl: DataTypes.STRING,

      image: DataTypes.STRING
    },
    {}
  );
  Video.associate = function(models) {
    // associations can be defined here
    Video.belongsTo(models.Category, {
      foreignKey: "categoryId",
      as: "category"
    });
  };
  return Video;
};
