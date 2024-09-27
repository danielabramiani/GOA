let users = [];

function registerUser() {
    let username = document.getElementById('username').value.trim();
    let surname = document.getElementById('surname').value.trim();

    if (username === '' || surname === '') {
        alert('Please enter both username and surname.');
        return;
    }

    users.push({ username, surname });
    alert('Registration successful!');
    clearForm('signupForm');
}

function login() {
    let loginUsername = document.getElementById('loginUsername').value.trim();
    let loginSurname = document.getElementById('loginSurname').value.trim();

    let user = users.find(user => user.username === loginUsername && user.surname === loginSurname);

    if (user) {
        document.getElementById('loginMessage').innerText = `Welcome, ${loginUsername} ${loginSurname}!`;
    } else {
        document.getElementById('loginMessage').innerText = 'Account does not exist.';
    }
    clearForm('loginForm');
}

function clearForm(formId) {
    document.getElementById(formId).reset();
}
