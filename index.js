const product=fetch('https://dummyjson.com/products')
              .then(res => res.json())
              .then(product=>{
                console.log(product);
// console.log(products,"dis");
 

const display=product.products.map(item=>{
    return`
    <div class="card" ${key=item.id}>
    <img class="img" src=${item?.images}>
    <h3 class="card-title">Title:${item?.title}</h3>
    </div>
    `;}).join("");
 document.getElementById("display").innerHTML=display;
  }) 
  




  
  //https://stackoverflow.com/questions/14207109/hiding-elements-in-responsive-layout
