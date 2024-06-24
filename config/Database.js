import { Sequelize } from "sequelize";

const db = new Sequelize('ta','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;