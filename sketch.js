function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent("display-pattern");

    noStroke();
    noLoop();
    rectMode(CENTER);
}
  
function draw() {    
    background(20);
    let first_square = {x: 300, y: 300, w: 300, c: new Color(255, 255, 255)};
    let slider = document.getElementById("iteration-slider");
    layered_square(first_square, slider.value);
}
  
function layered_square(first_square, iterations) {
    draw_square(first_square);
    
    if(iterations <= 0) return;
    
    let left_square = JSON.parse(JSON.stringify(first_square));
    let right_square = JSON.parse(JSON.stringify(first_square));
    let top_square = JSON.parse(JSON.stringify(first_square));
    let bottom_square = JSON.parse(JSON.stringify(first_square));
    
    let new_color = new Color(first_square.c.get_r(), first_square.c.get_g(), first_square.c.get_b());
    new_color.set_r(first_square.c.get_r() - 50);
    new_color.set_b(first_square.c.get_b() - 20);
    
    left_square.x = first_square.x - first_square.w / 2;
    left_square.w = first_square.w / 2;
    left_square.c = new_color;
    layered_square(left_square, iterations - 1);
    
    right_square.x = first_square.x + first_square.w / 2;
    right_square.w = first_square.w / 2;
    right_square.c = new_color;
    layered_square(right_square, iterations - 1);
    
    top_square.y = first_square.y - first_square.w / 2;
    top_square.w = first_square.w / 2;
    top_square.c = new_color;
    layered_square(top_square, iterations - 1);
    
    bottom_square.y = first_square.y + first_square.w / 2;
    bottom_square.w = first_square.w / 2;
    bottom_square.c = new_color;
    layered_square(bottom_square, iterations - 1);
}
  
function draw_square(square) {
    fill(square.c.to_color());
    rect(square.x, square.y, square.w);
}
  
class Color {
    
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    
    get_r() {return this.r;}
    get_g() {return this.g;}
    get_b() {return this.b;}
    
    set_r(r) {this.r = r;}
    set_g(g) {this.g = g;}
    set_b(b) {this.b = b;}
    
    to_color(){return color(this.r, this.g, this.b);}
    
}