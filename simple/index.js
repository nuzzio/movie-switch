function toggleEdit(className) {
  const nameElement = document.querySelector(`.${className}`);
  const editIcon = nameElement.previousElementSibling;

  if (nameElement.contentEditable === "true") {
    nameElement.contentEditable = "false";
    nameElement.setAttribute("name-focus", "false");
    editIcon.style.color = "";
    nameElement.style.border = "none";
  } else {
    nameElement.contentEditable = "true";
    nameElement.setAttribute("name-focus", "true");
    editIcon.style.color = "blue";
    nameElement.style.border = "1px #d3d3d3";
    nameElement.focus();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const sliderButton = document.getElementById("sliderButton");
  const checkmarkRight = document.querySelector(".checkmark-right");
  const xMarkRight = document.querySelector(".x-mark-right");
  const checkmark = document.querySelector(".checkmark-left");
  const xMark = document.querySelector(".x-mark-left");

  const nameLeftElement = document.querySelector(".name-left");
  const nameRightElement = document.querySelector(".name-right");

  // Load name-left
  const savedNameLeft = localStorage.getItem("name-left");
  if (savedNameLeft) {
    nameLeftElement.textContent = savedNameLeft;
  }

  // Load name-right
  const savedNameRight = localStorage.getItem("name-right");
  if (savedNameRight) {
    nameRightElement.textContent = savedNameRight;
  }

  // Add blur event listeners to both name elements
  nameLeftElement.addEventListener("blur", function() {
    const editIcon = this.previousElementSibling;
    editIcon.style.color = "";
    this.style.border = "none";
    this.contentEditable = "false";
    const className = this.classList[1];
    localStorage.setItem(className, this.textContent);
  });

  nameRightElement.addEventListener("blur", function() {
    const editIcon = this.previousElementSibling;
    editIcon.style.color = "";
    this.style.border = "none";
    this.contentEditable = "false";
    const className = this.classList[1];
    localStorage.setItem(className, this.textContent);
  });

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
