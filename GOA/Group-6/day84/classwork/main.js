const calculateButton = document.querySelector(".calculate-button");
const mortgageAmountInput = document.querySelector("#mortgage-amount-input");
const mortgageTermInput = document.querySelector("#mortgage-term-input");
const interestRateInput = document.querySelector("#interest-rate-input");
const repaymentOption = document.querySelector("#repayment-option");
const interestOnlyOption = document.querySelector("#interest-only-option");
const clearButton = document.querySelector(".clear-button");
const errorMessages = document.querySelectorAll(".error-msg");
const symbolElements = document.querySelectorAll(".symbol-background");
const inputElements = document.querySelectorAll("input");
const repaymentLabel = document.querySelector(".repayment-label");
const interestOnlyLabel = document.querySelector(".interestonly-label");
const resultHeader = document.querySelector(".results-header");
const resultDetails = document.querySelector(".results-details");
const labelAmount = document.querySelectorAll(".label-amount");

function showError(index, msg) {
  errorMessages[index].textContent = msg;
  inputElements[index].classList.add("error-border");
  symbolElements[index].classList.add("error-background");
}

function hideError(index, msg) {
  errorMessages[index].textContent = msg;
  inputElements[index].classList.remove("error-border");
  symbolElements[index].classList.remove("error-background");
}

function validateInput(input, index) {
  if (input.trim() === "") {
    showError(index, "This field is required");
    return null;
  } else {
    hideError(index, "");
    return +input;
  }
}

const formatCurrency = (number) =>
  new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" }).format(number);

function getSelectedOption() {
  if (repaymentOption.checked) return "repayment";
  if (interestOnlyOption.checked) return "interestOnly";
  showError(3, "Please select an option");
  return null;
}

function calculateMortgage() {
  const amount = validateInput(mortgageAmountInput.value, 0);
  const term = validateInput(mortgageTermInput.value, 1);
  const interest = validateInput(interestRateInput.value, 2);
  const selectedOption = getSelectedOption();

  if (amount !== null && term !== null && interest !== null && selectedOption) {
    const monthlyInterest = interest / 100 / 12;
    const months = term * 12;
    const powerTerm = Math.pow(1 + monthlyInterest, months);
    const monthlyPayment = (amount * (monthlyInterest * powerTerm)) / (powerTerm - 1);
    const totalPayment = monthlyPayment * months;

    resultHeader.classList.add("hide");
    resultDetails.classList.add("show");
    labelAmount[0].textContent = formatCurrency(monthlyPayment);
    labelAmount[1].textContent = formatCurrency(totalPayment);
  }
}

function clearAllFields() {
  resultHeader.classList.remove("hide");
  resultDetails.classList.remove("show");
  inputElements.forEach((el) => {
    el.checked = false;
    el.value = "";
    el.classList.remove("error-border");
  });
  errorMessages.forEach((msg) => (msg.textContent = ""));
  symbolElements.forEach((sym) => sym.classList.remove("error-background"));
  repaymentLabel.classList.remove("select");
  interestOnlyLabel.classList.remove("select");
  labelAmount.forEach((label) => (label.textContent = ""));
}

clearButton.addEventListener("click", clearAllFields);

calculateButton.addEventListener("click", (event) => {
  event.preventDefault();
  calculateMortgage();
});

mortgageAmountInput.addEventListener("focus", () => hideError(0, ""));
mortgageTermInput.addEventListener("focus", () => hideError(1, ""));
interestRateInput.addEventListener("focus", () => hideError(2, ""));

repaymentOption.addEventListener("click", () => {
  repaymentLabel.classList.add("select");
  interestOnlyLabel.classList.remove("select");
  hideError(3, "");
});

interestOnlyOption.addEventListener("click", () => {
  repaymentLabel.classList.remove("select");
  interestOnlyLabel.classList.add("select");
  hideError(3, "");
});
