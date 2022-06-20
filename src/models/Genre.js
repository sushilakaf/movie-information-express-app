import { Model, DataTypes } from "sequelize/types";

class Genre extends Model{}
Genre.init({
    id: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false,
    }, 
    type: DataTypes.STRING,
})