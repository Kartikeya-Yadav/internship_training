interface User{
    id: number;
    name: string;
    email: string;
}

//Partial
function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates};
}

const user = {id: 1, name: "Jhon", email: "jhon@gmail.com"};
const updates = {email: "change@gmail.com"}

const updated = updateUser(user, updates);
console.log(updated);

//Readonly
const userData: Readonly<User> = {
    id: 1,
    name : "Allision",
    email: "allision@gmail.com"
}

// userData.name = "jhon"; //Cannot assign to 'name' because it is a read-only property
console.log(userData);


//Pick
type UserPick = Pick<User, "name" | "email">;
const userPick: UserPick = {name: "Ethan", email: "ethan@gmail.com"}
console.log(userPick);

//Omit
type UserOmit = Omit<User, "email">;
const userOmit: UserOmit = {id: 11, name: "Hunt"};
console.log(userOmit);
