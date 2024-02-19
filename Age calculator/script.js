
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    // age.innerHTML = "";

    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDayInmonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    let age = document.querySelector(".para");
    age.innerHTML = `You are <span> ${y3} </span> Years <span> ${m3} </span> Months <span> ${d3} </span> Days old`;
    // para.appendChild(age);
}


function getDayInmonth(year, month) {
    return new Date(year, month, 0).getDate();
}