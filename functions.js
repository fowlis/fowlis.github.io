function meow() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function clickCounter() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = "Clicks: " + clicks;
}

function calculateAmountinTime() {
  document.getElementById("output1").innerHTML = "";
  var x = document.getElementById("cps").value;
  var y = document.getElementById("time").value;
  if (x == "" || y == "") {
    document.getElementById("output1").innerHTML = "";
    noValue();
  } else {
    var timeformat = "";

    let formatvar = "";
    let format = document.forms[0];
    let i;

    for (i = 0; i < format.length; i++) {
      if (format[i].checked) {
        formatvar = formatvar + format[i].value + "";
      }
    }

    console.log(formatvar);
    timeformat = formatvar;

    if (timeformat == "seconds") {
      document.getElementById("output1").innerHTML =
        "You will make " + (z = x * y) + " cookies in " + y + " seconds!";
      console.log("1 run succ");
      return;
    } else if (timeformat == "minutes") {
      document.getElementById("output1").innerHTML =
        "You will make " + (z = x * 60 * y) + " cookies in " + y + " minutes!";
      console.log("2 run succ");
      return;
    } else if (timeformat == "hours") {
      z = x * 60;
      z = z * 60;
      document.getElementById("output1").innerHTML =
        "You will make " + z + " cookies in " + y + " hours!";
      console.log("3 run succ");
      return;
    }
  }
}

function calculateTimeforAmount() {
  var x = document.getElementById("cps2").value;
  var y = document.getElementById("amount").value;
  if (x == "" || y == "") {
    document.getElementById("output2").innerHTML = "";
    noValue();
  } else {
    z = y / x;
    console.log(z);
    var z = Number(z);
    var h = Math.floor(z / 3600);
    var m = Math.floor((z % 3600) / 60);
    var s = Math.floor((z % 3600) % 60);
    console.log(h);
    console.log(m);
    console.log(s);

    document.getElementById("output2").innerHTML =
      "It will take " +
      ("0" + h).slice(-2) +
      "hr " +
      ("0" + m).slice(-2) +
      "min " +
      ("0" + s).slice(-2) +
      "sec " +
      " to make " +
      y +
      " cookies at " +
      x +
      " cookies per second!";
  }
}

function noValue() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 