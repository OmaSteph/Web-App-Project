// const name1 = document.getElementById('firstname').value;
// const username = document.getElementById('email').value;

// const users = JSON.parse (localStorage.getItem('users')) || []; 
const loggedInUser = JSON.parse (localStorage.getItem('loggedInUser'));

document.getElementById('name1').textContent = loggedInUser.name1;
 
document.getElementById('username').textContent = loggedInUser.username;

console.log(name1, username);