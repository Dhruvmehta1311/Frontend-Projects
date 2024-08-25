document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.querySelector("#fileInput");
  const image = document.querySelector("#image");
  const paragraph = document.querySelector("#text");
  const copyBtn = document.querySelector("#copyBtn");

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        const imageResult = e.target.result;
        console.log("Target is:", e.target.result);
        image.src = imageResult;
        const imgSrc = image.src;
        image.classList.remove("hidden");

        Tesseract.recognize(imgSrc, "eng+hin", {
          logger: (m) => console.log(m),
        }).then(({ data: { text } }) => {
          paragraph.value = text;
        });
      };
    }
  });
  copyBtn.addEventListener("click", () => {
    const textToCopy = paragraph.value;
    navigator.clipboard.writeText(textToCopy);
    if (navigator.clipboard.writeText(textToCopy)) {
      alert("Text Copied!");
    }
  });
});
