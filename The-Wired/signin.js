var user = {
    name : "User Name",
    country : "N/A",
    password : "0",
};
var UserDataBase = [];
let signInButton = document.getElementById("signInButton");
signInButton.addEventListener("click", function () {
    let usernameInput = document.getElementById("usernameInput").value;
    let passwordInput = document.getElementById("passwordInput").value;
    let countryInput = document.getElementById("countryInput").value;
    let birthdayInput = document.getElementById("birthdayInput").value;
    if(usernameInput===""||passwordInput===""||countryInput===""||birthdayInput===""){
        alert("Please Fill Out All The Details In The Form.");
        return;
    };
    let tempUser = { ...user };//Shalow Coppy.
    tempUser.name = usernameInput;
    tempUser.country = countryInput;
    tempUser.password = passwordInput;
    tempUser.birthday = birthdayInput;
    UserDataBase.push(tempUser);
    localStorage.setItem("UserDataBase", JSON.stringify(UserDataBase)); // Store data in localStorage
    alert("Welcome " + usernameInput + "!\nPlease Proceed To Login Now By Pressing Crying Lain!");
});