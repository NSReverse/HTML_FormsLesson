function isFormValidated() {
    var usernameTextField = document.getElementById("usernameTextField");
    var passwordTextField = document.getElementById("passwordTextField");
    
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    
    if (username === "" && password === "") {
        alert("Please enter a username and password");
        usernameTextField.style.border = "1pt solid red";
        passwordTextField.style.border = "1pt solid red";
        return false;
    }
    else if (username === "") {
        alert("Please enter a username");
        usernameTextField.style.border = "1pt solid red";
        passwordTextField.style.border = "1pt solid black";
        return false;
    }
    else if (password === "") {
        alert("Please enter a password");
        usernameTextField.style.border = "1pt solid black";
        passwordTextField.style.border = "1pt solid red";
        return false;
    }
    
    usernameTextField.style.border = "1pt solid black";
    passwordTextField.style.border = "1pt solid black";
    alert("Welcome back!");
    return true;
}