const quotes = [
  "The best way to predict the future is to create it.",
  "Small steps every day add up to big results.",
  "Done is better than perfect.",
  "One is absolute."
];

const quote = document.getElementById("quote");
const button = document.getElementById("new-quote");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomIndex];
});
