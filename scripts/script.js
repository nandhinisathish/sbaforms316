const form = document.getElementById('userform');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPwd = document.getElementById('confirmPwd');
const email = document.getElementById('email');
const city = document.getElementById('city');
const phone = document.getElementById('phone');
const msg = document.querySelector('span');
let registerBtn = document.querySelector('button');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateUserInputs();
})

function validateUserInputs() {
    const uName = username.value;
    const pwd = password.value;
    const cpwd = confirmPwd.value;
   //const phoneValue = phone.value;
    console.log(`username - ${uName}`);
    // if (uName === "") {
    //     onFailed(username, "Username cannot be spaces");
    // } else {
    //     onSuccess(username);
    // }
    console.log(`pwd`, pwd);
    console.log(`cpwd`, cpwd);
    if (pwd === "") {
        msg.innerText = "Password cannot be spaces";
        // onFailed(pwd, "Password cannot be spaces");
    } else if (pwd !== cpwd) {
        msg.innerText = "Password doesn't match";
    } else {
          msg.innerText = "";
        //onSuccess(pwd);
    }
}

function onFailed(el, msg) {
    const parentElement = el.parentElement;
    const displayError = parentElement.querySelector("span");
    displayError.innerText = msg;
    parentElement.classList.add('error');
    parentElement.classList.remove('success');

}

function onSuccess(el) {
    const parentElement = el.parentElement;
    const displayError = parentElement.lastElementchild;
    displayError.innerText = "";
    parentElement.classList.remove('success');
    parentElement.classList.add('error');
}