document.getElementById("start").addEventListener("click", () => {
  const width = parseInt(document.getElementById("width").value, 10);
  const growth = parseInt(document.getElementById("growth").value, 10);
  const rate = parseInt(document.getElementById("rate").value, 10);
  const numCircles = parseInt(document.getElementById("numCircles").value, 10);

  for (let i = 0; i < numCircles; i++) {
    createCircle(width, growth, rate);
  }
});

function createCircle(initialWidth, growthAmount, growRate) {
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.style.width = `${initialWidth}px`;
  circle.style.height = `${initialWidth}px`;
  circle.style.left = `${Math.random() * (window.innerWidth - initialWidth)}px`;
  circle.style.top = `${Math.random() * (window.innerHeight - initialWidth)}px`;

  circle.addEventListener("click", () => {
    circle.remove();
  });

  document.body.appendChild(circle);

  let currentWidth = initialWidth;

  setInterval(() => {
    currentWidth += growthAmount;
    circle.style.width = `${currentWidth}px`;
    circle.style.height = `${currentWidth}px`;
  }, growRate);
}
