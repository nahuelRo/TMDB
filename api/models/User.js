import { DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "../config/db.js";

class User extends Model {
  generateHash = async (password, salt) => {
    return bcrypt.hash(password, salt);
  };

  validatePassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, this.salt);
    return this.password === hashedPassword;
  };
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "user" }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(8);
  user.salt = salt;
  user.password = await user.generateHash(user.password, salt);
});

export default User;
