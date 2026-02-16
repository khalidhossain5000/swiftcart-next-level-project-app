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

const loadProducts=()=>{
    showLoader()
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((products)=>{
        displayProducts(products)
           hideLoader();
    })

}

const displayCategories = (categories) => {
  // get the container
  const categoryContainer = document.getElementById("category-container");

  for (const category of categories) {
    const div = document.createElement("div");
    div.innerHTML = `
    <button class='border-2 border-gray-200 px-4 py-2 rounded-full text-xl text-[#5a6372]'> ${category}</button>
    `;
    categoryContainer.appendChild(div);
  }
};

// display products

const displayProducts=(products)=>{

}







loadCategories();
