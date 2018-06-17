// Form validation

// Retrieving html components
let inputName = document.getElementById('inputName'),
    inputEmail = document.getElementById('inputEmail'),
    inputMessage = document.getElementById('inputMessage'),
    formButton = document.getElementById('formButton'),
    nameError = document.getElementById('formNameError'),
    emailError = document.getElementById('formEmailError'),
    overallError = document.getElementById('formOverallError');

// Setting the email validation function
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Disabling the button
formButton.disabled = true;

// Button checking variables
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

// Checking each field one at a time
inputName.addEventListener('keyup', function checkName() {
    if (inputName.value.length <= 0) {     
        nameError.innerHTML = 'This field is required';
        inputName.parentElement.classList.remove('success');
        inputName.classList.add('input-fail');
        inputName.parentElement.classList.remove('success');
        inputName.parentElement.classList.add('fail');
        isNameSuccess = false;
    } else if (inputName.value.length <= 5) {
        nameError.innerHTML = 'Please enter a valid name';
        inputName.classList.remove('input-success');
        inputName.classList.add('input-fail');
        inputName.parentElement.classList.remove('success');
        inputName.parentElement.classList.add('fail');
        isNameSuccess = false;
    } else if (inputName.value.length > 40) {
        nameError.innerHTML = 'Please enter a valid name';
        inputName.classList.remove('input-success');
        inputName.classList.add('input-fail');
        inputName.parentElement.classList.remove('success');
        inputName.parentElement.classList.add('fail');
        isNameSuccess = false;
    } else {
        nameError.innerHTML = '';
        inputName.classList.remove('input-fail');
        inputName.classList.add('input-success');
        inputName.parentElement.classList.remove('fail');
        inputName.parentElement.classList.add('success');
        isNameSuccess = true;
    }
    activateButton();
});

inputEmail.addEventListener('keyup', function checkEmail() {
    if (inputEmail.value.length <= 0) {
        emailError.innerHTML = 'This field is required';
        inputEmail.parentElement.classList.remove('success');
        inputEmail.classList.add('input-fail');
        inputEmail.parentElement.classList.add('fail');
        isEmailSuccess = false;
    } else {
        if (validateEmail(inputEmail.value)) {
            emailError.innerHTML = '';
            inputEmail.classList.remove('input-fail');
            inputEmail.classList.add('input-success');
            inputEmail.parentElement.classList.remove('fail');
            inputEmail.parentElement.classList.add('success');
            isEmailSuccess = true;
        } else {
            emailError.innerHTML = 'Please enter a correct email';
            inputEmail.classList.remove('input-success');
            inputEmail.classList.add('input-fail');
            inputEmail.parentElement.classList.remove('success');
            inputEmail.parentElement.classList.add('fail');
            isEmailSuccess = false;
        }
    }
    activateButton();
});

inputMessage.addEventListener('keyup', function checkMessage() {
    if (inputMessage.value.length <= 0) {
        overallError.innerHTML = 'This field is required';
        inputMessage.classList.remove('input-success');
        inputMessage.classList.add('input-fail');
        inputMessage.parentElement.classList.remove('success');
        inputMessage.parentElement.classList.add('fail');
        isMessageSuccess = false;
    } else if (inputMessage.value.length <= 20) {
        overallError.innerHTML = 'Your message is too short';
        inputMessage.classList.remove('input-success');
        inputMessage.classList.add('input-fail');
        inputMessage.parentElement.classList.remove('success');
        inputMessage.parentElement.classList.add('fail');
        isMessageSuccess = false;
    } else if (inputMessage.value.length > 500) {
        overallError.innerHTML = 'Your message is too long';
        inputMessage.classList.remove('input-success');
        inputMessage.classList.add('input-fail');
        inputMessage.parentElement.classList.remove('success');
        inputMessage.parentElement.classList.add('fail');
        isMessageSuccess = false;
    } else {
        overallError.innerHTML = '';
        inputMessage.classList.remove('input-fail');
        inputMessage.classList.add('input-success');
        inputMessage.parentElement.classList.remove('fail');
        inputMessage.parentElement.classList.add('success');
        isMessageSuccess = true;
    }
    activateButton();
});