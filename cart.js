document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart-items");
  const addonItems = document.getElementById("addon-items");

  // Load cart items from local storage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Cart items: ", cart);
  cart.forEach((item) => {
    cartItems.innerHTML += `
        <div class="cart-item">
          <h3>${item.name}</h3>
          <p>Price: ${item.price}</p>
          <!-- Add more details as needed -->
        </div>
      `;
  });

  // Addons (example array, modify as needed)
  const addons = [
    // Add your addons here
  ];

  addons.forEach((addon) => {
    addonItems.innerHTML += `
        <div class="addon-item">
          <h3>${addon.name}</h3>
          <p>Price: ${addon.price}</p>
          <!-- Add more details as needed -->
        </div>
      `;
  });
});
