// Retrieve stored data from localStorage
let storedUserData = localStorage.getItem("UserDataBase");
var UserDataBase = storedUserData ? JSON.parse(storedUserData) : [];
// Now you can work with UserDataBase containing stored user data
let loginInButton = document.getElementById("loginInButton");
loginInButton.addEventListener("click", function () {
    let usernameInput = document.getElementById("usernameInput").value;
    let passwordInput = document.getElementById("passwordInput").value;
    let userExists = false;
    for (let i = 0; i < UserDataBase.length; i++) {
        let currentUser = UserDataBase[i];
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
console.log("Your Data Is Stored In \"UserDataBase\" which is an object of Arrays.\nIf You Want To Delete Your Already Stored Data Then Simply Type:\nlocalStorage.clear()");
