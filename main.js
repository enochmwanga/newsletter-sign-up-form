const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = document.getElementById("error");
const dismissButton = document.getElementById("dismiss-btn");
const validatedEmail = document.getElementById("validated-email");
const contentContainer = document.getElementById("content-container");
const formPopup = document.getElementById("form-popup");
const emailRegExp =
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})(?:\.[a-zA-Z]{2,})*$/
;


const isValidEmail = () => {
    const validity = email.value.length !== 0 && emailRegExp.test(email.value);
    return validity;
  };
  
  // Update email input class based on validity
  const setEmailClass = (isValid) => {
    email.className = isValid ? "valid" : "invalid";
  };
  
  // Update error message and visibility
  const updateError = (isValidInput) => {
    if (isValidInput) {
      error.textContent = "";
      error.removeAttribute("class");
    } else {
      error.textContent = "Valid email required";
      error.setAttribute("class", "active");
    }
  };
  
  // Initialize email validity on page load
  const initializeValidation = () => {
    const emailInput = isValidEmail();
    setEmailClass(emailInput);
  };
  
  // Handle input event to update email validity
  const handleInput = () => {
    const emailInput = isValidEmail();
    setEmailClass(emailInput);
    updateError(emailInput);
  };
  
  // Handle form submission to show error if email is invalid
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const emailInput = isValidEmail();
    setEmailClass(emailInput);
    updateError(emailInput);
    if(email.className === "valid"){
        validatedEmail.innerText = `${email.value}.`;
        contentContainer.style.display = "none";
        formPopup.style.display = "grid";
      }
  };
  

  window.addEventListener("load", initializeValidation);
  // This defines what happens when the user types in the field
  email.addEventListener("input", handleInput);
  // This defines what happens when the user tries to submit the data
  form.addEventListener("submit", handleSubmit);

 dismissButton.addEventListener("click", () => {
    form.reset();
    contentContainer.style.display = "grid";
    formPopup.style.display = "none";
  });