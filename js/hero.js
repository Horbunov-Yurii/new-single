const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const seekBar = document.getElementById("seekBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const titleEl = document.querySelector(".hero-title");
const textEl = document.querySelector(".hero-text");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" + secs : secs}`;
}

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    console.log(audio);
    
    playPauseBtn.textContent = "⏸️";
    titleEl.style.color = "transparent";
    textEl.style.color = "transparent";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️";
    titleEl.style.color = "#fff"
    textEl.style.color = "#fff";
  }
});



audio.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  seekBar.value = (audio.currentTime / audio.duration) * 100;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

seekBar.addEventListener("input", () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
});


audio.addEventListener("ended", () => {
   playPauseBtn.textContent = "▶️";
  titleEl.style.color = "#fff";
  textEl.style.color = "#fff";

});