var i = 0;
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const capoos = document.querySelectorAll('.capoo');
/*document.querySelectorAll('background_capoos').style.visibility = 'visible';*/
const background_capoos = document.getElementsByClassName('.background_capoos');
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
function showcapoo() {
    background_capoos.style.visibility = "visible";
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