import { AppDataSource } from "./database";
import { Student } from "./student";

AppDataSource.initialize()
    .then( async (AppDataSource)=>{
        const studentRpository = AppDataSource.getRepository(Student);

        const student01: Student = {rollNo: 1, name: "Shri Nashte", class: "BTech Final Year"}
        await studentRpository.save(student01);
        const students = await studentRpository.find();
        console.log(students);

        
        
    })
    .catch(err =>{
        console.log("DataBase Connection Failed! :", err);
        
    })
