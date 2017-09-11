$( document ).ready(function() {
    setTimeout(function() {
        randomSounds();
        setInterval(function() {
            randomSounds();
        }, 30000);
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
        volume = 0,
        rdm = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    if(rdm +"" === sessionStorage.getItem('rdm')) {
        console.log("change rdm")
        if(rdm === 5) {
            rdm -= 1;
        } else {
            rdm += 1;
        }
    }

    console.log(rdm);
    sessionStorage.setItem('rdm', rdm);
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
    }, 15000);
}

function init_state() {
    var spans = document.getElementsByTagName("span");

    document.getElementsByTagName("body")[0].removeAttribute("style");

    for (var i = 0; i < spans.length; i++) {
        spans[i].removeAttribute("style");
    }
}

function black() {
    var time = 0.3,
        blacks = document.getElementsByClassName("black");

    document.getElementsByTagName("body")[0].style.backgroundImage = "url('./img/pluie.gif')";

    for (var i = 0; i < blacks.length; i++) {
        blacks[i].style.transitionDelay = time +'s';
        blacks[i].style.color = '#000000';
        time += 0.15;
    }
}
function blue() {
    var time = 0.3,
        blue = document.getElementsByClassName("blue");

    document.getElementsByTagName("body")[0].style.backgroundImage = "url('./img/pluie.gif')";

    for (var i = 0; i < blue.length; i++) {
        blue[i].style.transitionDelay = time +'s';
        blue[i].style.color = '#00a2cd';
        time += 0.15;
    }
}
function green() {
    var time = 0.3,
        green = document.getElementsByClassName("green");

    document.getElementsByTagName("body")[0].style.backgroundImage = "url('./img/riviere.gif')";

    for (var i = 0; i < green.length; i++) {
        green[i].style.transitionDelay = time +'s';
        green[i].style.color = '#02c1a7';
        time += 0.15;
    }
}
function red() {
    var time = 0.3,
        red = document.getElementsByClassName("red");

    document.getElementsByTagName("body")[0].style.backgroundImage = "url('./img/pluie.gif')";

    for (var i = 0; i < red.length; i++) {
        red[i].style.transitionDelay = time +'s';
        red[i].style.color = '#db9114';
        time += 0.15;
    }
}
function white() {
    var time = 0.3,
        white = document.getElementsByClassName("white");

    document.getElementsByTagName("body")[0].style.backgroundImage = "url('./img/soleil.gif')";

    for (var i = 0; i < white.length; i++) {
        white[i].style.transitionDelay = time +'s';
        white[i].style.color = '#ffffff';
        time += 0.15;
    }
}
