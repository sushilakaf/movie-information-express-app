import { Model, DataTypes } from "sequelize/types";
import { Movie } from "./Movie";

export class Genre extends Model {}
Genre.init({
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    primaryKey: true,
    allowNull: false,
  },
  type: DataTypes.STRING,
});
Genre.belongsTo(Movie, {
  foreignKey: {
    name: "movieId",
    allowNull: false,
  },
});
