import { Model, DataTypes } from "sequelize/types";
import { Movie } from "./Movie.js";

export class Actor extends Model {}
Actor.init({
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  },
  fullName: DataTypes.STRING,
  gender: DataTypes.ENUM("male", "female"),
});
Actor.belongsToMany(Movie, {
  foreignKey: {
    name: "movieId",
    allowNull: false,
  },
});
