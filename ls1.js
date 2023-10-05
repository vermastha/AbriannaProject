 // Retrieve cart data from local storage
 let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
 // Display cart items in the HTML
 const cartItems = document.getElementById('cart-items');
 
 cart.forEach(item => {
   console.log("script loaded successfully")
     const li = document.createElement('li');
     li.textContent = `${item.name} - $${item.price}`;
     cartItems.appendChild(li);
     console.log("child appended successfully")
 });

 function removeItem(index) {
     cart.splice(index, 1); // Remove the item at the specified index
     updateCartDisplay(); // Update the cart display
     saveCartToLocalStorage(); // Save the updated cart to local storage
 }

 // Function to update the cart display
 function updateCartDisplay() {
     const cartItems = document.getElementById('cart-items');
     const cartTotal = document.getElementById('cart-total');
     cartItems.innerHTML = ''; // Clear the previous items
     let total=0;

     cart.forEach((item, index) => {
         const li = document.createElement('li');
         li.textContent = `${item.name} - $${item.price}`;
         
         // Create a "Remove" button and add a click event listener
         const removeButton = document.createElement('button');
         removeButton.textContent = 'Remove';
         removeButton.addEventListener('click', () => removeItem(index));
         
         li.appendChild(removeButton);
         cartItems.appendChild(li);
         total+=item.price
     });
     cartTotal.textContent = `Total: AED ${total}`;
 }

 // Function to save the cart to local storage
 function saveCartToLocalStorage() {
     localStorage.setItem('cart', JSON.stringify(cart));
 }

 // Initial cart display
 updateCartDisplay();