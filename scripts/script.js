/* 
Variable declaration
*/

const form = document.getElementById('userform');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPwd = document.getElementById('confirmPwd');
const email = document.getElementById('email');
const city = document.getElementById('city');
const phone = document.getElementById('phone');
const msg = document.querySelector('span');
let registerBtn = document.querySelector('button');


/* 
Adding Event listener - common for username and password 
*/
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateUserInputs() && validatePhone()) {
        window.alert("Form submitted successfully!");
        form.reset();
        document.querySelectorAll('.userDetailsGrp').forEach(el => {
            el.classList.remove('error', 'success');
            el.querySelector('.error-msg').innerText = "";
        });
    } else {
        let element = document.createElement('h2');
        element.innerText = "Form submission blocked due to validation errors. Please correct the fields. "
    }
})

/* 
* Adding Event listener - for phone field only
*/
phone.addEventListener('input', () => {
    // Remove any non-digit characters
    phone.value = phone.value.replace(/\D/g, '');
    validatePhone(phone);
});

/* 
* Validates each character entered is numeric and it check for each submission
*/
function validatePhone(phone) {
    let phoneStatus = true;
    const phoneValue = phone.value;
    const phoneRegex = /^\d+$/;
    if (phoneValue === "") {
        onFailed(inputElement, "Phone number cannot be empty");
        phoneStatus = false;
    } else if (!phoneRegex.test(phoneValue)) {
        onFailed(inputElement, "Phone number must contain only digits");
        phoneStatus = false;
    } else {
        onSuccess(inputElement);
    }
    return phoneStatus;
}

/* 
Validation for username and password
*/
function validateUserInputs() {
    const uName = username.value;
    const pwd = password.value;
    const cpwd = confirmPwd.value;

    let status = true;
    console.log(`username - ${uName}`);
    if (uName === "") {
        status = false;
        onFailed(username, "Username cannot be spaces");
    } else {
        onSuccess(username);
    }
    console.log(`pwd`, pwd);
    console.log(`cpwd`, cpwd);
    if (pwd === "") {
        status = false;
        //msg.innerText = "Password cannot be spaces";
        onFailed(password, "Password cannot be spaces");
    } else if (pwd !== cpwd) {
        status = false;
        // msg.innerText = "Password doesn't match";
        onFailed(confirmPwd, "Password doesn't match");
    } else {
        //msg.innerText = "";
        onSuccess(pwd);
    }
    return status;
}
/* 
status check for failure and creating span element if it doesn't exist
 */
function onFailed(el, msg) {
    const parentElement = el.parentElement;
    let displayError = parentElement.querySelector("span");
    if (!displayError) {
        displayError = document.createElement('span');
        displayError.classList.add('error-msg');
        parentElement.appendChild(displayError);
    }

    displayError.innerText = msg;
    parentElement.classList.add('error');
    parentElement.classList.remove('success');

}

/* 
status check for success
 */
function onSuccess(el) {
    const parentElement = el.parentElement;
    let displayError = parentElement.lastElementChild;
    displayError.innerText = "";
    parentElement.classList.remove('error');
    parentElement.classList.add('success');

}