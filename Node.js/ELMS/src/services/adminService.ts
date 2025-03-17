import { adminRepository } from "../repository/adminRepository";

class AdminService {
    async getLeaveReport() {
        try {
            const result = await adminRepository.getLeaveReport();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export const adminService = new AdminService();