
const loggedInUser = JSON.parse (localStorage.getItem('loggedInUser'));

document.getElementById('name1').textContent = loggedInUser.username;