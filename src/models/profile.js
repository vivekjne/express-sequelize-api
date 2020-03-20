"use strict";
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      name: DataTypes.STRING,

      image: DataTypes.STRING,

      userId: DataTypes.INTEGER
    },
    {}
  );
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user"
    });
  };
  return Profile;
};
