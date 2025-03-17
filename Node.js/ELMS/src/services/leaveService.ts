import { getAllLeaves } from "../repository/leaveRepository";



export const fetchAllLeaves = async () => {
    try {
        const result = await getAllLeaves();
        return result;
    } catch (error) {
        throw error;
    }
}
