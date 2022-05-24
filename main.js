x = 0;
y = 0;
screen_width=0;
screen_height=0;
speak_data="";
to_number="";
apple="apple.png";
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload()
{
    apple=loadImage("apple.png");
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event,error) 
{
  if (error)
  {
    console.error(error);
  }
 console.log(to_number); 
 content = event.results[0][0].transcript;
 to_number=Number(content);
 if(Number.isInteger(to_number)) 
 {
   console.log(to_number);
    document.getElementById("status").innerHTML="Started drawing apple";
    draw_apple="draw";
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    console.log(draw_apple); 
 }
 else
 {
   document.getElementById("status").innerHTML="The speech has not recognized a number";
 }
}

function setup() 
{
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;

 createCanvas(screen_width,screen_height-150);
}

function draw() 
{
  if(draw_apple == "draw")
  {
    console.log(draw_apple);
    console.log(to_number);
    for(var i=1;i<=to_number;i++)
    {
        x=Math.floor(Math.random()*700);
        y=Math.floor(Math.random()*400);
        console.log(x);
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
