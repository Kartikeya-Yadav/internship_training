import { ConnectionPool } from "mssql";
import { poolPromise } from "../config/dbConfig"


class EmployeeRepository {

    async getLeaveHistory(id: number) {
        try {
            const pool: unknown = await poolPromise;
            const result = await (pool as ConnectionPool).request()
                .input("id", id)
                .query("select * from Leave_ELMS where emp_id = @id");
            return result.recordset;
        } catch (error) {
            throw error;
        }
    }

    async applyLeave(leave: any){
        try {
            const pool: unknown = await poolPromise;
            await (pool as ConnectionPool).request()
                .input("id", leave.id)
                .input("emp_id", leave.emp_id)
                .input("start_date", leave.start_date)
                .input("end_date", leave.end_date)
                .input("leave_type", leave.leave_type)
                .input("status", leave.status)
                .input("reason", leave.reason)
                .query("insert into Leave_ELMS (id, emp_id, start_date, end_date, leave_type, status, reason) values (@id, @emp_id, @start_date, @end_date, @leave_type, @status, @reason)")
        } catch (error) {
            throw error;
        }
    }

}

export const employeeRepository = new EmployeeRepository();
