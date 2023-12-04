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