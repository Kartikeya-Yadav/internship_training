import { employeeRepository } from "../repository/employeeRepository";


class EmployeeService {

    async getLeaveHistory(id: number) {
        try {
            const leaves = await employeeRepository.getLeaveHistory(id);
            return leaves
        } catch (error) {
            throw error;
        }
    }

    async applyLeave(leave: any) {
        try {
            await employeeRepository.applyLeave(leave);
            console.log("Leave applied");
        } catch (error) {
            throw error;
        }
    }

}

export const employeeService = new EmployeeService();