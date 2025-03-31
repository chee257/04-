let img_1bar;
let img_2ads;
let img_3product;
let img_4icon;
let img_5ai;
let img_6green;

let state=0;

function preload(){
  img_1bar=loadImage('1bar.png');
  img_2ads=loadImage('2ads.png');
  img_3product=loadImage('3product.png');
  img_4icon=loadImage('4icon.png');
  img_5ai=loadImage('5ai.png');
  img_6green=loadImage('6green.png');
}

function setup() {
  createCanvas(393, 852);
}

function draw() {
  background(220);
 if(state==0){
  image(img_1bar, 0,0,393,128);
  image(img_2ads, 0,128,393,284);
  image(img_3product,0,412,393,440);
  image(img_4icon,0,764,393,88);
  image(img_5ai,320,688,60,60);
 }else if(state==1){
  image(img_1bar, 0,0,393,128);
  image(img_2ads, 0,128,393,284);
  image(img_3product,0,412,393,440);
  image(img_4icon,0,764,393,88);
  image(img_5ai,320,688,60,60);
  image(img_6green,0,612,393,152);
 }
}

function mouseClicked(){
  if(mouseX>=320 && mouseX <=380){
    if(mouseY >= 688 && mouseY <= 748){
      if(state==0){
        state=1;
      }else if(state==1){
        state=0;
      }
    }
  }
}