const showLoader = () => {
  document.getElementById("loader").classList.remove("hidden");
};
//hide loader
const hideLoader = () => {
  document.getElementById("loader").classList.add("hidden");
};

// load trending products for home page
const loadTrendingProducts = () => {
  console.log("hello form tload trensind data here");
  showLoader();
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => {
      console.log(products, "trendingProductstrendingProducts");
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
const displayTrendingProducts = (trendingProducts) => {
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
};

// show details in modal over here
// load single product data
const loadProductDetails = (id) => {
  showLoader();
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      displayProductDetails(product);
      hideLoader();
    })
    .catch((err) => console.log(err, "single product error here"));
};

// product details modal here code

const displayProductDetails = (productDetails) => {
  console.log(productDetails, "productDetails");

  document.getElementById("product_details_modal").showModal();
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = `
     <!-- modal container  -->
     <div class="bg-white py-8">
      <!-- modal insides  -->
       <div class="bg-gray-200 border-3 border-[#EDF7FF] p-6 space-y-6 w-full" >


       <div class='bg-[#f8f8f8] rounded-lg shadow-lg shadow-blue-100 py-9'><img src="${productDetails.image}" class="h-40 xl:h-56 mx-auto" alt="${productDetails.title}" /></div>


        <h2 class="text-4xl font-semibold text-black">Product Name: <span class="text-2xl">${productDetails.title}</span></h2>

<p class="text-3xl font-semibold text-slate-900">Description: <span class="text-xl">${productDetails.description}</span></p>

        <h3 class="text-2xl font-semibold text-black">Category:${productDetails.category}</h3>
        <h2 class="text-2xl font-semibold text-black">Price:$ ${productDetails.price}</h2>
        <p  class="text-2xl font-normal text-[#000000]">Ratings:${productDetails.rating.rate}</p>
        <p  class="text-2xl font-normal text-[#000000]">Ratings Count:${productDetails.rating.count}</p>
       
        
        <div id="button-container" class="flex items-center gap-3"></div>
        <button class='px-4 lg:px-6 cursor-pointer font-semibold py-1 bg-[#4f39f6] text-white rounded-xl'> <span><i class="fa-solid fa-cart-arrow-down"></i></span> Buy Now </button>
       </div>
     </div>
    `;
};

loadTrendingProducts();
