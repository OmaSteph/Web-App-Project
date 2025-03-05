//collecting data via the signup page
document.getElementById('signupForm').addEventListener('submit', function(register) {
    register.preventDefault ();
    
    const name1 = document.getElementById('firstname').value;
    const name2 = document.getElementById('lastname').value;
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    console.log(name1, username, password);
    if (password.length < 8) {
        alert('Password must be atleast 8 character long');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match')
        return;
    }

    const users = JSON.parse (localStorage.getItem('users')) || [];

    users.push ({name1, name2, username, password});
    localStorage.setItem('users', JSON.stringify(users));

    setTimeout (() => {
        window.location.href = 'login.html';
    }, 1000);
});