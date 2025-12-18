var bgColor;
let img;
let checkpress = false;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvasWrapper");

  bgColor = 0;

  let uploadElement = document.getElementById("imageUpload");
  uploadElement.addEventListener("change", handleImageUpload);
}

function handleImageUpload(event) {
  let file = event.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      img = loadImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }
}

function draw() {
  background(bgColor);

  if (img != null && checkpress == false) {
    push();
    translate(mouseX, mouseY);
    image(img, -width / 2, -height / 2, width, height);
    pop();
  }
}
