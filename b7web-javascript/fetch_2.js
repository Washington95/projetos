function carregar() {
    document.getElementById("demo").innerHTML = 'Carregando...'

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (res) {
            return res.json();
        })
        .then(function (a) {
            montarblog(a);
        })

        .catch(function (error) {
            console.log("deu problema");
        });

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