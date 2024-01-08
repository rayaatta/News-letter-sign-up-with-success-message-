/* accessing the DOM */
const body = document.querySelector("body");
const signUp = document.querySelector(".sign-up");
const form = document.querySelector("form");
const email = document.querySelector("#email");
const errorMessage = document.querySelector(".error-message");
const submitButton = document.querySelector("#submit");
const successMessage = document.querySelector(".success-message");
const dismissButton = document.querySelector("button.button");
let address = document.querySelector(".address");

/* hiding the success message */
successMessage.style.display = "none";
/* validating the email */
email.addEventListener("input",() => {
    if(email.validity.valid) {
        errorMessage.textContent= "";

    } else {
        /*errorMessage.textContent ="enter a correct email address";*/
        showError();
    }

});
form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showError();
    }  else if (email.value === ""){
        showError();
    } else {
        signUp.style.display = "none";
        successMessage.style.display = "flex";
        address.innerText = `${email.value}`;
        

    }
    /* stopping page reload after submitting form*/
    event.preventDefault();

});
 function showError() {
/*possible errors */
    if (email.validity.valueMissing) {
    errorMessage.errorMessage.textContent = "You need to enter an email.";
} else if (email.validity.typeMismatch) {
    errorMessage.textContent = "entered value should be an email address";
} else if (email.validity.tooShort) {
    errorMessage.textContent= `email should be atleadt ${email.minLength} characters: you entered ${email.value.length}.`;
} else if (email.value === "") {
    errorMessage.textContent = "enter your email address";
}
}
dismissButton.addEventListener("click", () => {
    signUp.style.display = "flex";
    successMessage.style.display = "none";
});
