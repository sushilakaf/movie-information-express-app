import { Model, DataTypes } from "sequelize/types";
import { Movie } from "./Movie";
import { sequelize } from "../config/sequelize.js";

export class Genre extends Model {}
Genre.init({
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    primaryKey: true,
    allowNull: false,
  },
  type: DataTypes.STRING,
}, 
{sequelize});
Genre.belongsToMany(Movie, {
  foreignKey: {
    name: "movieId",
    allowNull: false,
  },
  through: "GenreMovie"
});
