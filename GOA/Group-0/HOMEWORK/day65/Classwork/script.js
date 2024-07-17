function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordError = document.getElementById("passwordError");

    if (password !== confirmPassword) {
        passwordError.textContent = "Passwords do not match!";
        return false;
    } else {
        passwordError.textContent = "";
    }

    return true;
}

// const form = document.getElementById("form")

// const accounts = []

// const Account = function(username,email,password,repeatPassword){
//   this.username = username;
//   this.password = password;
//   this.email = email;
//   this.repeatPassword = repeatPassword;
// }

// form.addEventListener("submit", function(){
//   const usernameValue = form.elements.username.value;
//   const emailValue = form.elements.email.value;
//   const passwordValue = form.elements.password.value;
//   const rptPassword = form.elements.rptpassword.value;

//   const account = new Account(usernameValue,emailValue,passwordValue,rptPassword);

//   if(passwordValue === rptPassword){
//     accounts.push(account)
//     console.log(accounts);
//   }else{
//     alert("Wrong credentials")
//   }
// })