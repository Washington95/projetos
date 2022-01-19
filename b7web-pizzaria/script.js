let modalq = 1;
let cart = [];
let modalkey = 0;
const q =(el)=>document.querySelector(el);
const qa = (el)=>document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    let pizzaitem = q('.pizza-item').cloneNode(true);
    pizzaitem.setAttribute('data-key', index);
    pizzaitem.querySelector('.pizza-item--img img').src = item.img;
    pizzaitem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaitem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaitem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaitem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        let key = e.target.closest('.pizza-item').getAttribute('data-key');

        modalq = 1;

        modalkey = key;


        q('.pizzaBig img').src = pizzaJson[key].img;
        q('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        q('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        q('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        q('.pizzaInfo--size.selected').classList.remove('selected');
        qa('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2){
                size.classList.add('selected')
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        q('.pizzaInfo--qt').innerHTML = modalq;

        q('.pizzaWindowArea').style.opacity = 0;
        q('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            q('.pizzaWindowArea').style.opacity = 1;

        }, 200);
    });

    q('.pizza-area').append(pizzaitem);
});  


//Evento do Modal

function closemodal(){
    q('.pizzaWindowArea').style.opacity = 0;
    setTimeout (()=>{
        q('.pizzaWindowArea').style.display = 'none';
    }, 500);
}

qa('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=> {
    item.addEventListener('click', closemodal);
});
q('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if(modalq > 1){
        modalq --;
        q('.pizzaInfo--qt').innerHTML = modalq;

    }

});
q('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalq++;
    q('.pizzaInfo--qt').innerHTML = modalq;

});
qa('.pizzaInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click',(e)=>{
        q('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});
q('.pizzaInfo--addButton').addEventListener('click', ()=>{
    let size = parseInt(q('.pizzaInfo--size.selected').getAttribute('data-key'));


    let identifier = pizzaJson[modalkey].id+'@'+size;

    let key = cart.findIndex((item)=>item.identifier == identifier);

    if(key > -1){
        cart[key].qt += modalq;
    } else{
        cart.push({
            identifier,
            id:pizzaJson[modalkey].id,
            size,
            qt:modalq
        });
    }
    closemodal();
});