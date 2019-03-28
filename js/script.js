

let currentTime = new Date();

let hour = 0;
let minutes = 0;

let b = 1;
let direction = 1;


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    hour = currentTime.getHours().map(0,12,0, TWO_PI);
    minutes = currentTime.getMinutes().map(0,60,0, TWO_PI);
    frameRate(30);
}
  
function draw(){
    background( b, 170, 0 );

    fill( 0, 170, 255-b );
    noStroke();

    arc(0,0,width*0.5,width*0.5, (hour + PI + HALF_PI) - (minutes * 0.5) , (hour + PI + HALF_PI) + (minutes * 0.5) );
    
    if(b >= 254 || b <= 0){
        direction = direction * -1;
    }
    b = b + direction;
}



Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

