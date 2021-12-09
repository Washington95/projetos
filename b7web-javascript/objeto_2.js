let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,

    ligar:function(){
        this.ligado = true;
        console.log("Ligado")
    },
    acelerar:function(){
        if(this.ligado == true){
            console.log("Fuuuuui")
        }else{
            console.log("Carro está desligado")
        }
        
    }
};

carro.ligar();
carro.acelerar();

console.log(`Com meu carro ${carro.nome} ${carro.modelo} kkk`)




// let carros = [
//     {nome:'Fiat', modelo: 'Palio'},
//     {nome: 'Fiat', modelo:'Uno'},
//     {nome: 'Toyota', modelo:'Corolla'},
//     {nome: 'Ferrari', modelo:'Spider'}
// ];


// console.log(carros[3].nome);