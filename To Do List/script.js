console.log("Welcome to the To-Do list");

let inputBox = document.getElementsByClassName("input")[0];
let listBox = document.getElementsByClassName("list")[0];
let button = document.querySelector("button");

function addTask() {
    if (inputBox.value === '') {
        alert("Firstly Write Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}


listBox.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", listBox.innerHTML);
}

function showTask() {
    listBox.innerHTML = localStorage.getItem("data");
}

showTask();
