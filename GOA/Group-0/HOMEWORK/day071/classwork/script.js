let users = [];

function addUser() {
    let first = document.getElementById('first').value.trim();
    let last = document.getElementById('last').value.trim();

    if (first === '' || last === '') {
        alert('Please enter both first and last name.');
        return;
    }

    users.push({first, last});
    displayUsers();
    clearForm();
}

function displayUsers() {
    let userListDiv = document.getElementById('userList');
    userListDiv.innerHTML = '';

    let userList = document.createElement('ul');

    users.forEach(user => {
        let listItem = document.createElement('li');
        listItem.textContent = `${user.first} ${user.last}`;
        userList.appendChild(listItem);
    });

    userListDiv.appendChild(userList);
}

function clearForm() {
    document.getElementById('first').value = '';
    document.getElementById('last').value = '';
}