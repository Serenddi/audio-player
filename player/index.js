let audio3 = document.querySelector('.audio1');
let audio = document.querySelector('.audio1');
let audio2 = document.querySelector('.audio2');
const Play = document.querySelector('.play');
const For = document.querySelector('.for');
const Back = document.querySelector('.back');
const Name = document.querySelector('.name');
const Track = document.querySelector('.track');
const Pic = document.querySelector('.upimg');
const Time = document.querySelector('.time');

Play.addEventListener('click', () => {
    playPauseAudio();
})

For.addEventListener('click', () => {
    changeSong();
})

Back.addEventListener('click', () => {
    changeBack();
})


let isPlay = false;

function playPauseAudio() {
    audio.currentTime = 0;
    if(!isPlay) {
        isPlay = true;
        audio.play();
        Play.src = "././assets/svg/pause.png"

    }
    else if(isPlay) {
        isPlay = false;
        audio.pause();
        Play.src = "./assets/svg/play.png"
    }
}


function changeSong() {
    if (isPlay === true) {
    audio.pause();
    audio.currentTime = 0;
    audio = audio2;
    Name.textContent = 'Beyonce';
    Track.textContent = 'Limonade';
    Time.textContent = '03:53';
    Pic.src = './assets/img/lemonade.png';
    audio.play();
    }  


    if (isPlay === false) {
    audio.currentTime = 0;
    audio = audio2;
    Name.textContent = 'Beyonce';
    Track.textContent = 'Limonade';
    Time.textContent = '03:53';
    Pic.src = './assets/img/lemonade.png';
    }
}

function changeBack() {
    if (isPlay === true) {
    audio.pause();
    audio.currentTime = 0;
    audio = audio3;
    Name.textContent = 'Dua Lipa';
    Track.textContent = 'Don\'t stop now';
    Pic.src = './assets/img/dontstartnow.png';
    Time.textContent = '03:23';
    audio.play();
    }

    if (isPlay === false) {
    audio.currentTime = 0;
    audio = audio3;
    Name.textContent = 'Dua Lipa';
    Track.textContent = 'Don\'t stop now';
    Pic.src = './assets/img/dontstartnow.png';
    Time.textContent = '03:23';
    }
}
