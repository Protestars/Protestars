let audio=[];
let audioArrayLength = 40;
let currentAudioIndex = 1;

let i = 1;
let volume_audio = 0.5;
let start = false;
let primoclick = true;

function preload(){

}

function setup() {
  soundFormats('mp3','ogg', 'wav');
  loadAudioTracks(currentAudioIndex);

  paragraph = select('#soundonoff');

  // paragraph.mousePressed(cambiaVolume);
  // paragraph.mousePressed(suonaurla);
  // paragraph.mousePressed(solounavolta);
  paragraph.mousePressed(funzioniunite);

  // button = createButton("play");
  // button.mousePressed(cambiaVolume);
}

function draw() {
  // put drawing code here

}

function funzioniunite(){
  solounavolta();
  cambiaVolume();
}

function solounavolta(){
  if (start == false){
    suonaurla();
    // console.log("entri in solounavolta");
  }
  start = true;
}


function suonaurla(){
if (start == false){
  start = true;
  volume_audio = 1;
}
setVolume();
audio[i].play();
audio[i].onended(aumentai);

}

function aumentai(){
  if (i<(currentAudioIndex-1)){
    i++;
  } else if (i = (currentAudioIndex-1)){
    i = 1;
  }
  suonaurla();
}

function cambiaVolume(){
if (volume_audio == 1 && start == true && primoclick == false){
  volume_audio = 0;
  console.log(volume_audio);
} else if (volume_audio == 0 && start == true && primoclick == false){
  volume_audio = 1;
  console.log(volume_audio);
}
primoclick = false;
setVolume();
}

function setVolume(){
  audio[i].setVolume(volume_audio);
}

function loadAudioTracks (index) {
  audio[index] = loadSound('suoni/audio' + index, audioCaricato, audioNonTrovato);
}

function audioCaricato () {
  console.log(`file ${currentAudioIndex} trovato!`)
  if (currentAudioIndex < audioArrayLength) {
    currentAudioIndex++;
    loadAudioTracks(currentAudioIndex);
  }
}

function audioNonTrovato () {
  console.log('tutti gli audio sono stati caricati, ciao')
  audio.pop();
}
