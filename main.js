function preload() {
    console.log("preload")
}

function setup() {
    console.log("setup")

    canvas = createCanvas(1000, 500)
    canvas.position(180, 140)

    webcam = createCapture(VIDEO)
    webcam.hide()
}

function draw() {
    image(webcam, 250, 50, 500, 400);

    fill(204, 101, 192, 127);
    stroke(127, 63, 120);

    //rectangles
    rect(200, 20, 600, 25);
    rect(200, 460, 600, 25);
    rect(178, 47, 20, 411);
    rect(800, 47, 20, 411);

    fill(167, 33, 160);
    stroke(157, 123, 220);

    //circles
    circle(190, 35, 70);
    circle(810, 35, 70);
    circle(190, 465, 70);
    circle(810, 465, 70);
}

function save_img() {
    save("img.jpeg")
}