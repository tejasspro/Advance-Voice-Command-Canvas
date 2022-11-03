x = 0;
y = 0;
screen_w = 0;
screen_h = 0;
apple = 0;
setup.p = "";
to_number = 0;


draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    if(Number.isInteger(to_number) = true){
      draw_apple = "set";
    }else{
      draw_apple ="The Speech Has Not Recognized a Number"
    }

}
function preload() {
  apple = loadImage("apple.png");
}

function setup() {
  screen_w = window.innerWidth;
  screen_h = window.innerHeight;

  canvas = createCanvas(screen_w, screen_h-150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }

  for(var i = 1; i <= to_number; i++){
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple, x, y, 50, 50);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = to_number +"Apples Drawn";
}
