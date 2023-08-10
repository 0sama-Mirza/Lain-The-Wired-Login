// Retrieve stored data from localStorage
var storedUserData = localStorage.getItem("UserDataBase");
var UserDataBase = storedUserData ? JSON.parse(storedUserData) : [];
// Now you can work with UserDataBase containing stored user data
var loginInButton = document.getElementById("loginInButton");

loginInButton.addEventListener("click", function () {
    var usernameInput = document.getElementById("usernameInput").value;
    var passwordInput = document.getElementById("passwordInput").value;
    var userExists = false;
    for (var i = 0; i < UserDataBase.length; i++) {
        var currentUser = UserDataBase[i];
        if (usernameInput === currentUser.name && passwordInput === currentUser.password) {
            userExists = true;
            break;
        }
    }
    if (userExists) {
        window.location.replace("https://matias.ma/nsfw/");
        alert("Welcome My Friend. Please Enjoy!\LETS GOOOOOOOOOOOOOOO!!!!!!!!!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
});