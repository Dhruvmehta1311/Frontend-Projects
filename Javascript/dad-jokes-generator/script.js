// Jokee API : https://api.chucknorris.io/jokes/random

const heading = document.getElementById("heading");
const button = document.getElementById("button");

const apiData = "https://api.chucknorris.io/jokes/random?category=dev";

async function getRandomJoke() {
  heading.innerHTML = "Please Wait...";
  const fetchData = await fetch(apiData);
  const data = await fetchData.json();
  console.log(data.value);

  heading.innerHTML = data.value;
}

button.addEventListener("click", getRandomJoke);
