//select element
let productsElement=document.querySelector(".products");
const makeRequest=async(config)=>{
try{
        const res=await axios(config)
        return res.data;
}catch(err){
    console.log("data is not fetched")
}
}
const loadData=async ()=>{
    const products=await makeRequest("https://dummyjson.com/products")
     for(i=0;i<=50;i++){
        // let title=products.products[i].title;
        // let price=products.products[i].price;
        let productelement=document.createElement("div")
        productelement.classList.add("product")
        productelement.innerHTML=`
        <img src="${products.products[i].images[0]}" alt="product-image">
        <h3 class="product-title">Name: ${products.products[i].title}</h3>
        <h4 class="product-description">${products.products[i].description}</h4>
       <h5 class="product-description">Price: ${products.products[i].price} TK</h5> 
        <button class="btn">Buy Now</button>
        `
        productsElement.appendChild(productelement)
     }
        
    }
loadData()
