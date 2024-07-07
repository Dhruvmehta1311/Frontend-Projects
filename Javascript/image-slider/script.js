const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const image = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let currentIndex = 1;
const imgLength = image.length;

console.log(imgLength);

for (let i = 0; i < imgLength; i++) {
  const div = document.createElement("div");
  div.className =
    "button rounded-full h-[15px] w-[15px] border-white border cursor-pointer";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor = "white";

const removeBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    removeBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    currentIndex = i + 1;
    button.style.backgroundColor = "white";
  });
});

const mainSlide = () => {
  slider.style.transform = `translateX(-${currentIndex * 800}px)`;
  currentIndex++;
};
const previousSlide = () => {
  slider.style.transform = `translateX(-${(currentIndex - 2) * 800}px)`;
  currentIndex--;
};

const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  currentIndex = 1;
};

const lastSlide = () => {
  currentIndex == imgLength;
  slider.style.transform = `translateX(-${(imgLength - 1) * 800}px)`;
  currentIndex = imgLength;
};

const changeBg = () => {
  removeBg();
  buttons[currentIndex - 1].style.backgroundColor = "white";
};

right.addEventListener("click", () => {
  currentIndex < imgLength ? mainSlide() : firstSlide();
  changeBg();
});

left.addEventListener("click", () => {
  currentIndex > 1 ? previousSlide() : lastSlide();
  changeBg();
});
