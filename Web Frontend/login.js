let users = [];

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    
    if (users.some(user => user.username === newUsername)) {
        document.getElementById('register-error-message').innerText = 'Username sudah terdaftar!';
        return;
    }
    
    users.push({ username: newUsername, password: newPassword });
    alert('Registrasi berhasil! Silakan login.');
    
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        window.location.href = 'dashboard.html'; 
    } else {
        document.getElementById('error-message').innerText = 'Username atau password salah!';
    }
});

document.getElementById('register-link').addEventListener('click', () => {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', () => {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});
