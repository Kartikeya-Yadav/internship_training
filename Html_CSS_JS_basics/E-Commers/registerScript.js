function userValidation(user) {
    var error = {
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
    var emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
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
function submitHandle(event) {
    event.preventDefault();
    var userName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username: userName,
        email: email,
        password: password
    };
    var error = userValidation(user);
    var userError = document.getElementById("user-error");
    var emailError = document.getElementById("email-error");
    var passError = document.getElementById("pass-error");
    if (userError)
        userError.innerHTML = error.usernameError;
    if (emailError)
        emailError.innerHTML = error.emailError;
    if (passError)
        passError.innerHTML = error.passError;
    if (error.isValid) {
        alert("User registration successfully.");
    }
}
