const studentData = [
    {
        facebook: "https://www.facebook.com/",
        messenger: "https://www.facebook.com/messages/t/daniel",
        name: "Daniel Abramiani",
        dad: "Chiko Bene",
        age: 14,
        score: 100,
    },
    {
        facebook: "https://www.facebook.com/",
        messenger: "https://www.facebook.com/messages/t/leo",
        name: "Davit Beraia",
        dad: "Leo Beraia",
        age: 13,
        score: 80,
    }
];

const dataBody = document.getElementById('dataBody');
const logoutButton = document.getElementById('logout');
const role = sessionStorage.getItem('role');

logoutButton.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'index.html';
});

function renderTable() {
    dataBody.innerHTML = '';

    studentData.forEach((student, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><a href="${student.facebook}" target="_blank">Facebook</a></td>
            <td><a href="${student.messenger}" target="_blank">Messenger</a></td>
            <td><input type="text" value="${student.name}" disabled></td>
            <td><input type="text" value="${student.dad}" disabled></td>
        
            <td><input type="number" value="${student.age}" disabled></td>
            <td><input type="number" value="${student.score}" disabled></td>
            <td class="moderator-only hidden">
                <button onclick="toggleEdit(${index}, this)">Edit</button>
            </td>
        `;

        dataBody.appendChild(row);
    });

    if (role === 'moderator') {
        document.querySelectorAll('.moderator-only').forEach(col => col.classList.remove('hidden'));
    }
}

function toggleEdit(index, button) {
    const row = button.parentElement.parentElement;
    const inputs = row.querySelectorAll('input');

    if (button.textContent === 'Edit') {
        inputs.forEach(input => input.disabled = false);
        button.textContent = 'Save';
    } else {
        studentData[index] = {
            ...studentData[index],
            name: inputs[0].value,
            dad: inputs[1].value,
            groupLeader: inputs[2].value,
            age: parseInt(inputs[3].value),
            score: parseInt(inputs[4].value)
        };

        inputs.forEach(input => input.disabled = true);
        button.textContent = 'Edit';
    }
}

renderTable();
