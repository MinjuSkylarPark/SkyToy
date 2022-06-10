const quotes =[
  {quote: "Our life is an unopend chocolate box",
  author: " - Forest Gump"},
  {quote: "Nothing in life is to be feared, it is only to be understood.",
  author: " - Marie Qurie"},
  {quote: "Disneyland will never be completed. It will continue to grow as long as there is imagination left in the world.",
  author: " - Walt Disney"},
  {quote: "First, think. Second, believe. Third, dream. And finally, dare.",
  author: " - Walt Disney"},
  {quote: "Whatever you do, do it well.",
  author: " - Walk Disney"},
  {quote: "It is kind of fun to do impossible",
  author: " - Walt Disney"},
  {quote: "All our dreams can come true if we have the courage to pursue them",
  author: " - Walt Disney"},
  {quote: "Life is a series of building, testing,changing and iterating",
  author: " - Forest Gump"},
  {quote: "The world is a book, and those who do not travel read only a page",
  author: " - Saint Augustine"},
  {quote: "Faith is to believe what you do not see; the reward of this faith is to see what you believe.",
  author: " - Saint Augustine"},
  {quote:"Since love grows within you, so beauty grows.",
   author:" - Saint Augustine"}

]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
//명언먼저 작가는 그 아래로 오게 출력

const todayquotes = quotes[Math.floor(Math.random()*quotes.length)];//마지막명언출력

quote.innerText = todayquotes.quote;
author.innerText = todayquotes.author;
