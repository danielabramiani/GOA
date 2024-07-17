let fname = document.getElementById("Username")
let lname = document.getElementById("password")
let age = document.getElementById("comment")

btn.addEventListener("click", function() {
  let person = {
    Username: Username.value,
    password: password.value,
    comment: comment.value
  };

  console.log(person);
});