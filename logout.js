document.getElementById('logout').addEventListener('click',function() {
    localStorage.removeItem ('loggedInUser');
    // alert('Logged out successfully');

    setTimeout (() => {
        window.location.href = 'login.html';
    }, 50);
});

z
