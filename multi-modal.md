---
# layout: page
# title: a
permalink: /multi-modal/
---

<html>

<head>
  <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/addons/p5.sound.min.js"></script>
  <script src="https://unpkg.com/ml5@0.4.2/dist/ml5.min.js"></script>
  <meta charset="utf-8" />

  <style>
    h1 {text-align: center;}
  </style>

  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.1/css/font-awesome.min.css"/>
    <style tyle="text/css">
        body{
            font-family:verdana;
        }
        #result{
            /* height:640; */
            width: 50%;
            height: 10%;
            text-align:center;
            margin: 35% auto; /* centering the box */
            border:1px solid #ccc;
            padding:10px;
            box-shadow: 0 0 10px 0 #bbb;
            font-size: 14px;
            line-height: 25px;
        }
        button{
            font-size:20px;
            position: absolute;
            bottom: 30%;
            left:50%;
        }
    </style>

</head>

<body>
  <br>
  <h1>Multi-Modal Data Recording</h1>
  <script src="/assets/js/sketch.js"></script>

  <!-- Left Eye: (<span id="l_eye_x"></span>, <span id="l_eye_y"></span>) <br>
  Right Eye: (<span id="r_eye_x"></span>, <span id="r_eye_y"></span>) -->
  <!-- Right Wrist: (<span id="r_wrist_x"></span>, <span id="r_wrist_y"></span>) -->
  <!-- Left Eye: <span id="pose"></span>
  Right Ear: <span id="pose"></span>
  Left Ear: <span id="pose"></span>

  Pose: <span id="pose"></span>
  pose: <span id="pose"></span>
  pose: <span id="pose"></span> -->

</body>


<div id="result"></div>
<button onClick="startConverting();" type="button"><i class="fa fa-microphone"></i></button>

<script type="text/javascript">
//insert in html
var r=document.getElementById('result');

function startConverting (){
    //check this browser is chrome or not. because this application supported only in chrome browser
    
    if('webkitSpeechRecognition'in window){
        //Web speech API Function
        var speechRecognizer = new webkitSpeechRecognition();
        
        //continuous : you will catch mic only one time or not
        speechRecognizer.continuous = true;
        
        //interimResults : during capturing the mic you will send results or not
        speechRecognizer.interimResults = true;
        
        //lang : language (ko-KR : Korean, en-IN : englist)
        speechRecognizer.lang="en-IN";
        //start!
        speechRecognizer.start();
        var finalTranscripts = '';
        //if the voice catched onresult function will start
        speechRecognizer.onresult=function(event){
            var interimTranscripts='';
            for(var i=event.resultIndex; i < event.results.length; i++){
                var transcript=event.results[i][0].transcript;
                transcript.replace("\n","<br>");
                //isFinal : if speech recognition is finished, isFinal = true
                if(event.results[i].isFinal){
                    finalTranscripts+=transcript;
                }
                else{
                    interimTranscripts+=transcript;
                }
            }
                //insert into HTML
                r.innerHTML=finalTranscripts+'<span style="color:#999">'+interimTranscripts+'</span>';
        };
        speechRecognizer.onerror = function(event){

        };
    }
    else{
        //if browser don't support this function. this message will show in your web
        r.innerHTML ="your browser is not supported. If google chrome. Please upgrade!";
    }
}
</script>

</html>