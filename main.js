prediction_1="";
Webcam.set({
height:300,
width:310,
image_format:'png',
png_quality:100
});
Webcam.attach('#webcam');
function takesnapshot()
{
Webcam.snap(function (data_uri){
document.getElementById("snapshot").innerHTML='<img id="i1" src="'+ data_uri + '">';
});
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zKOOvozZw/model.json",modelLoaded);
function modelLoaded() {
console.log("modelloaded");
}
function speak(){
var Synth=window.speechSynthesis;
utterThis="Prediction 1 is"+ prediction_1;
details=new SpeechSynthesisUtterance(utterThis);
Synth.speak(details);}