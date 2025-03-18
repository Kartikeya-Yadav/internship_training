
import { DataSource } from "typeorm";
import { Feedback } from "../entities/feedback";

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com",
    port: 1982,
    username: "j2",
    password: "123456",
    database: "JIBE_Main_Training",
    synchronize: true,
    logging: true,
    entities: [Feedback],
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
    // subscribers: [],
    // migrations: [],
})

AppDataSource.initialize()
    .then((AppDataSource) => {
        console.log("Database Initialized !");
        return AppDataSource;
    })
    .catch((err)=> {
        console.log("DataBase Connection Failed! :", err);
    })