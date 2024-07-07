const heading3 = document.querySelector("#heading3");
const userInput = document.querySelector("#userInput");
const searchBtn = document.querySelector("#searchBtn");
const backBtn = document.querySelector("#backBtn");
const form = document.querySelector("#form");
const mainDiv = document.querySelector("#mainDiv");
const windSpeed = document.querySelector("#windSpeed");
const pressure = document.querySelector("#pressure");
const humidity = document.querySelector("#humidity");
const feelsLike = document.querySelector("#feelsLike");
const tempData = document.querySelector("#tempData");
const cityData = document.querySelector("#cityData");
const loader = document.querySelector("#loader");
const rainy = document.querySelector("#rainy");
const description = document.querySelector("#description");
const sunny = document.querySelector("#sunny");
const screenshotBtn = document.querySelector("#screenshotBtn");
const unhideDiv = document.querySelector("#unhideDiv");

let cityName = "";

const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3ca41a078e3e15869ced3d9f74d2d83e`;

async function getLatestWeather(cityName) {
  try {
    showLoader();
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3ca41a078e3e15869ced3d9f74d2d83e`;
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error("City Not Found");
    }
    const data = await res.json();
    updateWeather(data);
    console.log(data);
  } catch (error) {
    alert("Couldn't Fetch Data, Please Try Again");
  } finally {
    hideLoader();
  }
}

function updateWeather(data) {
  cityData.textContent = `City Name: ${data.name}`;
  tempData.textContent = `Temperature: ${data.main.temp}`;
  feelsLike.textContent = `Feels Like: ${data.main.feels_like}`;
  pressure.textContent = `Pressure: ${data.main.pressure}`;
  humidity.textContent = `Humidity: ${data.main.humidity}`;
  windSpeed.textContent = `Wind Speed: ${data.wind.speed}`;
  description.textContent = `Description: ${data.weather[0].main}`;
  console.log(data.weather[0].main);
  if (data.weather[0].main === "Clouds") {
    rainy.classList.remove("hidden");
  } else if (
    data.weather[0].main === "Clear" ||
    data.weather[0].main === "Haze"
  ) {
    rainy.classList.add("hidden");
    sunny.classList.remove("hidden");
  }
}

function showLoader() {
  loader.classList.remove("hidden");
}

function hideLoader() {
  loader.classList.add("hidden");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  cityName = userInput.value.trim();
  if (!cityName) {
    alert("Kindly Enter Proper Value");
    return;
  }
  await getLatestWeather(cityName);
  console.log(cityName);
  mainDiv.classList.add("hidden");
  unhideDiv.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  mainDiv.classList.remove("hidden");
  unhideDiv.classList.add("hidden");
});

screenshotBtn.addEventListener("click", () => {
  html2canvas(unhideDiv).then((canvas) => {
    canvas.toBlob((blob) => {
      navigator.clipboard
        .write([new ClipboardItem({ "image/png": blob })])
        .then(() => {
          alert("Screenshot copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });
  });
});
screenshotBtn.addEventListener("click", () => {
  html2canvas(mainDiv).then((canvas) => {
    canvas.toBlob((blob) => {
      navigator.clipboard
        .write([new ClipboardItem({ "image/png": blob })])
        .then(() => {
          alert("Screenshot copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    });
  });
});
