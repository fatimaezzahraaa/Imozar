// Handling form validation

// Retrieving html components
let inputName = document.getElementById('inputName'),
    inputEmail = document.getElementById('inputEmail'),
    inputMessage = document.getElementById('inputMessage'),
    formButton = document.getElementById('formButton'),
    nameError = document.getElementById('formNameError'),
    emailError = document.getElementById('formEmailError'),
    messageError = document.getElementById('formMessageError');

// Setting email validation function
function validateEmail(email) {
    var re = /^[a-zA-Z]+[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  return re.test(email);
}

// Setting full name validation function
function validateName(name) {
    var re = /^[a-zA-Z]([-']?[a-z]+)*( [a-zA-Z]([-']?[a-z]+)*)+$/;
    return re.test(name);
}

// Setting error messages in an array
let errorMessages = [
    "",
    "This field is required",
    "Please enter a valid name",
    "Please enter your full name",
    "Please enter a correct email",
    "Your message is too short",
];

// Setting a function that adds the failure effects to the form
function addFailEffects(input, error, errorId) {   
    input.classList.remove('input-success');
    input.classList.add('input-fail');
    input.parentElement.classList.remove('success');
    input.parentElement.classList.add('fail');    

    error.innerHTML = errorMessages[errorId];
}

// Setting a function that adds the success effects to the form
function addSuccessEffects(input, error, errorId) {
    input.classList.remove('input-fail');
    input.classList.add('input-success');
    input.parentElement.classList.remove('fail');
    input.parentElement.classList.add('success');

    error.innerHTML = errorMessages[errorId];
}

// Disabling the button
formButton.disabled = true;

// Button validation checkers
let isNameSuccess = false,
    isEmailSuccess = false,
    isMessageSuccess = false;

// Setting a function that activates the button
function activateButton() {
    if (isNameSuccess && isEmailSuccess && isMessageSuccess) {
        formButton.disabled = false;
    } else {
        formButton.disabled = true;
    }
}

// Checking fields one at a time
inputName.addEventListener('keyup', function checkName() {
    if (inputName.value.length <= 0) {
        addFailEffects(inputName, nameError, 1);
        isNameSuccess = false;        
    } else if (inputName.value.length <= 3) {
        addFailEffects(inputName, nameError, 3);
        isNameSuccess = false;
    } else if (inputName.value.length > 40) {
        addFailEffects(inputName, nameError, 2);
        isNameSuccess = false;
    } else {
        if (validateName(inputName.value)) {
            addSuccessEffects(inputName, nameError, 0);
            isNameSuccess = true;
        } else {
            addFailEffects(inputName, nameError, 3);
            isNameSuccess = false;
        }
    }
    activateButton();
});

inputEmail.addEventListener('keyup', function checkEmail() {
    if (inputEmail.value.length <= 0) {
        addFailEffects(inputEmail, emailError, 1);
        isEmailSuccess = false;
    } else {
        if (validateEmail(inputEmail.value)) {
            addSuccessEffects(inputEmail, emailError, 0);
            isEmailSuccess = true;
        } else {
            addFailEffects(inputEmail, emailError, 4);
            isEmailSuccess = false;
        }
    }
    activateButton();
});

inputMessage.addEventListener('keyup', function checkMessage() {
    if (inputMessage.value.length <= 0) {
        addFailEffects(inputMessage, messageError, 1);
        isMessageSuccess = false;
    } else if (inputMessage.value.length <= 40) {
        addFailEffects(inputMessage, messageError, 5);
        isMessageSuccess = false;
    } else {
        addSuccessEffects(inputMessage, messageError, 0);
        isMessageSuccess = true;
    }
    activateButton();
});