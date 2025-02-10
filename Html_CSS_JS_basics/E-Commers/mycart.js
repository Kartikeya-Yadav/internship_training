const cart = document.getElementById('cart02');

const cartItems = JSON.parse(sessionStorage.getItem("cartItem"))
console.log(cartItems);


// Render cart 
function renderCart() {
    cart.innerHTML = '<h2>Cart</h2>';
    if (cartItems.length === 0) {
        cart.innerHTML += '<p>Your cart is empty</p>';
    } else {
        cartItems.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <h4>${item.name}</h4>
                <p>Price: Rs.${item.price}</p>
                <p>Category: ${item.category}</p>
                <button onclick="removeItem(${index})">Remove</button>
            `;
            cart.appendChild(itemDiv);
        });

        const totalItems = cartItems.length;
        const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
        cart.innerHTML += `
            <h3>Cart Summary...</h3>
            <h5>Total Items: ${totalItems}</h5>
            <h5>Total Price: Rs.${totalPrice}</h5>
        `;
    }
}

function removeItem(index) {
    cartItems.splice(index, 1);
    renderCart();
}

renderCart();


