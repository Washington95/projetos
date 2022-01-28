let digital = document.querySelector('.digital');
let seg = document.querySelector('.p_s');
let min = document.querySelector('.p_m');
let hora = document.querySelector('.p_h');

function update(){
    let now = new Date();
    let hor = now.getHours();
    let minu = now.getMinutes();
    let se = now.getSeconds();
    
    digital.innerHTML = `${Zero(hor)}:${Zero(minu)}:${Zero(se)}`

    let sDeg = ((360 / 60 ) * se) - 90;
    let mDeg = ((360 / 60) * minu) - 90;
    let hDeg = ((360 / 12) * hor) -90;

    seg.style.transform = `rotate(${sDeg}deg)`;
    min.style.transform = `rotate(${mDeg}deg)`;
    hora.style.transform = `rotate(${hDeg}deg)`

     
}

function Zero(time) {
    return time < 10 ? `0${time}` : time;

}

setInterval(update, 1000);
update();