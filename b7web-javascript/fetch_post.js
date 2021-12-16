async function adicionarpost(){
    document.getElementById('demo').innerHTML = "Carregando...";

    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo teste',
            body: 'Corpo de Teste',
            userId: 1
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    let json = await req.json();

    console.log(json);
    
}