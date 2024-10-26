document.getElementById('signInForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const role = document.getElementById('role').value;
    sessionStorage.setItem('role', role);

    window.location.href = '/html/students.html';
});

window.addEventListener('DOMContentLoaded', (event) => {
    const role = sessionStorage.getItem('role');
    if (role === 'viewer') {
        document.querySelectorAll('input').forEach(input => {
            input.disabled = true;
        });
        document.querySelectorAll('.moderator-only').forEach(col => col.classList.add('hidden'));
    }
});
