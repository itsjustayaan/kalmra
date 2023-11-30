window.addEventListener("load", () => {
  localStorage.clear();
  console.log("Local storage cleared on page refresh");
});
const products = [
  {
    id: 1,
    name: "Basic Package",
    description: "Description 1",
    price: "Rs. 399",
    backgroundImage: "Basic Packages.jpg",
  },
  {
    id: 2,
    name: "Standard Package",
    description: "Description 1",
    price: "1298",
    backgroundImage: "Standard Packages.jpg",
  },
  {
    id: 3,
    name: "Premium Package",
    description: "Description 1",
    price: "2599",
    backgroundImage: "Premium Package.jpg",
  },
  {
    id: 4,
    name: "Deluxe Package",
    description: "Description 1",
    price: "2599",
    backgroundImage: "Deluxe Package.jpg",
  },
  {
    id: 5,
    name: "Ultimate Package",
    description: "Description 1",
    price: "3999",
    backgroundImage: "Ultimate Package.jpg",
  },
];
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("Added to cart: ", product);
}

document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  // Modify the existing loop to include an 'onclick' event for the buttons
  products.forEach((product) => {
    productList.innerHTML += `
    <div class="product" style="background-image: url('${product.backgroundImage}');">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>Price: ${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
  });
});
