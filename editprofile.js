    
console.log(loggedInUser);
 
document.getElementById('newName1').value = loggedInUser.name1;

document.getElementById('newName2').value = loggedInUser.name2;
 
document.getElementById('newUsername').value = loggedInUser.username;

document.getElementById('newPassword').value = loggedInUser.password;

console.log(newName1, newName2, newUsername, newPassword);

const updatedUser = JSON.parse (localStorage.getItem('loggedInUser')) || [];

updatedUser.push ({newName1, newName2, newUsername, newPassword});
