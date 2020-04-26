// Music player

const pPause = document.getElementById("play-pause");
const progressBar = document.getElementById("progress-bar");
const song = document.getElementById("song");
const currentTime = document.getElementById("currentTime");
const durationTime = document.getElementById("durationTime");
const moreMusic = document.getElementById("more-music");

let playing = true;
function playPause() {
  if (playing) {
    pPause.src = "img/icons/pause.png";
    song.play();
    playing = false;
  } else {
    pPause.src = "img/icons/play.png"
    song.pause();
    playing = true;
  }
}

function updateProgressValue() {
	progressBar.max = song.duration;
	progressBar.value = song.currentTime;
	currentTime.innerHTML = formatTime(song.currentTime);
	durationTime.innerHTML = formatTime(song.duration);
	if (song.duration === song.currentTime) {
		song.currentTime = 0;
		playPause();
	}
};

setInterval(updateProgressValue, 500);

function changeProgressBar() {
  song.currentTime = progressBar.value;
};

function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

function changeProgressBar() {
    song.currentTime = progressBar.value;
};
