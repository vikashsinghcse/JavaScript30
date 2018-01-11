window.addEventListener("keydown", playDrum);

function playDrum(e) {
  const keyNote = e.keyCode;
  const notes = document.querySelector(`audio[data-key="${keyNote}"]`);
  const drum = document.querySelector(`.drum[data-key="${keyNote}"]`);
  if (!notes) {
    return;
  }
  notes.currentTime = 0;
  notes.play();
  drum.classList.add("drum-playing");
}

function removePlaying(e) {
  if (e.propertyName != "transform") {
    return;
  }
  this.classList.remove("drum-playing");
}
const drums = document.querySelectorAll(".drum");
drums.forEach(drum => drum.addEventListener('transitionend', removePlaying));
window.addEventListener("keypress", playDrum);

function playDrum(e) {
  const keyNote = e.keyCode;
  // console.log(keyNote);
  const notes = document.querySelector(`audio[data-key="${keyNote}"]`);
  notes.play();
  // console.log(notes);
}
