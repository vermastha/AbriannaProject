let cart = JSON.parse(localStorage.getItem('cart')) || [];

 // Function to remove an item from the cart
 function removeItem(index) {
     cart.splice(index, 1); // Remove the item at the specified index
     updateCartDisplay(); // Update the cart display
     saveCartToLocalStorage(); // Save the updated cart to local storage
 }


 function addToCart(productName, price) {
    // Retrieve existing cart or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected product to the cart
    cart.push({ name: productName, price: price });

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Product added to cart!');
    console.log("added successfully")
 }

 // Function to update the cart display
 function updateCartDisplay() {
     const cartItems = document.getElementById('cart-items');
     cartItems.innerHTML = ''; // Clear the previous items

     cart.forEach((item, index) => {
         const li = document.createElement('li');
         li.textContent = `${item.name} - AED ${item.price}`;
         
         // Create a "Remove" button and add a click event listener
         const removeButton = document.createElement('button');
         removeButton.textContent = 'Remove';
         removeButton.addEventListener('click', () => removeItem(index));
         
         li.appendChild(removeButton);
         cartItems.appendChild(li);
     });
 }

 // Function to save the cart to local storage
 function saveCartToLocalStorage() {
     localStorage.setItem('cart', JSON.stringify(cart));
 }

 // Initial cart display
 updateCartDisplay();