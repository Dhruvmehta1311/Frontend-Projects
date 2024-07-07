const quoteButton = document.querySelector("#quoteBtn");
const quotePara = document.querySelector("#quotePara");
const quoteForm = document.querySelector("#quoteForm");
const nameBtn = document.querySelector("#nameBtn");
const nameInput = document.querySelector("#nameInput");
const nameForm = document.querySelector("#nameForm");
const heading = document.querySelector("#heading");
const heading3 = document.querySelector("#heading3");

let nameValue = "";

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  nameValue = nameInput.value;
  nameForm.classList.addhidden;
  nameInput.classList.add("hidden");
  nameBtn.classList.add("hidden");
  enterName.classList.add("hidden");
  unhideElements();
});

const api = "https://api.quotable.io/quotes/random";
function unhideElements() {
  heading3.classList.remove("hidden");
  heading.classList.remove("hidden");
  quoteBtn.classList.remove("hidden");
  quotePara.classList.remove("hidden");
  quoteForm.classList.remove("hidden");
  heading.textContent = `Hi ${nameValue}, I am a Random Quote Generator`;
}

async function getQuote() {
  heading.classList.add("hidden");
  heading.textContent = `Hi ${nameValue}, I am a Random Quote Generator`;
  const res = await fetch(api);
  const data = await res.json();
  randomQuote = data[0].content;
}

quoteForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await getQuote();
  quotePara.textContent = `" ${randomQuote}"`;
});
