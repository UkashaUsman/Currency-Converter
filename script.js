const currency = {
  USD: 1,
  EUR: 0.95,
  GBP: 0.82,
  INR: 83.1,
  PKR: 278.15,
};

let form = document.querySelector("#form");
let fromCurrency = document.querySelector("#from");
let toCurrency = document.querySelector("#to");
let amount = document.querySelector("#amount");
let result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // console.log(fromCurrency.value)
  // console.log(toCurrency.value)
  // console.log(amount.value)

  let fromAmount = currency[fromCurrency.value];
  // console.log(fromAmount)
  let toAmount = currency[toCurrency.value];
  // console.log(toAmount)
  let Amount = amount.value / fromAmount;
  // console.log(Amount)
  let convAmount = Amount * toAmount;
  // console.log(convAmount)

  let finalresult = (result.innerText = `Converted Amount: ${Math.round(
    convAmount
  )}`);
  // console.log(finalresult)
});
