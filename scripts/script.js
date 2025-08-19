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
    validateUserInputs();
})

function validateUserInputs() {
    const uName = username.value;
    console.log(`username - ${uName}`);
}