document.getElementById('logout').addEventListener('click',function() {
    localStorage.removeItem ('loggedInUser');
    // alert('Logged out successfully');

    setTimeout (() => {
        window.location.href = 'index.html';
    }, 50);
});

document.getElementById('no').addEventListener('click',function() {
    setTimeout (() => {
        window.location.href = 'home.html';
    }, 50);
});
