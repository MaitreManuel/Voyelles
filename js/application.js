$( document ).ready(function() {
    setTimeout(function() {
        randomSounds();
        setInterval(function() {
            randomSounds();
        }, 15000);
    }, 3000);
});

function randomSounds() {
    /***
    *   rdm = 1, son blanc
    *   rdm = 2, son bleu
    *   rdm = 3, son noir
    *   rdm = 4, son rouge
    *   rdm = 5, son vert
    ***/

    var audio,
        rdm = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    if(rdm === 1) {
        audio = new Audio('./son/blanc.mp3');
        white();
    } else if(rdm === 2) {
        audio = new Audio('./son/bleu.mp3');
        blue();
    } else if(rdm === 3) {
        audio = new Audio('./son/noir.mp3');
        black();
    } else if(rdm === 4) {
        audio = new Audio('./son/rouge.mp3');
        red();
    } else if(rdm === 5) {
        audio = new Audio('./son/vert.mp3');
        green();
    }
    audio.play();

    setTimeout(function() {
        audio.pause();
        audio.currentTime = 0;
        init_state();
    }, 10000);
}

function init_state() {
    var spans = document.getElementsByTagName("span");

    for (var i = 0; i < spans.length; i++) {
        spans[i].removeAttribute("style");
    }
}

function black() {
    var time = 0.3,
        blacks = document.getElementsByClassName("black");

    for (var i = 0; i < blacks.length; i++) {
        blacks[i].style.transitionDelay = time +'s';
        blacks[i].style.color = '#000000';
        time += 0.15;
    }
}
function blue() {
    var time = 0.3,
        blue = document.getElementsByClassName("blue");

    for (var i = 0; i < blue.length; i++) {
        blue[i].style.transitionDelay = time +'s';
        blue[i].style.color = '#0000ff';
        time += 0.15;
    }
}
function green() {
    var time = 0.3,
        green = document.getElementsByClassName("green");

    for (var i = 0; i < green.length; i++) {
        green[i].style.transitionDelay = time +'s';
        green[i].style.color = '#00ff00';
        time += 0.15;
    }
}
function red() {
    var time = 0.3,
        red = document.getElementsByClassName("red");

    for (var i = 0; i < red.length; i++) {
        red[i].style.transitionDelay = time +'s';
        red[i].style.color = '#ff0000';
        time += 0.15;
    }
}
function white() {
    var time = 0.3,
        white = document.getElementsByClassName("white");

    for (var i = 0; i < white.length; i++) {
        white[i].style.transitionDelay = time +'s';
        white[i].style.color = '#ffffff';
        time += 0.15;
    }
}
