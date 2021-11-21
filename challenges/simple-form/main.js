const getId = (id) => document.getElementById(id);
const getClass = (classes) => document.getElementsByClassName(classes);

let userName = getId('username'),
    emailId = getId('email'),
    passWord = getId('password'),
    form = getId('form');

let errorMsg = getClass('error'),
    successIcon = getClass('success-icon'),
    failureIcon = getClass('failure-icon');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(emailId.value)

    validate(userName, 0, 'Username cannot be blank');
    validate(emailId, 1, 'Email cannot be blank');
    validate(passWord, 2, 'Password cannot be blank');
})

const validate = (id, serial, message) => {
    if(id.value.trim() === '') {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';
    } else {
        errorMsg[serial].innerHTML = '';
        id.style.border = "2px solid green";

        // icons
        failureIcon[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';
    }
}
