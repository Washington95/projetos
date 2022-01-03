const q =(el)=>document.querySelector(el);
const qa = (el)=>document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    let pizzaitem = q(' .pizza-item').cloneNode(true);

    q('.pizza-area').append(pizzaitem);
});