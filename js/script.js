
const showLoader = () => {
  document.getElementById("loader").classList.remove("hidden");
};
//hide loader
const hideLoader = () => {
  document.getElementById("loader").classList.add("hidden");

};







// load trending products for home page
const loadTrendingProducts = () => {
    console.log('hello form tload trensind data here')
  showLoader();
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => {
        console.log(products,'trendingProductstrendingProducts')
      const trendingProducts = products
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 3);

      displayTrendingProducts(trendingProducts);
      hideLoader();
    })
    .catch((err) => {
      console.log(err);
      hideLoader();
    });
};


//display trending products in home page
const displayTrendingProducts=(trendingProducts)=>{
    console.log(trendingProducts,'trendingProducts')
      const trendingContainer = document.getElementById("trending-product");
  trendingContainer.innerHTML = "";
  for (const product of trendingProducts) {
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="rounded-lg border border-[#e6e8eb]  pb-6 px-3 md:px-4 xl:px-0">
                <div class='bg-[#e5e7eb] py-12'><img src="${product.image}" class="h-40 mx-auto" alt="${product.title}" /></div>


                <div class='p-4'>

<div class='flex justify-between items-center'> 

<p class='bg-[#e0e7ff] rounded-full p-1 px-2 text-sm font-semibold text-[#4f39f6]'> ${product?.category}</p> 

<p class=' text-lg text-[#c1c4cb] font-semibold'> <span class="text-[#fdc700]"> <i class="fa-solid fa-star"></i>  </span> ${product?.rating?.rate} (${product.rating?.count}) </p>



</div>


                <h2 class="text-[16px] pb-3 font-semibold text-[#000010] mt-2">${product?.title?.slice(0, 30)}..</h2>
                <p class="text-[#101840] font-bold text-[18px]">$${product?.price}</p>
                </div>
                



<div class='flex justify-between items-end px-5 pt-6'>

<button onclick="loadProductDetails('${product.id}')"class='text-[#374254] px-4 lg:px-6 cursor-pointer font-semibold py-1 border border-gray-500 rounded-xl'> <span><i class="fa-regular fa-eye"></i></span> Details </button>

<button class='px-4 lg:px-6 cursor-pointer font-semibold py-1 bg-[#4f39f6] text-white rounded-xl'> <span><i class="fa-solid fa-cart-arrow-down"></i></span> Add </button>


</div>




            </div>
        `;
    trendingContainer.appendChild(div);
  }
}






















loadTrendingProducts();