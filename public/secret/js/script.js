$(document).ready(function()
        {
            var path = window.location.pathname;
            var page = path.split("/").pop();
            var is_root = window.location.pathname == "/"; //Equals true if we're at the root
            console.log(page);
            console.log(is_root);

            if (page=="download.html") {
                myFunction();
            }
            
            if (page=="about.html") {
                aboutHeightSet();
            }
            if (page=="index.html" || is_root) {
                // feedHeightSet();
                //     var wavesurfer = WaveSurfer.create({
                //     container: '#waveform',
                //     waveColor: 'lightgrey',
                //     progressColor: 'grey'
                // });
                // wavesurfer.load('https://firebasestorage.googleapis.com/v0/b/instasample-d8eea.appspot.com/o/kick%2F10.wav?alt=media&token=48017381-88ff-4de0-bd31-f799c9ec2346');
            
            }
            
            var myColors = new Array();
            myColors[0] = "#1abc9c";
            myColors[1] = "#2ecc71";
            myColors[2] = "#3498db";
            myColors[3] = "#9b59b6";
            myColors[4] = "#34495e";
            myColors[5] = "#16a085";
            myColors[6] = "#27ae60";
            myColors[7] = "#2980b9";
            myColors[8] = "#8e44ad";
            myColors[9] = "#2c3e50";
            myColors[10] = "#f1c40f";
            myColors[11] = "#e67e22";
            myColors[12] = "#e74c3c";
            myColors[13] = "#95a5a6";
            myColors[14] = "#f39c12";
            myColors[15] = "#c0392b";
            myColors[16] = "#7f8c8d";
            
var limit = 17,
    amount = 17,
    lower_bound = 0,
    upper_bound = 17,
    unique_random_numbers = [];

if (amount > limit) limit = amount; //Infinite loop if you want more unique
                                    //Natural numbers than existent in a
                                    //given range
while (unique_random_numbers.length < limit) {
    var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
    if (unique_random_numbers.indexOf(random_number) == -1) { 
        // Yay! new random number
        unique_random_numbers.push( random_number );
    }
}

            var rand = Math.floor(Math.random()*myColors.length); 
            $('#kick').css("background-color", myColors[unique_random_numbers[0]]);
            $('#snare').css("background-color", myColors[unique_random_numbers[1]]);
            $('#hat').css("background-color", myColors[unique_random_numbers[2]]);
            $('#open hat').css("background-color", myColors[unique_random_numbers[3]]);
            $('#bass').css("background-color", myColors[unique_random_numbers[4]]);
            $('#synth').css("background-color", myColors[unique_random_numbers[5]]);
            $('#perc').css("background-color", myColors[unique_random_numbers[6]]);
            $('#tom').css("background-color", myColors[unique_random_numbers[7]]);
            $('#808').css("background-color", myColors[unique_random_numbers[8]]);
            $('#rim').css("background-color", myColors[unique_random_numbers[9]]);
            $('#sample').css("background-color", myColors[unique_random_numbers[10]]);
            $('#ambient').css("background-color", myColors[unique_random_numbers[11]]);
            $('#foley').css("background-color", myColors[unique_random_numbers[12]]);
            $('#effects').css("background-color", myColors[unique_random_numbers[13]]);
            $('#vocal').css("background-color", myColors[unique_random_numbers[14]]);
            $('#perc').css("background-color", myColors[unique_random_numbers[15]]);
            $('#clap').css("background-color", myColors[unique_random_numbers[16]]);
        });
 
    //////////////////// Load Header, footer, Upload  /////////////////////

    $.getScript('https://code.jquery.com/jquery-1.10.2.js', function() {
            $(function(){
              $("#header").load("header.html"); 
              $("#footer").load("footer.html"); 
              $("#uploadModule").load("uploadModule.html"); 
            });
        });

    ///////////////////////// authenticate //////////////////////////////////
firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    ///////////////////////////////////////////////////////////////////////




function myFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    //document.getElementById("demo").innerHTML = txt;
    var newHeight = (h-87)/4;
    var x = document.getElementsByTagName("button");
    for (var i = 0; i < x.length; i++) {
         x[i].style.height = newHeight + "px";
         x[i].style.width = newHeight + "px";
         x[i].style.fontSize = (newHeight/8) + "px";
         document.getElementById("soulectionID").style.width = (newHeight*5) + "px";
    }
}

function aboutHeightSet() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    var temp = (h-111);
    document.getElementById("bio").style.height = temp + "px";
    document.getElementById("bio").style.fontSize = (h/700) + "em";
    // document.getElementsByTagName("li").style.width = w/10 + px;
}

    //////////////////////   audio streaming script /////////////////////////


function feedHeightSet() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    var temp = (h-111);
    document.getElementById("sampleFeed").style.height = (temp) + "px";
    document.getElementById("sampleFeed").style.width = (w) + "px";
    document.getElementById("waveform").style.width = (w-200) + "px";
}




    //////////////////////   display upload model /////////////////////////
            function displayUpload(elementId) {
              var modal = document.getElementById('msgErreur');
              if (elementId == "button") {
                modal.style.display = "block";
              }
            }
            window.onclick = function(event) {
                var modal = document.getElementById('msgErreur');
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }


    ///////////////////////////////////////////////////////////////////////


    //initialize firebase 
    $.getScript('https://www.gstatic.com/firebasejs/3.3.2/firebase.js', function() {
        window.onload = yourfunction;
              function yourfunction() { /* do stuff on page load */ 
              var config = {
                apiKey: "AIzaSyC9jUMxOvvdgcBvXecvpRiactG6ffbwTgg",
                authDomain: "instasample-d8eea.firebaseapp.com",
                databaseURL: "https://instasample-d8eea.firebaseio.com",
                storageBucket: "instasample-d8eea.appspot.com",
                };
                firebase.initializeApp(config);
                console.log("firebase initialized");
                var path = window.location.pathname;
                var page = path.split("/").pop();
                if (page=="index.html") {
                  grabSamples();
                }
              }
    });
   
    ////////////////////////////--  1  --//////////////////////////////////

    //download function
    function download(downloadType) {
        //get number of current samples for desired sample to download
        const dbRefType = firebase.database().ref().child(downloadType).child("count");
        var numberSamples;
        dbRefType.once('value', function(snapshot) { 
        numberSamples = parseInt(snapshot.val());
        //console.log("number of samples: " + numberSamples);
        randomNumbers(numberSamples,downloadType);
        });
    }



    ////////////////////////////--  2  --//////////////////////////////////
    //get 16 random numbers from 1 - number of current samples
    function randomNumbers(numberSamples,downloadType){
        var limit = 16,
        amount = 16,
        lower_bound = 1,
        upper_bound = numberSamples, //needs to be the amount of samples in the folder in firebase
        unique_random_numbers = [];

        if (amount > limit) limit = amount; //Infinite loop if you want more unique
                                            //Natural numbers than existent in a
                                            //given range
        while (unique_random_numbers.length < limit) {
            var random_number = Math.round(Math.random()*(upper_bound - lower_bound) + lower_bound);
            if (unique_random_numbers.indexOf(random_number) == -1) { 
                // Yay! new random number
                unique_random_numbers.push( random_number );
            }
        }
        //console.log("unique random numbers: " + unique_random_numbers);
        getLinks(unique_random_numbers,downloadType); 
    }



    ////////////////////////////--  3  --//////////////////////////////////
    //get 16 random samples in url from from the 16 random numbers
    function getLinks(unique_random_numbers,downloadType){
        unique_urls = [];
        for (var i = 0; i < 16; i++) {
            var storageRef = firebase.storage().ref(downloadType + "/" + unique_random_numbers[i] +".wav"); //file name
            //todo: get 16 random file links , zip with jszip, present download in img tag
            storageRef.getDownloadURL().then(function(url) {
            unique_urls.push(url);
            //console.log(unique_urls.length);
            if (unique_urls.length>15) {
            zipTheFiles(unique_urls,downloadType);
        }
            })
        }
    }

    ////////////////////////////--  4  --//////////////////////////////////
     function zipTheFiles(unique_urls,downloadType) {
            function urlToPromise(url) {
                return new Promise(function(resolve, reject) {
                    JSZipUtils.getBinaryContent(url, function (err, data) {
                        if(err) {
                            reject(err);
                        } else {
                            resolve(data);
                        }
                    });
                });
            }
        (function () {
      var zip = new JSZip();
      var count = 0;
      var zipFilename = "instasamplePack.zip";

      function bindEvent(el, eventName, eventHandler) {
        if (el.addEventListener){
          // standard way
          el.addEventListener(eventName, eventHandler, false);
        } else if (el.attachEvent){
          // old IE
          el.attachEvent('on'+eventName, eventHandler);
        }
      }

      // Blob
      var blobLink = document.getElementById(downloadType);
      if (JSZip.support.blob) {
        downloadWithBlob();
      } else {
        console.log("error");
      }
        function downloadWithBlob() {
        console.log("download type: " + downloadType);
        //console.log(unique_urls);
            unique_urls.forEach(function(url,index){
            var filename = downloadType + (index+1) + ".wav";
               zip.file(filename, urlToPromise(url), {binary:true});
               count++;
               if (count == unique_urls.length) {
             zip.generateAsync({type:'blob'}).then(function(content) {
                saveAs(content, zipFilename);
                console.log("zip completed");
             }).catch(function(e) { console.error(e); });

          }
            });
                        
        }


    })();

    }

    ///////////////////////////     upload   ////////////////////////



    function displayUpload(elementId) {
              var modal = document.getElementById('msgErreur');
              if (elementId == "button") {
                modal.style.display = "block";
              }
              if (elementId == "exit") {
                modal.style.display = "none";
              }
              if (elementId == "effect") {
                modal.style.display = "none";
              }
            }
            
            //////////////////////////////////////////////////////////////////////////////
              function removeSampleClass() {
                $("#sampleType").removeClass('sampleTypeError')
                $("#sampleType").addClass('sampleType')
              }

              function removeFileClass() {
                $("#fileButton").removeClass('fileButtonError')
                $("#fileButton").addClass('fileButton')
              }
              function removeNameClass() {
                $("#sampleName").removeClass('sampleNameError')
                $("#sampleName").addClass('sampleName')
              }


              // upload files and check for errors
              function uploadFile() {   //on GO
                  //get elements
                  var uploader = document.getElementById('uploader')
                  var fileButton = document.getElementById('fileButton')
                  //var file = fileButton.target.files[0]; //get file
                  var sampleName = document.getElementById('sampleName') //get sample name
                  var sampleType = document.getElementById('sampleType').options[document.getElementById('sampleType').selectedIndex].text;  //get folder location
                  var file = fileButton.files[0]; //get file
    
                  if (sampleType == "Select Type" && sampleName.value == "" && fileButton.value == "") {  //check both selection
                    $("#sampleType").addClass('sampleTypeError')
                    $("#sampleType").removeClass('sampleType')
                    $("#fileButton").addClass('fileButtonError')
                    $("#fileButton").removeClass('fileButton')
                    $("#sampleName").addClass('sampleNameError')
                    $("#sampleName").removeClass('sampleName')
                  }
                  else if (fileButton.value == "") {                            //check file selection
                    $("#fileButton").addClass('fileButtonError')
                    $("#fileButton").removeClass('fileButton')
                  }
                  else if (sampleName.value == "") {                            //check file selection
                    $("#sampleName").addClass('sampleNameError')
                    $("#sampleName").removeClass('sampleName')
                  }
                  else if (sampleType == "Select Type") {                       //check sample selection
                   $("#sampleType").addClass('sampleTypeError')
                    $("#sampleType").removeClass('sampleType')
                  }
                  else{    //upload if good
                  uploader.classList.remove('hide');  //unhide progress bar

                  //var numberSamples;
                  //get root reference
                  const dbRefType = firebase.database().ref().child(sampleType).child("count");
                  //add a count to database
                  var numberSamples;
                    dbRefType.once('value', function(snapshot) { 
                        numberSamples = parseInt(snapshot.val()) + 1;
                        hellYeahBoi();
                    });
                      
                  function writeSampleData(sampleType,sampleLocation,sampleName, downloadURL) {
                        var updates = {};
                        updates[sampleType + "/" + "count"] = numberSamples;
                        updates[sampleType + "/" + numberSamples + "/" + "name"] = sampleName.value;
                        updates[sampleType + "/" + numberSamples + "/" + "downloadURL"] = downloadURL;
                        updates[sampleType + "/" + numberSamples + "/" + "votes"] = "0";
                        firebase.database().ref().update(updates); 
                  }
                  //create storage reference with sampleType
                  function hellYeahBoi(){
                  //alert(numberSamples);
                  console.log(numberSamples);
                  var storageRef = firebase.storage().ref("/" + sampleType + "/" + numberSamples + "." + file.name.split('.').pop());
                  console.log(storageRef);

                  //upload file
                  var task = storageRef.put(file);

                  //update progress bar
                  task.on('state_changed',
                    function progress(snapshot){
                        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        uploader.value = percentage;
                    },
                    function error() {
                      alert('There was a problem uploading your file')
                    },
                    function complete() {
                      storageRef.getDownloadURL().then(function(url) {
                        writeSampleData(sampleType,storageRef,sampleName,url);
                      })
                    }
                  );



                  }
                  
                }
              }






              ///////////////////////  Browse Page  //////////////////////////////

$(window).scroll(function () {
        //- 10 = desired pixel distance from the bottom of the page while scrolling)
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
            var box = $("#sampleFeed");
            //Just append some content here
            box.html(box.html() + "<br />fa");
        }
});


function grabSamples() {
  var typeFilter = document.getElementById('typeFilter').value; //just using all for now
  var sortFilter = document.getElementById('sortFilter').value;
  console.log(typeFilter, sortFilter);
  //var typeList = ['808', 'ambient', 'bass', 'clap', 'effects', 'foley', 'hat', 'kick', 'open hat', 'perc', 'rim', 'sample', 'snare', 'synth', 'tom', 'vocal'];
  const dbRefType = firebase.database().ref(); //root folder
  // var tempCount;
  // var sampleList = [];
  console.log(dbRefType);

  switch(sortFilter) {
    case "0":
        top();
        //hot();
        break;
    case "1":
        top();
        //new();
        break;
    case "2":
        top();
        //random();
        break;
    case "3":
        top();
        break;
    default:
        console.log("error");
}

}





      //define global variables
      var feedNames = [];
      var feedURLs = [];
      var feedVotes = [];

function top() {
      console.log("top day");
          firebase.database().ref("808").orderByChild("votes").once("value",function(data) { 
          data.forEach(function(snapshot) {
              feedNames.push(name);
              feedURLs.push(downloadURL);
              feedVotes.push(votes);
          });
          //function to fill feed up with the next 10 elements
      });
}





 
