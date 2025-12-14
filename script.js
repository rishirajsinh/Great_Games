const frame = document.getElementById("gameFrame");

function loadGame(path) {
    frame.src = path;
    localStorage.setItem("lastGame", path);
}

function fullscreen() {
    if (frame.requestFullscreen) {
        frame.requestFullscreen();
    }
}

function toggleTheme() {
    document.body.classList.toggle("light");
}

// Load last played game
const last = localStorage.getItem("lastGame");
if (last) {
    frame.src = last;
}
