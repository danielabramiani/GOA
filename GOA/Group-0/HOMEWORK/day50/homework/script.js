let balance = 0;

document.getElementById("button1").onclick=function(event){
    event.preventDefault();
    addition=document.getElementById("input1").value;
    addition=Number(addition);
    balance+=addition;
    document.getElementById("p1").innerHTML="Your balance is: " + balance;
}

document.getElementById("button2").onclick=function(event){
    event.preventDefault();
    subtraction=document.getElementById("input1").value;
    subtraction=Number(subtraction);
    balance-=subtraction;
    document.getElementById("p1").innerHTML="Your balance is: " + balance;
    if (balance<subtraction){
        window.alert("Your withdraw money is greater than your balance.")
    }
}