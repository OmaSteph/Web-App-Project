document.getElementById('logout').addEventListener('click',function() {
localStorage.getItem(user);
    localStorage.removeItem ('user');
    // alert('Logged out successfully');

    setTimeout (() => {
        window.location.href = 'login.html';
    }, 50);
});

z
