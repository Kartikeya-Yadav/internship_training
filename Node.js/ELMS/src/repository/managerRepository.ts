import { ConnectionPool } from "mssql";
import { poolPromise } from "../config/dbConfig";

class ManagerRepository{

    async getAllPendingLeaves(status: string){
        try{
            const pool = await poolPromise;
            const result = await (pool as ConnectionPool).request()
                .input("status", status)
                .query("select * from Leave_ELMS where status = @status");
            return result.recordset;
        } catch (error) {
            throw error;
        }
    }

    async approveLeave(leaveId: number){
        try{
            const pool = await poolPromise;
            await (pool as ConnectionPool).request()
                .input("id", leaveId)
                .query("update Leave_ELMS set status = 'Approved' where id = @id");
        } catch (error) {
            throw error;
        }
    }

    async rejectLeave(leaveId: number){
        try{
            const pool = await poolPromise;
            await (pool as ConnectionPool).request()
                .input("id", leaveId)
                .query("update Leave_ELMS set status = 'Rejected' where id = @id");
        } catch (error) {
            throw error;
        }
    }

    async cheakLeaveStatus(leaveId: number){
        try{
            const pool = await poolPromise;
            const leaveStatus = await (pool as ConnectionPool).request()
                .input("id", leaveId)
                .query("select status from Leave_ELMS where id = @id");
            console.log(leaveStatus.recordset[0].status);
            return leaveStatus.recordset[0].status;
        } catch (error) {
            throw error;
        }
    }



}

export const managerRepository = new ManagerRepository();
