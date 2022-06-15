const form = document.getElementById("email-form");
const input = document.getElementById("email-input");
const button = document.getElementById("email-button");
const valid = document.getElementById("valid");
const invalid = document.getElementById("invalid");
const errorIcon = document.getElementById("error");

errorIcon.style.display = "none";
valid.style.display = "none";
invalid.style.display = "none";

button.addEventListener("click", (event) => {
  event.preventDefault();
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
    input.value = "";
    errorIcon.style.display = "none";
    invalid.style.display = "none";
    valid.style.display = "block";
    input.blur();
  } else {
    errorIcon.style.display = "block";
    valid.style.display = "none";
    invalid.style.display = "block";
  }
});
