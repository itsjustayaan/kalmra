const cartItems = document.getElementById("cart-items");
function removeFromCart(itemId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== itemId);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems(); // Re-render the cart items after removal
}

function renderCartItems() {
  cartItems.innerHTML = ""; // Clear existing items
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Cart items: ", cart);
  cart.forEach((item) => {
    cartItems.innerHTML += `
          <div class="cart-item">
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        `;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const addonItems = document.getElementById("addon-items");

  renderCartItems();

  const addons = [
    {
      id: 1,
      name: "Bluetooth speaker",
      price: "Rs. 349",
    },
    {
      id: 2,
      name: "Photo Display",
      price: "Rs. 150",
    },
    {
      id: 3,
      name: "LED Digital Alarm clock",
      price: "Rs. 299",
    },
    {
      id: 4,
      name: "Dream catcher",
      price: "Rs. 259",
    },
    {
      id: 5,
      name: "Mood board",
      price: "Rs. 299",
    },
    {
      id: 6,
      name: "Artifical House Plant",
      price: "Rs. 49",
    },
    {
      id: 7,
      name: "Curtain Set",
      price: "Rs. 499",
    },
    {
      id: 8,
      name: "Soft toy",
      price: "Rs. 359",
    },
    {
      id: 9,
      name: "Cube Storage organizer",
      price: "Rs. 399",
    },
  ];

  addons.forEach((addon) => {
    addonItems.innerHTML += `
      <div class="addon-item">
        <input type="checkbox" id="addon-${addon.id}" name="addons" value="${addon.id}">
        <label for="addon-${addon.id}">${addon.name}  Price: ${addon.price}</label>
      </div>
    `;
  });
});
