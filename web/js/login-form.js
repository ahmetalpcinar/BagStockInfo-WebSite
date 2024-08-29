document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345678') {
        window.location.href = 'admin.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});