function carregar(){
    document.getElementById("demo").innerHTML = 'Carregando...'

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(res){
           return res.json();
        })
        .then(function(a){
            document.getElementById("demo").innerHTML = a.length+' posts'
        })

        .catch(function(error){
            console.log("deu problema");
        });
   
}