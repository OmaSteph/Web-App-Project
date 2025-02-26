let signupform = document.getElementsByClassName("form-control");

signupform.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let username = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");

    alert("This form has been successfully submitted!");
})