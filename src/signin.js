var user = {
    name : "User Name",
    country : "N/A",
    password : "0",
};
// Retrieve stored data from localStorage
let storedUserData = localStorage.getItem("UserDataBase");
var UserDataBase = storedUserData ? JSON.parse(storedUserData) : [];
// Now you can work with UserDataBase containing stored user data
let signInButton = document.getElementById("signInButton");
signInButton.addEventListener("click", function () {
    let usernameInput = document.getElementById("usernameInput").value;
    let passwordInput = document.getElementById("passwordInput").value;
    let countryInput = document.getElementById("countryInput").value;
    let birthdayInput = document.getElementById("birthdayInput").value;
    if(usernameInput===""||passwordInput===""||countryInput===""||birthdayInput===""){
        return;
    };
    let tempUser = { ...user };//Shalow Coppy.
    tempUser.name = usernameInput;
    if (storedUserData !== null){
        for (let index = 0; index < UserDataBase.length; index++) {
            if(usernameInput === UserDataBase[index].name){
                alert("User Name Not Avaiable!");
                return;
            }
        }
    }
    tempUser.country = countryInput;
    tempUser.password = passwordInput;
    tempUser.birthday = birthdayInput;
    UserDataBase.push(tempUser);
    localStorage.setItem("UserDataBase", JSON.stringify(UserDataBase)); // Store data in localStorage
    alert("Welcome " + usernameInput + "!\nPlease Proceed To Login Now By Pressing Crying Lain!");
});