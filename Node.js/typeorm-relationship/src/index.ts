import "reflect-metadata"
import { AppDataSource } from "./config/dbConfig"
import { Profile } from "./entities/profile";
import { Student } from "./entities/student";


AppDataSource.initialize()
    .then( async () => {
        console.log("Database initialized !");

        const studentRepository = AppDataSource.getRepository(Student);

        const student01: Student = {id:1, name: "Jayesh Gajarkar", courses: []};
        await studentRepository.save(student01);

        const savedStudent = await studentRepository.find();
        console.log(savedStudent);

        

    })
    .catch(err => {
        console.log("Database initialization Failed ! :", err);
    });




