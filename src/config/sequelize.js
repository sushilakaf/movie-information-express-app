import { Sequelize } from "sequelize";
import "dotenv/config";

// db configuration
export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
});

// db connection check
async function init() {
  await sequelize.sync({ force: process.env.NODE_ENV === "development" });
  await sequelize
    .authenticate()
    .then(() => console.log(" ==== sequelize connected ==="))
    .catch((err) => console.log("ERROR", err));
}
init();
