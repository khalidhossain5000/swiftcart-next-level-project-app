const categoryContainer = document.getElementById("category-container");

const loadCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((categories) => {
      categories.unshift("All");
      displayCategories(categories);
    });
};


const displayCategories = (categories) => {
  // get the container
  const categoryContainer = document.getElementById("category-container");

  for (const category of categories) {
    const div = document.createElement("div");
    div.innerHTML = `
    <button class='border border-gray-200 px-4 py-2 rounded-full text-xl text-[#5a6372]'> ${category}</button>
    `;
    categoryContainer.appendChild(div);
  }
};

loadCategories();
