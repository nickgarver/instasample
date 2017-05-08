// Scroll Reveal
window.sr = new scrollReveal(config);

var config = {
  easing: 'ease',
  reset: true
}

// // Font Settings
// (function(d) {
//   var config = {
//     kitId: 'xyl8bgh',
//     scriptTimeout: 3000
//   },
//   h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
// })(document);


function subscribe() {

  //initialize firebase 
    $.getScript('https://www.gstatic.com/firebasejs/3.3.2/firebase.js', function() {
            // window.onload = yourfunction;
            // function yourfunction() {
              var config = {
                apiKey: "AIzaSyC9jUMxOvvdgcBvXecvpRiactG6ffbwTgg",
                authDomain: "instasample-d8eea.firebaseapp.com",
                databaseURL: "https://instasample-d8eea.firebaseio.com",
                storageBucket: "instasample-d8eea.appspot.com",
                };
                firebase.initializeApp(config);
                console.log("firebase initialized");
                prepSub();
              // }
    });
}


function prepSub() {
  //get values
  var email = document.getElementById('email').value;
  const dbRefType = firebase.database().ref().child("Subscription").child("count");

  dbRefType.once('value', function(snapshot) { 
  var numberSubs = (parseInt(snapshot.val()) + 1);
  console.log("number of messages: " + numberSubs);
  actuallySub(numberSubs,email);
        });
}

function actuallySub(numberSubs,email) {
    var updates = {};
    updates['Subscription/' + "count"] = numberSubs;
    updates['Subscription/' + "email_" + numberSubs] = email;
    firebase.database().ref().update(updates); 
    
    document.getElementById('result').innerHTML = "Thank you for your support";
}