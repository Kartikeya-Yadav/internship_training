interface User {
    username: string;
    email: string;
    password: string;
}

// Interface Error
interface Error01 {
    isValid: boolean;
    usernameError: string;
    emailError: string;
    passError: string;
}

function userValidation(user: User): Error01 {
    const error: Error01 = {
        isValid: true,
        usernameError: "",
        emailError: "",
        passError: ""
    };

    // Validate username
    if (!user.username || user.username.length <= 3) {
        error.isValid = false;
        error.usernameError = "Username must be greater than 3 characters.";
    }

    // Validate email
    const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
    if (!user.email || !emailRegex.test(user.email)) {
        error.isValid = false;
        error.emailError = "Invalid email address.";
    }

    // Validate password
    if (!user.password || user.password.length <= 8) {
        error.isValid = false;
        error.passError = "Password must be greater than 8 characters.";
    }
    console.log(error);
    return error;
}

function submitHandle(event: Event) {
    event.preventDefault();

    const userName = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    const user: User = {
        username: userName,
        email: email,
        password: password
    };

    const error = userValidation(user);

    const userError = document.getElementById("user-error");
    const emailError = document.getElementById("email-error");
    const passError = document.getElementById("pass-error");

    if (userError) userError.innerHTML = error.usernameError;
    if (emailError) emailError.innerHTML = error.emailError;
    if (passError) passError.innerHTML = error.passError;

    if (error.isValid) {
        alert("User registration successfully.");
    }
}
