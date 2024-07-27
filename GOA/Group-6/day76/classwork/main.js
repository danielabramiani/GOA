document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numberInput = document.getElementById('number');
    const number = parseFloat(numberInput.value);
    const resultDiv = document.getElementById('result');

    if (isNaN(number) || number < 0) {
        resultDiv.textContent = 'Please enter a valid positive number.';
        resultDiv.style.color = 'red';
    } else {
        const squareRoot = Math.sqrt(number);
        resultDiv.textContent = `The square root of ${number} is ${squareRoot.toFixed(2)}.`;
        resultDiv.style.color = 'green';
    }
});
