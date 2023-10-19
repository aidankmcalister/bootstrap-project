const aboutButton = document.querySelector("#aboutMeBtn");
const leftPosition = document.querySelector(".left-position");
const aboutMeContainer = document.querySelector("#aboutMeContainer");
let isExtended = false;
let isAnimating = false;

aboutButton.addEventListener("click", function () {
  if (!isAnimating) {
    isAnimating = true;
    isExtended = !isExtended;
    leftPosition.classList.toggle("extended", isExtended);
    setTimeout(() => {
      isAnimating = false;
    }, 500); // Adjust the timeout based on your animation duration
  }
});

aboutMeContainer.addEventListener("click", function () {
  if (!isAnimating) {
    aboutButton.click();
  }
});

leftPosition.addEventListener("mouseover", function () {
  if (!isAnimating && isExtended) {
    leftPosition.classList.add("peek-in");
  }
});

leftPosition.addEventListener("mouseout", function () {
  if (!isAnimating && isExtended) {
    leftPosition.classList.remove("peek-in");
  }
});

leftPosition.addEventListener("click", function () {
  if (!isAnimating) {
    aboutButton.click();
  }
});
