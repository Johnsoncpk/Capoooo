var i = 0;
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const capoos = document.querySelectorAll('.capoo');
const body_paragraph = document.getElementById("body_paragraph");
let lastHole;
let timeUp = false;
let score = 0;
let gameStarted = false;

function typeWriter() {
  var txt = 'Wellcom to our website! \nWe are two students from Hong Koong, and like \'Capoo\' very much! About Capoo, Capoo is a cartoon charator by Aila from Taiwan, Capoo is a boy and looks like a cat but also has six feet and Capoo loves meat so much. If you like \'Capoo\' too, welcome to sign up and join our community by clicking the sign up button on top!';
  var speed = 50;
  if (i < txt.length) {
    body_paragraph.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(700, 1200);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) {
      peep();
    }
    else if (timeUp) {
      gameStarted = false;
    }
  }, time);
}
function startGame() {
  if (gameStarted) {
    return;
  }
  playAudio();
  gameStarted = true;
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 15000)

}

function wack(e) {
  if (!e.isTrusted) return;
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

capoos.forEach(capoo => capoo.addEventListener('click', wack))

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

var y = document.getElementById("myAudio2");

function playAudio2() {
  y.play();
}

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rpPassword = document.getElementById("rpPassword");
function checkFields() {
  if (username.value == "") {
    window.alert("Username should not be blank!!");
    username.focus();
    return false;
  } else if (email.value == "") {
    window.alert("Email should not be blank!!");
    email.focus();
    return false;
  } else if (password.value == "") { 
    window.alert("Password should not be blank!!");
    password.focus();
    return false;
  }
  else if (password.value != rpPassword.value) {
    window.alert("Password does not match!!");
    password.focus();
    return false;
  }else{
    return true;
  }
}