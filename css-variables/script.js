const controls = document.querySelectorAll('.controls input');

function update() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}
controls.forEach(control => control.addEventListener('change', update));
controls.forEach(control => control.addEventListener('mousemove', update));
