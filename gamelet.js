const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

function handleKeyPress(event) {
  if (event.code === "ArrowLeft") {
    position -= 50;
  }

  if (event.code === "ArrowRight") {
    position += 50;
  }

  if (position < 0) {
    position = 0;
  }
  refresh();
}

function refresh() {
  ball.style.left = position + "px";
}
