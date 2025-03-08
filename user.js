
// const loggedInUser = JSON.parse (localStorage.getItem('loggedInUser'));

// document.getElementById('name1').name1 = newName1;
// document.getElementById('username').username = newUsername;
let Name1 = loggedInUser.name1;
let Username = loggedInUser.username; 

document.getElementById('Name1').textContent = loggedInUser.name1;

document.getElementById('name2').textContent = loggedInUser.name2;
 
document.getElementById('Username').textContent = loggedInUser.username;

document.getElementById('password').textContent = loggedInUser.password;

console.log(Name1, name2, Username, password);

