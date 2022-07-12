function calculateAmountinTime() {
  document.getElementById("output1").innerHTML = "";
  var x = document.getElementById("cps").value;
  var y = document.getElementById("time").value;
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

function calculateTimeforAmount() {
  var x = document.getElementById("cps2").value;
  var y = document.getElementById("amount").value;

  z = x * 60;
  console.log(z);

  a = y / z;
  console.log(a);
  document.getElementById("output2").innerHTML =
    "It will take " + a + " minutes to make " + y + " cookies!";
}
