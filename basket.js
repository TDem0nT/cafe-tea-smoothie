document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cartContainer');
    const totalPriceDisplay = document.getElementById('totalPrice');
    const checkoutButton = document.getElementById('checkoutButton');
    const thankYouPopup = document.getElementById('thankYouPopup');
    const closeThankYouButton = document.getElementById('closeThankYouButton');

    let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

    function renderCart() {
        cartContainer.innerHTML = '';
        let total = 0;

        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <p>${item.name}</p>
                    <p>${item.price} Baht</p>
                    <p>Quantity: <span id="item-quantity-${index}">${item.quantity}</span></p>
                </div>
                <div class="cart-item-controls">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            `;
            cartContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        totalPriceDisplay.textContent = total;
    }

    window.updateQuantity = (index, delta) => {
        cartItems[index].quantity += delta;
        if (cartItems[index].quantity <= 0) {
            cartItems[index].quantity = 1;
        }
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCart();
    };

    checkoutButton.addEventListener('click', () => {
        if (cartItems.length > 0) {
            // Clear the cart
            sessionStorage.removeItem('cartItems');
            cartItems = [];
            renderCart();

            // Show the popup
            thankYouPopup.classList.remove('hidden');
        }
    });

    // Close the popup
    closeThankYouButton.addEventListener('click', () => {
        thankYouPopup.classList.add('hidden');
    });

    renderCart();
});
