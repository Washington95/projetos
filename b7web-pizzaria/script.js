const q =(el)=>document.querySelector(el);
const qa = (el)=>document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    let pizzaitem = q('.pizza-item').cloneNode(true);

    pizzaitem.querySelector('.pizza-item--img img').src = item.img;
    pizzaitem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaitem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaitem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaitem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        q('.pizzaWindowArea').style.opacity = 0;
        q('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            q('.pizzaWindowArea').style.opacity = 1;

        }, 200);
    });

    q('.pizza-area').append(pizzaitem);
});