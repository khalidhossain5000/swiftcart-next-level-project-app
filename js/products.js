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
    });
};

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
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="card bg-base-100 shadow-xl p-4 border">
                <img src="${product.image}" class="h-40 mx-auto" alt="${product.title}" />
                <h2 class="text-sm font-bold mt-2">${product.title.slice(0, 30)}...</h2>
                <p class="text-red-500 font-bold">$${product.price}</p>
            </div>
        `;
    productContainer.appendChild(div);
  }
};
loadCategories();
loadProducts();
loadProductsByCategory("All");
