let slideIndex = 0;

let slider = document.getElementById('slider')

let slides = slider.getElementsByClassName('slide')

let slideControl = document.getElementById('slide-control')

let slideControlItems = slideControl.getElementsByClassName('slide-control-item')


slider.style.marginTop = '-' + slideIndex + '00vh'

setTimeout(() => {
	slideControlItems[slideIndex].classList.add('active')
	slides[slideIndex].classList.add('active')
}, 500)
// for size buttons
// Get all size elements
const sizeButtons = document.querySelectorAll('.size');

// Function to handle click event
function handleSizeClick(event) {
    // Remove 'active' class from all size buttons
    sizeButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked size button
    event.target.classList.add('active');
}

// Add click event listener to each size button
sizeButtons.forEach(button => {
    button.addEventListener('click', handleSizeClick);
});

//

//for showing the added items
// Get the "Add to cart" buttons
const addToCartButtons = document.querySelectorAll('#add-to-cart');

// Function to handle adding items to the cart
function addToCart(event) {
    const productName = event.target.closest('.product-info').querySelector('.product-name h3').innerText;
    const productPrice = event.target.closest('.product-info').querySelector('.product-price').innerText;

    // Create an object representing the item to be added to the cart
    const item = {
        name: productName,
        price: productPrice
        // You can add more details here if needed (size, color, etc.)
    };

    // Retrieve the existing cart items from localStorage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new item to the cart
    cartItems.push(item);

    // Save the updated cart items to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Update the cart count in the navbar
    updateCartCount();
}

// Function to update the cart count in the navbar
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartCount.textContent = cartItems.length;
}

// Attach click event listeners to "Add to cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Update cart count on page load
updateCartCount();

//
// Selecting the elements
const addToCartBtn = document.getElementById('add-to-cart');
const cartCount = document.getElementById('cart-count');

let itemCount = 0; // Initial cart count

// Function to handle adding items to the cart
function addToCart() {
  itemCount++; // Increase the count by 1
  cartCount.textContent = itemCount; // Update the cart count displayed
  alert("Item Added!!!");
}

// Adding click event listener to the "Add to Cart" button
addToCartBtn.addEventListener('click', addToCart);




chooseProduct = (index) => {
	if (index === slideIndex) return

	slideIndex = index

	let currSlideControl = slideControl.querySelector('.slide-control-item.active')
	currSlideControl.classList.remove('active')

	let currSlide = slider.querySelector('.slide.active')
	currSlide.classList.remove('active')

	setTimeout(() => {
		slider.style.marginTop = '-' + slideIndex + '00vh'
		slideControlItems[slideIndex].classList.add('active')
		slides[slideIndex].classList.add('active')
	}, 1500)
	
}

Array.from(slideControlItems).forEach((el, index) => {
	el.onclick = function() {
		chooseProduct(index)
	}
})

let modal = document.getElementById('modal')

let closeBtn = document.getElementById('modal-close')

closeBtn.onclick = () => {
	modal.style.display = 'none'
}

let moreImages = document.getElementsByClassName('more-images-item')

let previewImages = document.getElementsByClassName('img-preview')

Array.from(moreImages).forEach((el) => {
	el.onclick = () => {
		let imgItems = el.parentNode.getElementsByTagName('img')

		Array.from(imgItems).forEach((item, index) => {
			previewImages[index].src = item.src
		})

		let img = el.querySelector('img')
		modal.style.display = 'block'

		let modalContent = modal.querySelector('.modal-content')
		modalContent.src = img.src

		let temp = modalContent.cloneNode(true)
		modalContent.parentNode.replaceChild(temp, modalContent)
	}
})