document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== '') {
        let songA = song.split('');
        playC(songA);

    }
});

function playSound(so) {
    let som = document.querySelector(`#s_${so}`);

    let teclado = document.querySelector(`div[data-key="${so}"]`);


    if (som) {
        som.currentTime = 0.
        som.play();
    }

    if (teclado) {
        teclado.classList.add('active');

        setTimeout(() => {
            teclado.classList.remove('active');
        }, 300);
    }
}

function playC(songA) {
    let wait = 0;

    for (let somI of songA) {
        setTimeout(() => {
            playSound(`key${somI}`);
        }, wait);

        wait += 250;
    }

}