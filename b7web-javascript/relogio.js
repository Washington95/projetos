let t;

function comecar(){
    t = setInterval(st, 1000);
}

function parar(){
    clearInterval(t);
}



function st(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = `${h}: ${m}: ${s}`;

    document.querySelector('#demo').innerHTML = txt;
}