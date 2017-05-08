   var wavesurfer = WaveSurfer.create({
     	container: '#waveform',
     	waveColor: '#777777',
     	progressColor: '#2ecc71',
		height: '75',
		maxCanvasWidth: '2560'
    });

    wavesurfer.load('https://firebasestorage.googleapis.com/v0/b/instasample-d8eea.appspot.com/o/808%2F1.wav?alt=media&token=bfbabbfd-1c2d-40b8-9d69-396736b4c3bf');


var score = document.getElementById("scoreCounter");
score.innerHTML = "0";
var scoreValue = 0;
checkScore();

function upVote() {
  scoreValue++;
  score.innerHTML = scoreValue;
  checkScore();
}

function downVote() {
  scoreValue--;
  score.innerHTML = scoreValue;
  checkScore();
}

function checkScore() {
  if (scoreValue < 0) {
    score.style.color = "#FF586C";
  } else if (scoreValue > 0) {
    score.style.color = "#6CC576";
  } else {
    score.style.color = "#666666";
  }
}

function togglePlay(id) {
	wavesurfer.playPause();
	var innerText = document.getElementById(id).innerHTML;
	if (innerText == "play_circle_outline") {
		document.getElementById(id).innerHTML = "pause_circle_outline";
	} else {
		document.getElementById(id).innerHTML = "play_circle_outline";
	}
}


wavesurfer.on('finish', function () {
	var id = "samplePlay1";
	wavesurfer.seekAndCenter(0);
	var innerText = document.getElementById(id).innerHTML;
	if (innerText == "play_circle_outline") {
		document.getElementById(id).innerHTML = "pause_circle_outline";
	} else {
		document.getElementById(id).innerHTML = "play_circle_outline";
	}
});

function toggleAdd(id) {
	var innerText = document.getElementById(id).innerHTML;
	if (innerText == "add") {
		document.getElementById(id).innerHTML = "check_box";
	} else {
		document.getElementById(id).innerHTML = "add";
	}
}




// get sample type and sort by

//  loop through and populate 10 samples with sort by
//every time the bottom of the page is reached load 10 more

// Things for each sample to get
// -name
// -type
// -votes
// -download url so you can play it




