const button = document.querySelector(".btn");
let notesContainer = document.querySelector(".notes-container");




button.addEventListener("click", () => {
    let para = document.createElement("p");
    para.className = "notes";
    para.setAttribute("contenteditable", "true");
    let img = document.createElement("img");
    img.src = "Images/delete.png";
    notesContainer.appendChild(para).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
})
