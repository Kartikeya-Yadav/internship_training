import { managerRepository } from "../repository/managerRepository";

class ManagerService {

    async getAllPendingLeaves() {
        try {
            const status: string = "Pending";
            const pendingLeaves = await managerRepository.getAllPendingLeaves(status);
            return pendingLeaves;
        } catch (error) {
            throw error;
        }
    }

    async approveLeave(leaveId: number){
            try{
                const leaveStatus = await managerRepository.cheakLeaveStatus(leaveId);
                if(leaveStatus =="Pending"){
                    await managerRepository.approveLeave(leaveId);
                    return "Leave Approved. ";
                } else{
                    return `This leave is already ${leaveStatus}. Cannot make further Change.`;
                }
            } catch (error) {
                throw error;
            }
        }
    
        async rejectLeave(leaveId: number){
            try{
                const leaveStatus = await managerRepository.cheakLeaveStatus(leaveId);
                if(leaveStatus =="Pending"){
                    await managerRepository.rejectLeave(leaveId);
                    return "Leave Rejected. ";
                } else{
                    return `This leave is already ${leaveStatus}. Cannot make further Change.`;
                }
            } catch (error) {
                throw error;
            }
        }
}

export const managerService = new ManagerService();