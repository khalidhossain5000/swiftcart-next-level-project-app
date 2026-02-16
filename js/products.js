const categoryContainer = document.getElementById("category-container");
//loader start
const showLoader = () => {
  document.getElementById("loader").classList.remove("hidden");
  // document.getElementById('word-card-container').classList.add('hidden');
};
//hide loader
const hideLoader = () => {
  document.getElementById("loader").classList.add("hidden");
  // document.getElementById('word-card-container').classList.remove('hidden');
};

const removeActiveClass = () => {
  const activeBtns = document.getElementsByClassName("active");
  for (const btn of activeBtns) {
    btn.classList.remove("active");
  }
};

const loadCategories = () => {
  showLoader();
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((categories) => {
      categories.unshift("All");
      displayCategories(categories);
      hideLoader();
    });
};

// load all products data here

const loadProducts = () => {
  showLoader();
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => {
      displayProducts(products);
      hideLoader();
    });
};

// LOAD PRoducts by cateogry here
const loadProductsByCategory = (category, index) => {
  showLoader();
  removeActiveClass();
  const clickedBtn = document.getElementById(`btn-${index}`);
  if (clickedBtn) {
    clickedBtn.classList.add("active");
  }

  let url = "https://fakestoreapi.com/products";
  if (category !== "All") {
    url = `https://fakestoreapi.com/products/category/${category}`;
  }
  fetch(url)
    .then((res) => res.json())
    .then((products) => {
      displayProducts(products);
      hideLoader();
    })
    .catch((error)=>{
        console.log(error,'this is filter error ')
        hideLoader();
    })
};

// load single product data
const loadProductDetails=(id)=>{
    showLoader()
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((product)=>{
        displayProductDetails(product)
        showLoader()
    })
    .catch((err)=>console.log(err,'single product error here'))

}

// display cat
const displayCategories = (categories) => {
  // get the container
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  categories.forEach((category, index) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button id="btn-${index}" onclick="loadProductsByCategory(\`${category}\`, ${index})"class='border-2 border-gray-200 px-4 py-2 rounded-full text-xl text-[#5a6372] cursor-pointer'> ${category}</button>
    `;
    categoryContainer.appendChild(div);
    if (category === "All") {
      document.getElementById(`btn-${index}`).classList.add("active");
    }
  });
};

// display products

const displayProducts = (products) => {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  for (const product of products) {
    
    console.log(product,'this is producst')
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="rounded-lg border border-[#e6e8eb]  pb-6 px-3 md:px-4 xl:px-0">
                <div class='bg-[#e5e7eb] py-12'><img src="${product.image}" class="h-40 mx-auto" alt="${product.title}" /></div>


                <div class='p-4'>

<div class='flex justify-between items-center'> 

<p class='bg-[#e0e7ff] rounded-full p-1 px-2 text-sm font-semibold text-[#4f39f6]'> ${product?.category}</p> 

<p class=' text-lg text-[#c1c4cb] font-semibold'> <span class="text-[#fdc700]"> <i class="fa-solid fa-star"></i>  </span> ${product?.rating?.rate} (${product.rating?.count}) </p>



</div>


                <h2 class="text-[16px] pb-3 font-semibold text-[#000010] mt-2">${product?.title?.slice(0,30)}..</h2>
                <p class="text-[#101840] font-bold text-[18px]">$${product?.price}</p>
                </div>
                



<div class='flex justify-between items-end px-5 pt-6'>

<button onclick="loadProductDetails('${product.id}')"class='text-[#374254] px-6 cursor-pointer font-semibold py-1 border border-gray-500 rounded-xl'> <span><i class="fa-regular fa-eye"></i></span> Details </button>

<button class='px-6 cursor-pointer font-semibold py-1 bg-[#4f39f6] text-white rounded-xl'> <span><i class="fa-solid fa-cart-arrow-down"></i></span> Add </button>


</div>




            </div>
        `;
    productContainer.appendChild(div);
  }
};



// product details modal here code


const displayProductDetails=(productDetails)=>{
    console.log(productDetails,'productDetails')

    document.getElementById("product_details_modal").showModal();
    const modalContainer=document.getElementById('modal-container');
    modalContainer.innerHTML=`
     <!-- modal container  -->
     <div class="bg-white py-8">
      <!-- modal insides  -->
       <div class="bg-white border-3 border-[#EDF7FF] p-6 space-y-6 w-full" >
        <h2 class="text-4xl font-semibold text-black">${productDetails.title}(<i class="fa-solid fa-microphone-lines"></i> : ${productDetails.description})</h2>
        <h3 class="text-2xl font-semibold text-black">Meaning:</h3>
        <h2 class="text-2xl font-semibold text-black">Example:</h2>
        <p  class="text-2xl font-normal text-[#000000]">${productDetails.category}</p>
        <h2 class="hind-siliguri text-2xl font-medium text-black">সমার্থক শব্দ গুলো:</h2>
        
        <div id="button-container" class="flex items-center gap-3"></div>
       </div>
     </div>
    `
}







loadCategories();
loadProducts();
loadProductsByCategory("All");
