function calculateBMI() {
    var gender = document.getElementById('gender').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; 
    var bmi = weight / (height * height);
    var result = document.getElementById('result');

    if (!isNaN(bmi)) {
        result.innerHTML = "<h3>Your BMI is: " + bmi.toFixed(2) + "</h3>";
        if (gender === 'male') {
            if (bmi < 18.5) {
                result.innerHTML += "<p>You are underweight.</p>";
            } 
            else if (bmi >= 18.5 && bmi < 25) {
                result.innerHTML += "<p>You are normal weight.</p>";
            }
             else if (bmi >= 25 && bmi < 30) {
                result.innerHTML += "<p>You are overweight.</p>";
            } 
            else {
                result.innerHTML += "<p>You are obese.</p>";
            }
        } 
        else if (gender === 'female') {
            if (bmi < 15.5) {
                result.innerHTML += "<p>You are underweight.</p>";
            }
             else if (bmi >= 15.5 && bmi <= 22) {
                result.innerHTML += "<p>You are normal weight.</p>";
            } 
            else if (bmi > 22 && bmi < 31) {
                result.innerHTML += "<p>You are overweight.</p>";
            } 
            else {
                result.innerHTML += "<p>You are obese.</p>";
            }
        }
    }
     else {
        result.innerHTML = "<p>Please enter valid weight and height.</p>";
    }
}