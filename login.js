document.getElementById('loginform').addEventListener('submit', function(login) {
    login.preventDefault ();

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // const name1 = document.getElementById('firstname').value;
    console.log(username, password);
    const users = JSON.parse (localStorage.getItem('users')) || []; 

    const user = users.find (u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem ('loggedInUser', JSON.stringify (user));
        setTimeout (() => {
            window.location.href = 'home.html';
        }, 1000);
    } else {
        alert('Invalid username or password');
    }
});