import sequelize from "sequelize";
const { DataTypes, Model } = sequelize;
import { Movie } from "./Movie.js";
import { sequelize as iSequelize } from "../config/sequelize.js";

export class Actor extends Model {}
Actor.init(
  {
    id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    fullName: DataTypes.STRING,
    gender: DataTypes.ENUM("male", "female"),
  },
  {
    sequelize: iSequelize,
  }
);
Actor.belongsToMany(Movie, {
  foreignKey: {
    name: "movieId",
    allowNull: false,
  },
  through: "ActorMovie",
});
