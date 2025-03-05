const loggedInUser = JSON.parse (localStorage.getItem('loggedInUser'));

document.getElementById('name1').textContent = loggedInUser.name1;
 
document.getElementById('username').textContent = loggedInUser.username;

console.log(name1, username);