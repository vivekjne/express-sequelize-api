"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,

      lastName: DataTypes.STRING,

      userName: DataTypes.STRING,

      email: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Profile, { as: "profile" });
  };
  return User;
};
