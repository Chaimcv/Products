const product=fetch('https://dummyjson.com/products')
              .then(res => res.json())
              .then(product=>{
                console.log(product);
// console.log(products,"dis");
 

const display=product.products.map(item=>{
    return`
    <div class="card h-70 bg-slate-200 outline-10 outline-white text-xs md:text-2xl" ${key=item.id}>
    <img class="img w-60 h-40 " src=${item?.images} alt=${item?.title}>
    <h3 class="card-title text-center si">${item?.title}</h3>
    </div>
    `;}).join("");
 document.getElementById("display").innerHTML=display;
  }) 
    var user=JSON.parse(localStorage.getItem("userdata"));
      console.log(user);
      const username=user?.username;
      const userimage=user?.userimage;

      console.log(userimage);
      document.getElementById("profilepic").src=userimage;
      document.getElementById("userimagelg").src=userimage;
    
  function logout(){
    localStorage.removeItem("userdata");
    window.location.href="login.html";
  }
 


  
  //https://stackoverflow.com/questions/14207109/hiding-elements-in-responsive-layout
