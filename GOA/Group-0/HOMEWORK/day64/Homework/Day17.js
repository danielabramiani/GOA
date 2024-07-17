function userInformation(name, email, password) {
    this.userName = name;
    this.userEmail = email;
    this.userPassword = password;
}

document.getElementById("sign-in").addEventListener('click', function() {
    
    const nameHtml = document.getElementById("text-input").value;
    const emailHtml = document.getElementById("email-input").value;
    const passwordHtml = document.getElementById("password-input").value;

    const userInfo = new userInformation(nameHtml, emailHtml, passwordHtml);

    console.log(userInfo);

    const p1 = document.getElementById("name");
    const p2 = document.getElementById("email");
    const p3 = document.getElementById("password");

    p1.textContent = "heloo: " + userInfo.userName;
    p2.textContent = "your email: " + userInfo.userEmail;
    p3.textContent = "your Password: " + userInfo.userPassword;
    
});