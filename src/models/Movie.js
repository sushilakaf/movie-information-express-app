import sequelize from "sequelize";
const { DataTypes, Model } = sequelize;
import { sequelize as iSequelize } from "../config/sequelize.js";
export class Movie extends Model {}
Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    timeDuration: DataTypes.TIME,
  },
  { sequelize: iSequelize }
);
