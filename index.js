const products=fetch('https://dummyjson.com/products')
              .then(res => res.json())
              .then(products=>{
                console.log(products);
console.log(products);
const main=products.map(item=>{
    return `
    <div class="card"{key=item.id}>
    
    <h3 class="card_title">Title:${item?.title}</h3>
    </div>
    `;}).join("");
document.getElementById("main").innerHTML="main";
})             
