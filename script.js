document.addEventListener('DOMContentLoaded', function() {
    let username = localStorage.getItem('username');
    if (!username) {
        username = prompt('Enter your name:');
        if (username) {
            localStorage.setItem('username', username);
        }
    }
    if (username) {
        document.getElementById('usernameDisplay').textContent = `Welcome ${username}!`;
    }
}); // This closing bracket was missing
