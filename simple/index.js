document.addEventListener("DOMContentLoaded", function() {
  const sliderButton = document.getElementById("sliderButton");
  const checkmarkRight = document.querySelector(".checkmark-right");
  const xMarkRight = document.querySelector(".x-mark-right");
   const checkmark = document.querySelector(".checkmark-left");
  const xMark = document.querySelector(".x-mark-left");

  // Retrieve the saved state from local storage
  const savedState = localStorage.getItem("sliderState");
  if (savedState === "on") {
    sliderButton.classList.add("on");
      xMarkRight.style.display = "inline";
      checkmarkRight.style.display = "none";
      xMark.style.display = "none";
      checkmark.style.display = "inline";
  } else {
    sliderButton.classList.remove("off");
      checkmarkRight.style.display = "inline";
      xMarkRight.style.display = "none";
      xMark.style.display = "inline";
      checkmark.style.display = "none";
  }

  // Toggle the state and update the UI
  sliderButton.addEventListener("click", function() {
    this.classList.toggle("on");
    this.classList.toggle("off");

    if (this.classList.contains("on")) {
      localStorage.setItem("sliderState", "on");
      xMarkRight.style.display = "inline";
      checkmarkRight.style.display = "none";
      xMark.style.display = "none";
      checkmark.style.display = "inline";
    } else {
      localStorage.setItem("sliderState", "off");
      checkmarkRight.style.display = "inline";
      xMarkRight.style.display = "none";
      xMark.style.display = "inline";
      checkmark.style.display = "none";
    }
  });
});
