let audio=[];
let j=1;
var premuto = false;

function preload(){
  // put preload code here
  soundFormats('mp3','ogg');
    for (i=1; i<4; i++) {
    audio[i] = loadSound('suoni/audio' + i + '.mp3');
  }
}

function setup() {
  //createCanvas(windowWidth,windowHeight)

}

function draw() {
  // put drawing code here
  // setTimeout(suonaurla, 5000);

}

function mousePressed() {

 if (premuto == vero) {
   suonaurla();
 }
  premuto = vero;
}

function suonaurla(){

audio[1].play();
audio[1].onended(suonaurla2);
}

function suonaurla2() {
  audio[2].play();
  audio[2].onended(suonaurla3);
}

function suonaurla3() {
  audio[3].play();
  audio[3].onended(suonaurla);
}



//   // for (j=1; j<4; j++){
//   //   if (j<4){
//   //     urla[j].play();
//   //   }
//   // }
//   // if (j===4){
//   //   j=0;
//   // }
//
//   //   if (j<4) {
//   //   urla[j].play();
//   //   j++;
//   // } else if (j===4){
//   //   j=0;
//   // }
//
// }
