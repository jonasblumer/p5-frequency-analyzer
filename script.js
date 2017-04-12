var sound;
var button;
var fft;
var spectrum;
var cw = 640;
var ch = 480;
var res = 64;
var width;

function togglePlay(){
  if(!sound.isPlaying()){
    sound.play();
    button.html("pause");
  }
  else {
    sound.pause();
    button.html("pause");
  }
}

function preload() {
  sound = loadSound('livingston+_MAS.mp3');
}

function setup(){
  createCanvas(cw, ch);
  colorMode(HSB);
  background(0);
  width = cw / res;
  button = createButton("play");
  button.mousePressed(togglePlay);
  fft = new p5.FFT(0, res);
  console.log('hello');

}
function draw(){



  spectrum = fft.analyze();
  background(spectrum[0], 255, 255);
  for(i = 0; i < spectrum.length; i++){
    var amp = spectrum[i];
    var y = map(amp, 0, 300, ch, 0);
    var color = map(i*width, 0, cw, 0, 255);
    fill(color, 255, 255);
    rect(i*width, y, width, ch-y);
  }
}
