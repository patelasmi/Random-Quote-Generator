const endpoint =
  "https://random-quote-generator.herokuapp.com/api/quotes/random";
function getQuote() {
  fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayQuote(data.quote);
    })
    .catch(function() {
      console.log("An error occurred");
    });
}
const newQuoteButton = document.querySelector(".new-quote");
newQuoteButton.addEventListener("click", getQuote);

function displayQuote(quote) {
  const quoteText = document.querySelector(".quote-text");
  quoteText.textContent = quote;

  const tweetButton = document.querySelector(".tweet");
  tweetButton.setAttribute("href", `https://twitter.com/share?text=${quote}`);
}

getQuote();