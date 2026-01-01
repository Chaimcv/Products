const product=fetch('https://dummyjson.com/products')
              .then(res => res.json())
              .then(product=>{
                console.log(product);
// console.log(products,"dis");
 

const display=product.products.map(item=>{
    return`
    <div class="card md:bg-red-600 bg-green-800" ${key=item.id}>
    <img id="img" src=${item?.images} alt=${item?.title}>
    <h3 class="card-title">${item?.title}</h3>
    </div>
    `;}).join("");
 document.getElementById("display").innerHTML=display;
  }) 
  
 


  
  //https://stackoverflow.com/questions/14207109/hiding-elements-in-responsive-layout
