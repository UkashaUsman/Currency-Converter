const currency = {
  USD: 1,
  EUR: 0.95,
  GBP: 0.82,
  INR: 83.10,
  PKR: 278.15,
};

let form = document.querySelector("#form");
let fromCurrency = document.querySelector("#from");
let toCurrency = document.querySelector("#to");
let amount = document.querySelector("#amount");
let result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fromCurrency.value;
  // console.log(fromCurrency.value)
  toCurrency.value;
  // console.log(toCurrency.value)
  amount.value;
  // console.log(amount.value)

  let fromAmount = currency[fromCurrency.value];
  // console.log(fromAmount)
  let toAmount = currency[toCurrency.value];
  // console.log(toAmount)
  let baseAmount = amount.value / fromAmount;
  // console.log(baseAmount)
  let convAmount = baseAmount * toAmount;
  // console.log(convAmount)

  let finalresult = result.textContent = `Converted Amount: ${Math.round(convAmount)}`;
  // console.log(finalresult)
});
