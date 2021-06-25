// Set the year for the copyright message in the footer on start up
(function () {
    const pos = document.getElementById("copy");
    let year = new Date().getFullYear();
    (year === 2018) ?
        pos.innerHTML = `<i class="far fa-copyright"></i>${year}` :
        pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;
})();

/*

Find the codes for keys on the keyboard
window.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
});

Paring the key-codes with ids

      65 clap
      83 hihat
      68 kick
      70 openhat
      71 boom
      72 ride
      74 snare
      75 tom
      76 tink
*/

/* give all sounds a variable and load them */
const clap = new Audio('./sounds/clap.wav');
const hihat = new Audio('./sounds/hihat.wav');
const kick = new Audio('./sounds/kick.wav');
const openhat = new Audio('./sounds/openhat.wav');
const boom = new Audio('./sounds/boom.wav');
const ride = new Audio('./sounds/ride.wav');
const snare = new Audio('./sounds/snare.wav');
const tom = new Audio('./sounds/tom.wav');
const tink = new Audio('./sounds/tink.wav');

// Play the sound and add style based on key code

window.addEventListener('keydown', (e) => {

    switch (e.keyCode) {
        case 65:
            document.getElementById("clap").classList.add('playing');
            clap.currentTime = 0;
            clap.play();
            break;
        case 83:
            document.getElementById("hihat").classList.add('playing');
            hihat.currentTime = 0;
            hihat.play();
            break;
        case 68:
            document.getElementById("kick").classList.add('playing');
            kick.currentTime = 0;
            kick.play();
            break;
        case 70:
            document.getElementById("openhat").classList.add('playing');
            openhat.currentTime = 0;
            openhat.play();
            break;
        case 71:
            document.getElementById("boom").classList.add('playing');
            boom.currentTime = 0;
            boom.play();
            break;
        case 72:
            document.getElementById("ride").classList.add('playing');
            ride.currentTime = 0;
            ride.play();
            break;
        case 74:
            document.getElementById("snare").classList.add('playing');
            snare.currentTime = 0;
            snare.play(); case 74:
            break;
        case 75:
            document.getElementById("tom").classList.add('playing');
            tom.currentTime = 0;
            tom.play(); case 74:
            break;
        case 76:
            document.getElementById("tink").classList.add('playing');
            tink.currentTime = 0;
            tink.play(); case 74:
            break;
        default:
            break;
    }
});

// remove the style based on key code

window.addEventListener('keyup', (e) => {

    switch (e.keyCode) {
        case 65:
            document.getElementById("clap").classList.remove('playing');
            break;
        case 83:
            document.getElementById("hihat").classList.remove('playing');
            break;
        case 68:
            document.getElementById("kick").classList.remove('playing');
            break;
        case 70:
            document.getElementById("openhat").classList.remove('playing');
            break;
        case 71:
            document.getElementById("boom").classList.remove('playing');
            break;
        case 72:
            document.getElementById("ride").classList.remove('playing');
            break;
        case 74:
            document.getElementById("snare").classList.remove('playing');
            break;
        case 75:
            document.getElementById("tom").classList.remove('playing');
            break;
        case 76:
            document.getElementById("tink").classList.remove('playing');
            break;
        default:
            break;
    }
});
