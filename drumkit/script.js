window.addEventListener("keypress", playDrum);

function playDrum(e) {
  const keyNote = e.keyCode;
  // console.log(keyNote);
  const notes = document.querySelector(`audio[data-key="${keyNote}"]`);
  notes.play();
  // console.log(notes);
}
