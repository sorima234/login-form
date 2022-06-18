var attepmts = 3;

var loginForm = document.getElementById("login-form");
var loginButton = document.getElementById("login-form-submit");
var loginErrorMsg = document.getElementById("login-error-msg");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    var username = loginForm.username.value;
    var password = loginForm.password.value;
    if (username === "admin" && password === "1234") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    if (attepmts > 0 && attepmts < 3) {
        document.getElementById("login-error-msg").innerHTML = "Invalid username and/or password You have " + attepmts + " attempts left.";
    }
    if (attepmts == 2) {
        console.log("Username = admin");
        console.log("Password = 1234");
    }
    if (attepmts == 0) {
        document.getElementById("username-field").disabled = true;
        document.getElementById("password-field").disabled = true;
        document.getElementById("login-form-submit").disabled = true;
        document.getElementById("login-error-msg").innerHTML = "0 attempts left, reload the webpage to relogin. ";
    }
    attepmts--;
})