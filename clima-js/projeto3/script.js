document.querySelector('.busca').addEventListener('submit', async (e)=>{
    e.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== ''){
        limpar()
        show('Carregando');
    

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt_br`

        let resultado = await fetch(url);
        let json = await resultado.json();

        if(json.cod === 200){
            mostrar({
                nome: json.name,
                pais: json.sys.country,
                temp: json.main.temp,
                icon: json.weather[0].icon,
                vento: json.wind.speed,
                ang: json.wind.deg


            });


        } else{
            limpar();
            show('Localização não encontrada');
        } 
    } else{
        limpar();
    }
    
    
});

function mostrar(json){
    show('');
    document.querySelector('.titulo').innerHTML = `${json.nome}, ${json.pais}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${json.vento} <span>km/h</span>`


    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.icon}@2x.png`)
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.ang-90}deg)`

    document.querySelector('.resultado').style.display = 'block'
}

function limpar(){
    show('');
    document.querySelector('.resultado').style.display = 'none'


}

function show(msg){
    document.querySelector('.aviso').innerHTML = msg;
}