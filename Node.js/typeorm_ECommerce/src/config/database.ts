import { DataSource } from "typeorm";
import "reflect-metadata"

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com",
    port: 1982,
    username: "j2",
    password: "123456",
    database: "JIBE_Main_Training",
    synchronize: true,
    logging: false,
    entities: ["dist/entities/*.js"],
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
});

// AppDataSource.initialize()
//     .then(() => {
//         console.log("Database initialized !");

//     })
//     .catch(err => {
//         console.log("Database initialization Failed ! :", err);
//     })


