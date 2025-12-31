const products=fetch('https://dummyjson.com/products')
              .then(res => res.json())
              .then(products=>{
                console.log(products);
console.log(products,"dis");
const main=products.map(item=>{
    return`
    <div class="card"{key=item.id}>
    // <img class="img" src=${item?.images}>
    <h3 class="card-title">Title:${item?.title}</h3>
    </div>
    `;}).join("");
document.getElementById("main").innerHTML="main";
})             
