import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASS, {
    dialect: "mysql",
    host: "localhost" // ip server
});

export default db;