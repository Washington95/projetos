let seuVoto = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let  votos = [];


function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numerosHtml = '';
    numero = '';
    votoBranco = false

    for(let i=0; i<etapa.numeros; i++){

        if( i === 0){
            numerosHtml += '<div class="numero pisca"></div>';
        } else{
            numerosHtml += '<div class="numero"></div>';
        }
        
    }

    seuVoto.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = ' ';
    numeros.innerHTML = numerosHtml;
}
function atualizar(){
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true
        } else{
            return false
        }

    });
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVoto.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome ${candidato.nome}<br/>Partido: ${candidato.partido}`


        let fotosHtml = '';
        for(let i in candidato.fotos){
            if(candidato.fotos[i].small){
                fotosHtml += `<div class="d-1-image small"> <img src="images/${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda} <div>`

            } else{
                fotosHtml += `<div class="d-1-image"> <img src="images/${candidato.fotos[i].url}" alt=""/>${candidato.fotos[i].legenda} <div>`
            }
            
        }

        lateral.innerHTML = fotosHtml

    } else{
        seuVoto.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">Voto Nulo</div>'
    }
}

function clicou(n){
    let elnumero = document.querySelector('.numero.pisca');
    if(elnumero !== null){
        elnumero.innerHTML =n;
        numero = `${numero}${n}`;

        elnumero.classList.remove('pisca');
        if(elnumero.nextElementSibling !== null){
            elnumero.nextElementSibling.classList.add('pisca');

        }else{
            atualizar();
        }

    }
    
}

function branco(){
    numero = '';
    votoBranco = true;
    seuVoto.style.display = 'none';
    descricao.innerHTML = '<div class="aviso--grande pisca">Voto Branco</div> ';
    aviso.style.display = 'none';
    lateral.innerHTML = ' ';
    numeros.innerHTML = '';
}

function corrige(){
    comecarEtapa();
}

function confirma(){
    let etapa = etapas[etapaAtual];

    let votoConfirmado = false;

    if(votoBranco === true){
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        });

    } else if(numero.length === etapa.numeros){
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        });
    }

    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        } else{
        
            document.querySelector('.tela').innerHTML = ' <div class="aviso--gigante pisca">FIM</div> ';
            console.log(votos)
        }
            
    }
}

comecarEtapa()