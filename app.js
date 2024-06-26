const form = document.querySelector('#form');
const u_name = document.querySelector('#u_name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const c_password = document.querySelector('#c_password');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateInputs();
});

function validateInputs() {
    const u_nameVal = u_name.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const c_passwordVal = c_password.value.trim();

    if (u_nameVal === '') {
        displayError(u_name, 'This field is required');
    } else {
        setSuccess(u_name);
    }

    if (emailVal === '') {
        displayError(email, 'This field is required');
    } else if (!validateEmail(emailVal)) {
        displayError(email, 'Please enter a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        displayError(password, 'This field is required');
    } else if (passwordVal.length < 5) {
        displayError(password, 'Password must have at least 5 characters');
    } else {
        setSuccess(password);
    }

    if (c_passwordVal === '') {
        displayError(c_password, 'This field is required');
    } else if (c_passwordVal !== passwordVal) {
        displayError(c_password, 'This field does not match with the password');
    } else {
        setSuccess(c_password);
    }
}

function displayError(element, msg) {
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');
    errorElement.innerText = msg;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}

function setSuccess(element) {
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');
    errorElement.innerText = '';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');
}

const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
};
