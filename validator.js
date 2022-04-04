const form = document.querySelector("form");
const firstName = document.getElementById("first-name");
const firstNameError = document.getElementById("first-name-error");
const lastName = document.getElementById("last-name");
const lastNameError = document.getElementById("last-name-error");
const email = document.getElementById("email-address");
const emailError = document.getElementById("email-address-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");

function raiseError(msg, errorContainer, inputField) {
  errorContainer.innerHTML = `${msg}`;
  inputField.placeholder = "";
  inputField.classList.add("error-state");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName.value === "") {
    raiseError("First Name cannot be empty", firstNameError, firstName);
  }

  if (lastName.value === "") {
    raiseError("Last Name cannot be empty", lastNameError, lastName);
  }

  if (email.value === "") {
    raiseError("email cannot be empty", emailError, email);
  } else if (email.value.includes("@") === false) {
    email.value = "email@example.com";
    raiseError("looks like this is not an email", emailError, email);
  }

  if (password.value === "") {
    raiseError("password cannot be empty", passwordError, password);
  } else if (password.value.length > 8) {
    raiseError(
      "a password must not be longer than 8 charactors",
      passwordError,
      password
    );
  }
});
