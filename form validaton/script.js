console.log("hello ");



let btn = document.getElementById("btn");
let container = document.getElementById("container");

function color() {
    console.log("javaa  ");
    container.style.background = "linear-gradient(90deg, white, black)";
    btn.style.background = "linear-gradient(90deg, black, white)";
}
function color2() {
    console.log("javaa  ");
    container.style.background = "linear-gradient(90deg, royalblue, brown)";
    btn.style.background = "linear-gradient(90deg, brown, royalblue)";
}
function color3() {
    console.log("javaa  ");
    container.style.background = "linear-gradient(90deg, green, yellow)";
    btn.style.background = "linear-gradient(90deg, yellow, green)";
}



var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var msgError = document.getElementById("message-error");
var emailError = document.getElementById("email-error");
var submitError = document.getElementById("submit-error");


function validateName() {
    var names = document.getElementById("name").value;

    if (names.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!names.match(/^[A-za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateNo() {
    var no = document.getElementById("contact").value;

    if (no.length !== 10) {
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if (!no.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateEmail() {
    var emailid = document.getElementById("emailId").value;

    if (emailid.length === 0) {
        emailError.innerHTML = 'Email is requried';
        return false;
    }
    if (!emailid.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMsg() {
    var msg = document.getElementById("message-box").value;

    var required = 30;
    var left = required - msg.length;

    if (left > 0) {
        msgError.innerHTML = left + 'more character required';
        return false;
    }
    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateEmail || !validateName() || !validateMsg() || !validateNo()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the error to submit';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}