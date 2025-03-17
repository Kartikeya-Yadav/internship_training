import { ConnectionPool } from "mssql";
import { poolPromise } from "../config/dbConfig"


export const getAllLeaves = async () => {
    try {
        const pool: unknown = await poolPromise;
        const result = await (pool as ConnectionPool).request().query("select * from Leave_ELMS");
        return result.recordset;
    } catch (error) {
        throw error;
    }
}

