let progress = document.getElementById("progress")
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let image = document.getElementById("image");
let nextsong = document.getElementById("nextsong");
let header = document.getElementById("header");
let para = document.getElementById("para");

let singerName = ["Arijit Singh", "Atif aslam", "Jubin Notiyal", "Arman malik", "Honey Singh"];
let pra = [" Song of Arijit sing ", "This Song of Atif aslam", "This Song of Jubin notiyal", "This Song of Arman Malik", "This Song of Honey Singh"];




let no = 1;

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");

    }
}


if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    // song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

function nextPlay() {
    no++;
    if (no === 6) {
        no = 1;
    }
    image.src = `images/img${no}.jpg`
    song.src = `music/music${no}.mp3`
    header.innerHTML = singerName[no - 1];
    para.innerHTML = pra[no - 1];
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");

    }

}

function prevPlay() {
    no--;
    if (no === 0) {
        no = 5;

    }
    image.src = `images/img${no}.jpg`
    song.src = `music/music${no}.mp3`
    header.innerHTML = singerName[no - 1];
    para.innerHTML = pra[no - 1];
    // song.play();
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");

    }
}
