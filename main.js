let header = document.querySelector("header");
let box = document.querySelector(".box");
let RF = document.querySelector(".RF");
let RA = document.querySelector(".RA");
let S = document.querySelector(".S");
let H = document.querySelector(".H");
let D = document.querySelector(".D");
let PS = document.querySelector(".PS");
let up = document.querySelector(".up");
let inputBox = document.querySelector(".input-box");
let MessageSubject = document.querySelector(".MessageSubject");
let MessageContent = document.querySelector(".MessageContent");

MessageSubject.value = "Message Subject";
MessageContent.value = "Message Content";
window.onscroll = function () {
  let scrollV = scrollY;
  if (scrollV >= 910) {
    up.className = "up up-show";
  } else {
    up.className = "up";
  }
};


function lightMode(){
  document.body.style.background = "linear-gradient(to right, #fff, #f0f0f0)";
  document.querySelector('.box p').style.color = "#000";
  document.querySelector('.box p span').style.color = "#2121f3";
  document.querySelectorAll('.item').forEach(function (el) {
    el.style.color = "#444";
  });
  document.querySelectorAll('.web').forEach(function (el) {
    el.style.color = "#000";
  });
  document.querySelector('.txt2').style.color = "#000";
  document.querySelector('.mn-btn').style.backgroundColor = "#161a20";
  document.querySelectorAll('.tit').forEach(function (el) {
    el.style.color = "#222";
  });
  document.querySelectorAll('input').forEach(function (e){
    e.style.background = "linear-gradient(to left, #4949e437, #4949e4ba)";
  })
}

function darkMode(){
  document.body.style.background = "linear-gradient(to right, #090913, #16162efd)";
  document.querySelector('.box p').style.color = "white";
  document.querySelector('.box p span').style.color = "#6464ff";
  document.querySelectorAll('.item').forEach(function (el) {
    el.style.color = "rgba(255, 255, 255, 0.8)";
  });
  document.querySelectorAll('.web').forEach(function (el) {
    el.style.color = "#fff";
  });
  document.querySelector('.txt2').style.color = "#fff";
  document.querySelector('.mn-btn').style.backgroundColor = "#0e0e2a";
  document.querySelectorAll('.tit').forEach(function (el) {
    el.style.color = "rgba(255, 255, 255, 0.8)";
  });
  document.querySelectorAll('input').forEach(function (e){
    e.style.background = "linear-gradient(to left, #4949e437, #4949e4ba)";
  })
}

function sendEmail() {
  window.location.href = `mailto:gemailweb7@gmail.com?subject= ${MessageSubject.value} &body=${MessageContent.value}`;
}

function sunN() {
  lightMode()
  document.getElementById("moon").style.display = "none";
  document.getElementById("sun").style.display = "inline-block";
}


function moonN() {
  darkMode()
  document.getElementById("moon").style.display = "inline-block";
  document.getElementById("sun").style.display = "none";
}

function sunNM() {
  lightMode()
  document.getElementById("moonn").style.display = "none";
  document.getElementById("sunn").style.display = "inline-block";
}


function moonNM() {
  darkMode()
  document.getElementById("moonn").style.display = "inline-block";
  document.getElementById("sunn").style.display = "none";
}
