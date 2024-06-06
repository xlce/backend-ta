import { Sequelize } from "sequelize";

const db = new Sequelize('pb','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;