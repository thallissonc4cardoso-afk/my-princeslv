const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const phrase = "I LOVE YOU LIVIA";
const fontSize = 20;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff69b4"; // Rosado
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    if (i % 4 === 0) {
      ctx.fillText(phrase, i * fontSize, drops[i] * fontSize);
    }

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 60);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});