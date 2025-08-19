const form = document.getElementById('userform');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPwd = document.getElementById('confirmPwd');
const email = document.getElementById('email');
const city = document.getElementById('city');
const phone = document.getElementById('phone');
let registerBtn = document.querySelector('button');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateUserInputs(e);
})

function validateUserInputs() {
    const uName = username.value;
    console.log(`username - ${uName}`);
    if (uName === "") {
        onFailed(username, "Username cannot be spaces")
    }else{
        onSuccess(username);
    }
}

function onFailed(el, msg) {
    const parentElement = el.parentElement;
    const displayError = parentElement.querySelector('span')
    displayError.innerText = msg;
    parentElement.classList.add('error');
    parentElement.classList.remove('success');

}

function onSuccess(el) {
    const parentElement = el.parentElement;
    const displayError = parentElement.lastElementchild;
    parentElement.classList.remove('success');
    parentElement.classList.add('error');
}