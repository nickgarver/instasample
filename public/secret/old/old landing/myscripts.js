function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.form1.email.focus();
    document.querySelector("#popup").style.display = "block";
    document.querySelector("#popup2").style.display = "none";
  } else {
    document.form1.email.focus();
    document.querySelector("#popup2").style.display = "block";
    document.querySelector("#popup").style.display = "none";
  }
}