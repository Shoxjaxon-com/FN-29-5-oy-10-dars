const username = document.querySelector("#user");
const password = document.querySelector("#password");
const button = document.querySelector("#btn");
const logInPage = document.querySelector("#sign-up");
const realPage = document.querySelector("#open-site-title");
const danger = document.querySelector("#danger");

const correctUsername = "admin";
const correctPassword = "123456";

button.addEventListener("click", function (event) {
    event.preventDefault(); 
    if (username.value === correctUsername && password.value === correctPassword) {
        logInPage.style.display = "none"; 
        realPage.style.display = "block"; 
    } else {
        danger.style.display = "block"; 
    }
});
