import { Model, DataTypes } from "sequelize/types";

class Actor extends Model {}
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
