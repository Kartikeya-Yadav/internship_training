import express, { Request, Response } from 'express';
import cors from 'cors';
import { AppDataSource } from './dbConfig';
import { User } from './user';
import  jwt  from 'jsonwebtoken';
import { varifyUserLogin } from './middleware';
const secretKey = "secretKey";

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.status(200).json('HI from Node Js. . . !')
});

app.post("/users/register", async (req: Request, res: Response) => {
    const user: User = req.body;
    console.log(user);

    const manager = AppDataSource.manager;
    await manager.save(User, user);
    console.log("Data stored in database Successfully !");

    res.status(200).json('User Registered Successfully !')
});

app.post("/users/login", async (req: Request, res: Response) => {
    try {
        const userData: Partial<User> = req.body;
        console.log(userData);

        const manager = AppDataSource.manager;

        const user = await manager.findOneBy(User, { email: userData.email });
        if (!user) {
            throw new Error("User Do not Found !!!");
        }
        else if (userData.password !== user?.password) {
            throw new Error('Invalid Password !!!');
        }

        const token = jwt.sign({ email: user.email, password: user.password }, secretKey, { expiresIn: "1h" });

        res.status(200).json(token);
    }catch(error){
        res.status(400).json({err: (error as Error).message})
    }
    
});

app.get("/users/profile", varifyUserLogin, async (req: Request, res: Response) => {
    const userEmail:string = req.body.email;
    const manager = AppDataSource.manager;

    const user = await manager.findOneBy(User, { email: userEmail });
    res.status(200).json({user : user});
});


AppDataSource.initialize()
    .then(() => {
        console.log("Database initialized !");

        app.listen(port, () => {
            console.log(`Server Running on http://loclahost:${port}`);

        })

    })
    .catch(err => {
        console.log("Database initialization Failed ! :", err);
    })

