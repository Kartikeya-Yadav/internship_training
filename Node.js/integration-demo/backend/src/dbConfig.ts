import { DataSource } from "typeorm";
import { User } from "./user";

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com",
    port: 1982,
    username: "j2",
    password: "123456",
    database: "JIBE_Main_Training",
    synchronize: true,
    logging: false,
    entities: [User],
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
});


