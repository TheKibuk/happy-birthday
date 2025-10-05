// Неонові зірочки
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function Star(x, y, size, speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
  this.alpha = Math.random() * 0.5 + 0.5;
}

Star.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(0, 255, 255, ${this.alpha})`;
  ctx.fill();
};

Star.prototype.update = function () {
  this.y += this.speed;
  if (this.y > canvas.height) {
    this.y = 0;
    this.x = Math.random() * canvas.width;
  }
  this.draw();
};

let stars = [];
for (let i = 0; i < 100; i++) {
  stars.push(
    new Star(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2, Math.random() * 0.7 + 0.2)
  );
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star) => star.update());
  requestAnimationFrame(animate);
}
animate();

// Кнопка — плавний скрол до галереї
document.getElementById("surpriseBtn").addEventListener("click", () => {
  document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
});
