let totals = document.querySelectorAll('.slider--item').length
let Slide = 0;

let sWidth = document.querySelector('.slider').clientWidth

document.querySelector('.slider--width').style.width = `${sWidth * totals}px`;

document.querySelector('.slider--controls').style.width = `${sWidth}px`;

document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function goPrev(){
    Slide--;
    if(Slide < 0) {
        Slide = totals -1;
    }
    update();
};

function goNext(){
    Slide++;
    if(Slide > (totals-1)){
        Slide = 0;

    }
    update()
};

function update(){
    let sItem = document.querySelector('.slider--item').clientWidth;
    let margin = (Slide * sItem);
    document.querySelector('.slider--width').style.marginLeft = `-${margin}px`
}