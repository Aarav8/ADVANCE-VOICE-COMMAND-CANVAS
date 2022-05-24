x = 0;
y = 0;
screen_width=0;
screen_height=0;
speak_data="";
to_number="";
apple="";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload()
{
    apple="apple.png"
    loadImage(apple);
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) 
{

 console.log(event); 
 to_number=Number(event);
 content = event.results[0][0].transcript;
 if(Number.isInteger(to_number)) 
 {
    document.getElementById("status").innerHTML="Started drawing apple";
    draw_apple="draw";
 }
 document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() 
{
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;

 createCanvas(screen_width,screen_height-150);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i=1;i<=to_number;i++)
    {
        x=Math.floor(Math.random*700);
        y=Math.floor(Math.random*400);
        image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data=to_number+"Appeles Drawn";
    speak(speak_data);
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}