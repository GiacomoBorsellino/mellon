function sound() {
    let audio = new Audio('../sound/bookSound.mp3');
    audio.play();
}

function unLock() {
    let audio = new Audio('../sound/lockSound.mp3');
    audio.play();

    setTimeout(() => {
        document.getElementById('white').classList.add('whiteCover');
        document.getElementById('white').classList.remove('whiteUncover');
    }, 0);

    setTimeout(() => {
        document.getElementById('white').classList.remove('whiteCover');
        document.getElementById('white').classList.add('whiteRemover');
        document.body.getElementsByClassName('chest-close')[0].style.display = "none";
        document.body.getElementsByClassName('chest-open')[0].style.display = "block";
        document.body.getElementsByClassName('lock')[0].style.display = "none";
        document.body.getElementsByClassName('leaf')[0].style.display = "block";
    }, 1000);

    setTimeout(() => {
        document.getElementById('white').classList.remove('whiteRemover');
        document.getElementById('white').classList.add('whiteUncover');
    }, 2000);

};