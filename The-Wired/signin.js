var user = {
    name : "User Name",
    country : "N/A",
    password : "0",
};
var UserDataBase = [];
var signInButton = document.getElementById("signInButton");
signInButton.addEventListener("click", function () {
    var usernameInput = document.getElementById("usernameInput").value;
    var passwordInput = document.getElementById("passwordInput").value;
    var countryInput = document.getElementById("countryInput").value;
    var birthdayInput = document.getElementById("birthdayInput").value;
    var tempUser = { ...user };
    tempUser.name = usernameInput;
    tempUser.country = countryInput;
    tempUser.password = passwordInput;
    tempUser.birthday = birthdayInput;
    UserDataBase.push(tempUser);
    localStorage.setItem("UserDataBase", JSON.stringify(UserDataBase)); // Store data in localStorage
    alert("Welcome " + usernameInput + "!\nPlease Proceed To Login Now!");
});

