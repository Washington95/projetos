async function carregar() {
    document.getElementById("demo").innerHTML = 'Carregando...'

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    montarblog(json);

   
}

function montarblog(blog) {
    let html = '';

    for (let i in blog) {
        html += '<h3>' + blog[i].title + ' </h3>';
        html += blog[i].body + '<br/>';
        html += '<hr/>';
    }

    document.getElementById("demo").innerHTML = html
}