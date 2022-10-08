Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100,
  });
  
  camera = document.getElementById("camera");
  Webcam.attach("#camera");
  
  function take_snapshot() {
    Webcam.snap(function (data_uri) {
      document.getElementById("result").innerHTML =
        '<img id="capture_image" src="' + data_uri + '"/>';
    });
  }
  console.log("ml5.version", ml5.version);
  classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/la-W-WNYs/model.json",
    modelLoaded
  );
  
  function modelLoaded() {
    console.log("Model Loaded!");
  }
  
  function modelLoaded() {
    console.log("Model Loaded!");
  }
  
  function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
  }
  
  function check(){
  img=document.getElementById('capture_image');
  classifier.classify(img,gotResults);
  }
  
  
  function gotResults (error, results){
  if (error) {
  console.error(error);
  } else {
    console.log (results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    prediction_1=results[0].label;
    prediction_2=results[1].label;
    speak();
    if(results[0].label=="Super")
    {
      document.getElementById("update_gesture").innerHTML="&#128076;";
    }
    if(results[0].label=="Horns")
    {
      document.getElementById("update_gesture").innerHTML=">&#129304;";
    }
    if(results[0].label=="Thumbs Up")
    {
      document.getElementById("update_gesture").innerHTML="&#128077;";
    }
    if(results[0].label=="Peace")
    {
      document.getElementById("update_gesture").innerHTML="&#9996;";
    }
    if(results[0].label=="Clap")
    {
      document.getElementById("update_gesture").innerHTML="&#128079;";
    }
    if(results[0].label=="Vulcan Salute")
    {
      document.getElementById("update_gesture").innerHTML="&#128406;";
    }
    if(results[0].label=="Raised Fist")
    {
      document.getElementById("update_gesture").innerHTML="&#9994;";
    }


    if(results[1].label=="Super")
    {
      document.getElementById("update_gesture2").innerHTML="&#128076;";
    }
    if(results[1].label=="Horns")
    {
      document.getElementById("update_gesture2").innerHTML=">&#129304;";
    }
    if(results[1].label=="Thumbs Up")
    {
      document.getElementById("update_gesture2").innerHTML="&#128077;";
    }
    if(results[1].label=="Peace")
    {
      document.getElementById("update_gesture2").innerHTML="&#9996;";
    }
    if(results[1].label=="Clap")
    {
      document.getElementById("update_gesture2").innerHTML="&#128079;";
    }
    if(results[1].label=="Vulcan Salute")
    {
      document.getElementById("update_gesture2").innerHTML="&#128406;";
    }
    if(results[1].label=="Raised Fist")
    {
      document.getElementById("update_gesture2").innerHTML="&#9994;";
    }
  }
  }
  
  
  