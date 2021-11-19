var user = document.getElementById("username");
var em = document.getElementById("email");
var ps1 = document.getElementById("pass1");
var ps2 = document.getElementById("pass2");
var sub = document.getElementById("submit-btn");
var ch = document.querySelectorAll(".fa-circle-check");
var ex = document.querySelectorAll(".fa-circle-exclamation");
var note = document.querySelectorAll("p");

sub.addEventListener("click", () => {
    // note.style.color="red";
  if (checkuser()) {
    ch[0].style.visibility = "visible";
    user.style.border = "3px solid green";
  } else {
    ex[0].style.visibility = "visible";
    user.style.border = "3px solid red";
    // user.innerHTML="User Name Invalid";
    note[0].innerHTML = "Enter username";
  }

  if (checkemail()) {
    ch[1].style.visibility = "visible";
    em.style.border = "3px solid green";
  } else {
    em.value = "";
    ex[1].style.visibility = "visible";
    em.style.border = "3px solid red";
    note[1].innerHTML = "Email-Id invalid";
  }
  if (checkpass1()) {
    ch[2].style.visibility = "visible";
    ps1.style.border = "3px solid green";
  } else {
    ps1.value = "";
    ex[2].style.visibility = "visible";
    ps1.style.border = "3px solid red";
    note[2].innerHTML = "enter password";
  }
  if (checkpass2()) {
    ch[3].style.visibility = "visible";
    ps2.style.border = "3px solid green";
  } else {
    ps2.value = "";
    ex[3].style.visibility = "visible";
    ps2.style.border = "3px solid red";
    note[3].innerHTML = "Password does not match";
  }
  if(checkuser() && checkemail() && checkpass1() && checkpass2()){
      sub.style.opacity=".5";
  }
});
function checkuser() {
  let x = user.value;
  let re = /[a-z]/;
  console.log(re.test(x));
  if (re.test(x)) {
    return true;
  } else {
    return false;
  }
}

function checkemail() {
  let y = em.value;
  let re = /[a-zA-Z0-9_\.]+@+[a-z]+\.+[a-z]/;
  if (re.test(y)) {
    return true;
  } else {
    return false;
  }
}

function checkpass1() {
  let p1 = ps1.value;
  if (p1.length != 0) {
    return true;
  } else {
    return false;
  }
}

function checkpass2() {
  let p1 = ps1.value;
  let p2 = ps2.value;
  if (p1 === p2 && p1.length != 0 && p2.length != 0) {
    return true;
  } else {
    return false;
  }
}