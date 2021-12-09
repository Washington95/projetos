let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligar:function(){
        console.log("Ligando")
    },
    acelerar:function(){
        console.log("Fuuuuui")
    }
};

carro.ligar();
carro.acelerar();

console.log(`Com meu carro ${carro.nome} ${carro.modelo} kkk`)

