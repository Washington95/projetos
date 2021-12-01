function verde(){
    document.querySelector('#titulo').classList.remove('azul')
    document.querySelector('#titulo').classList.remove('vermelho')
    document.querySelector('#titulo').classList.add('verde');


}

function vermelho(){
    document.querySelector('#titulo').classList.remove('azul')
    document.querySelector('#titulo').classList.remove('verde')
    document.querySelector('#titulo').classList.add('vermelho')

}

function azul(){
    document.querySelector('#titulo').classList.remove('verde')
    document.querySelector('#titulo').classList.remove('vermelho')
    document.querySelector("#titulo").classList.add('azul')
}