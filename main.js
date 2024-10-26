window.addEventListener("load", function () {
  let messageSubject = document.querySelector(".MessageSubject");
  let home = document.querySelector(".home");

  if (messageSubject) {
    messageSubject.focus();
  }

  setTimeout(function () {
    if (home) {
      home.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
});
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
  if (scrollV >= 360) {
    box.className = "box_show";
  } else {
    box.className = "box";
  }
  if (scrollV >= 1335) {
    RF.className = "card-pro-show";
  } else {
    RF.className = "card-pro";
  }
  if (scrollV >= 2120.5) {
    RA.className = "card-pro-show";
  } else {
    RA.className = "card-pro";
  }
  if (scrollV >= 2813.5) {
    S.className = "card-pro-show";
  } else {
    S.className = "card-pro";
  }
  if (scrollV >= 3468.5) {
    H.className = "card-pro-show";
  } else {
    H.className = "card-pro";
  }
  if (scrollV >= 4135) {
    D.className = "card-pro-show";
  } else {
    D.className = "card-pro";
  }
  if (scrollV >= 4817) {
    PS.className = "card-pro-show";
  } else {
    PS.className = "card-pro";
  }
  if (scrollV >= 910) {
    up.className = "up up-show";
  } else {
    up.className = "up";
  }
  if (scrollV >= 5540) {
    inputBox.className = "input-box-show";
  } else {
    inputBox.className = "input-box";
  }
};

function sendEmail() {
  window.location.href = `mailto:yahiaashrafaskar@gmail.com?subject= ${MessageSubject.value} &body=${MessageContent.value}`;
}

function sunN() {
  document.querySelector(".tit").style.color = "#fff";
  document.body.style.background =
    "linear-gradient(to bottom, #3e3e7e, #16162efd)";
  document.querySelectorAll(".titS").forEach(function (element) {
    element.style.color = "#101030";
  });
  document.querySelector(".input-box").style.background =
    "linear-gradient(#11114d,#11114d55)";
  document.querySelector(".protit").style.color = "#fff";
  document.querySelector(".projects").style.background = "#20204e";
  document.querySelector(".contact").style.background = "#20204e";
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
