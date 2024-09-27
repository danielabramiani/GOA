function calculateRepayments() {
    const amount = parseFloat(document.getElementById('input1').value);
    const years = parseInt(document.getElementById('input2').value);
    const rate = parseFloat(document.getElementById('input3').value);

    if (isNaN(amount) || isNaN(years) || isNaN(rate)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }

    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;

    const monthlyRepayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalRepayment = monthlyRepayment * numberOfPayments;

    document.getElementById('monthly-repayment').textContent = `£${monthlyRepayment.toFixed(2)}`;
    document.getElementById('total-repayment').textContent = `£${totalRepayment.toFixed(2)}`;
  }

  document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault(); 
    calculateRepayments(); 
  });

  document.getElementById('clear-all').addEventListener('click', function() {
    document.getElementById('form1').reset();
    document.getElementById('monthly-repayment').textContent = '£0.00';
    document.getElementById('total-repayment').textContent = '£0.00';
  });