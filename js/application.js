$( document ).ready(function() {
    document.getElementById("open-eyes").addEventListener("click", eyes);
    document.getElementById("song").addEventListener("mouseover", song);
    document.getElementById("song").addEventListener("mouseleave", mute);

    setTimeout(function() {
        randomSounds();
        setInterval(function() {
            randomSounds();
        }, 30000);
    }, 5000);
});

function randomSounds() {
    if(sessionStorage.getItem('block-all') !== 'true') {
        var rdm = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

        if(rdm +"" === sessionStorage.getItem('rdm')) {
            if(rdm === 5) {
                rdm -= 1;
            } else {
                rdm += 1;
            }
        }

        sessionStorage.setItem('rdm', rdm);
rdm=4;
        if(sessionStorage.getItem('song') !== 'true') {
            if(rdm === 1) {
                white();
            } else if(rdm === 2) {
                blue();
            } else if(rdm === 3) {
                black();
            } else if(rdm === 4) {
                red();
            } else if(rdm === 5) {
                green();
            }
        }

        setTimeout(function() {
            init_state();
        }, 15000);
    }
}

function eyes() {
    var eyes = document.getElementById("eyes"),
        img = document.getElementById("eyes-img"),
        body = document.getElementsByTagName("body")[0];

    sessionStorage.setItem('block-all', 'true');
    init_state();

    eyes.style.display = "block";
    setTimeout(function() {
        eyes.style.opacity = 1;
    }, 100);
}

function showSpeaker() {
    document.getElementById("speaker").style.display = "block";
}

function hideSpeaker() {
    document.getElementById("speaker").removeAttribute("style");
}

function song() {
    init_state();
    showSpeaker();

    sessionStorage.setItem('song', 'true');

    document.getElementById("voyelles").volume = 0;
    $('#voyelles').animate({volume: 1}, 1500);
    document.getElementById("voyelles").play();
}

function mute() {
    hideSpeaker();

    sessionStorage.removeItem('song');

    document.getElementById("voyelles").pause();
}

function init_state() {
    var spans = document.getElementsByTagName("span");

    if(sessionStorage.getItem('song', 'true') !== 'true') {
        hideSpeaker();
    }
    $('#bleu').animate({volume: 0}, 3000);
    $('#bleu').animate({volume: 0}, 3000);
    $('#vert').animate({volume: 0}, 3000);
    $('#rouge').animate({volume: 0}, 3000);
    $('#blanc').animate({volume: 0}, 3000);
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("noir").pause();
    document.getElementById("noir").currentTime = 0;
    document.getElementById("bleu").pause();
    document.getElementById("bleu").currentTime = 0;
    document.getElementById("vert").pause();
    document.getElementById("vert").currentTime = 0;
    document.getElementById("rouge").pause();
    document.getElementById("rouge").currentTime = 0;
    document.getElementById("blanc").pause();
    document.getElementById("blanc").currentTime = 0;
    setTimeout(function() {
        document.getElementById("overlay").removeAttribute("style");
    }, 500);

    for (var i = 0; i < spans.length; i++) {
        spans[i].removeAttribute("style");
    }
}

function black() {
    var time = 0.3,
        audio = document.getElementById("noir"),
        blacks = document.getElementsByClassName("black");

    audio.volume = 0;
    audio.play();
    $('#bleu').animate({volume: 1}, 3000);
    showSpeaker();
    document.getElementById("overlay").style.backgroundImage = "url('./img/nuit.gif')";
    document.getElementById("overlay").style.opacity = "1";

    for (var i = 0; i < blacks.length; i++) {
        blacks[i].style.transitionDelay = time +'s';
        blacks[i].style.color = '#000000';
        time += 0.15;
    }
}
function blue() {
    var time = 0.3,
        audio = document.getElementById("bleu"),
        blue = document.getElementsByClassName("blue");

    audio.volume = 0;
    audio.play();
    $('#bleu').animate({volume: 1}, 3000);
    showSpeaker();
    document.getElementById("overlay").style.backgroundImage = "url('./img/clairon.gif')";
    document.getElementById("overlay").style.opacity = "1";

    for (var i = 0; i < blue.length; i++) {
        blue[i].style.transitionDelay = time +'s';
        blue[i].style.color = '#00a2cd';
        time += 0.15;
    }
}
function green() {
    var time = 0.3,
        audio = document.getElementById("vert"),
        green = document.getElementsByClassName("green");

    audio.volume = 0;
    audio.play();
    $('#vert').animate({volume: 1}, 3000);
    showSpeaker();
    document.getElementById("overlay").style.backgroundImage = "url('./img/riviere.gif')";
    document.getElementById("overlay").style.opacity = "1";

    for (var i = 0; i < green.length; i++) {
        green[i].style.transitionDelay = time +'s';
        green[i].style.color = '#02c1a7';
        time += 0.15;
    }
}
function red() {
    var time = 0.3,
        audio = document.getElementById("rouge"),
        red = document.getElementsByClassName("red");

    audio.volume = 0;
    audio.play();
    $('#rouge').animate({volume: 1}, 3000);
    showSpeaker();
    document.getElementById("overlay").style.backgroundImage = "url('./img/pluie.gif')";
    document.getElementById("overlay").style.opacity = "1";

    for (var i = 0; i < red.length; i++) {
        red[i].style.transitionDelay = time +'s';
        red[i].style.color = '#db9114';
        time += 0.15;
    }
}
function white() {
    var time = 0.3,
        audio = document.getElementById("blanc"),
        white = document.getElementsByClassName("white");

    audio.volume = 0;
    audio.play();
    $('#blanc').animate({volume: 1}, 3000);
    showSpeaker();
    document.getElementById("overlay").style.backgroundImage = "url('./img/soleil.gif')";
    document.getElementById("overlay").style.opacity = "1";

    for (var i = 0; i < white.length; i++) {
        white[i].style.transitionDelay = time +'s';
        white[i].style.color = '#ffffff';
        time += 0.15;
    }
}
