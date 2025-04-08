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

function sendEmail() {
  window.location.href = `mailto:gemailweb7@gmail.com?subject= ${MessageSubject.value} &body=${MessageContent.value}`;
}

function sunN() {
  let navElement = document.querySelector("nav");
  let Moon = document.createElement("a");
  Moon.className = "DL";
  Moon.setAttribute("onclick", "moonN()");
  Moon.href = "#";
  let iconElement = document.createElement("i");
  iconElement.className = "fa-solid fa-moon";

  Moon.appendChild(iconElement);

  navElement.appendChild(Moon);

  document.querySelector(".DL").style.display = "none";
  document.body.style.background = "whitesmoke";
  document.querySelector('.box p').style.color = "#161a20"
  document.querySelector('.box p span').style.color = "#5656a0"
  document.querySelectorAll('.item').forEach(function (elementt) {
    elementt.style.color = "#0e0e2a"
  });
  document.querySelectorAll('.web').forEach(function (ee) {
    ee.style.color = "#161a20"
  });
  document.querySelector('.txt2').style.color = "#4949e4"
  document.querySelector('.mn-btn').style.backgroundColor = "#161a20"
  document.querySelectorAll('.tit').forEach(function (element) {
    element.style.color = "#161a20"
  });
  document.querySelector('input').style.backgroundColor = "white"
}

function moonN() {
  window.location.reload();
}

function navM() {
  header.style.display = "block";
  header.onclick = () => {
    header.style.display = "none";
  };
}
