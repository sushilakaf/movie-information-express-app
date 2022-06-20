import { Model, DataTypes } from "sequelize/types";
export class Movie extends Model {}
Movie.init({
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  releaseDate: DataTypes.DATE,
  timeDuration: DataTypes.TIME,


});
