let imageBoxes = document.querySelectorAll(".imageBox");

console.log(imageBoxes);

imageBoxes.forEach((imagesBox) => {
  imagesBox.addEventListener("click", () => {
    removeActiveClasses();
    console.log(imageBoxes);
    imagesBox.classList.add("active");
  });
});

const removeActiveClasses = () => {
  imageBoxes.forEach((imageBoxes) => {
    imageBoxes.classList.remove("active");
  });
};
