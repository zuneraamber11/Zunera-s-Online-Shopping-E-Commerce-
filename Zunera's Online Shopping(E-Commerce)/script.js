/* ==========================
   ZUNERA SHOPPING SCRIPT
========================== */

// ===== Automatic Image Slider =====

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => slide.classList.remove("active"));

    if (slides.length > 0) {
        slides[index].classList.add("active");
    }

}

function nextSlide() {

    if (slides.length > 0) {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }

}

if (slides.length > 0) {

    showSlide(0);

    setInterval(nextSlide, 3000);

}

// ===============================
// CART COUNTER
// ===============================

let cartCount = 0;

let cartDisplay = document.getElementById("cart-count");

let cartButtons = document.querySelectorAll(".product button");

cartButtons.forEach(button => {

    button.addEventListener("click", function () {

        cartCount++;

        if (cartDisplay) {
            cartDisplay.innerText = cartCount;
        }

        alert("Product added to cart!");

    });

});

// ===============================
// PRODUCT SEARCH
// ===============================

let search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let products = document.querySelectorAll(".product");

        products.forEach(product => {

            let name = product.querySelector("h3").innerText.toLowerCase();

            if (name.includes(value)) {
                product.style.display = "block";
            }
            else {
                product.style.display = "none";
            }

        });

    });

}

// ===============================
// QUANTITY BUTTONS
// ===============================

let qty = document.getElementById("qty");

let plus = document.getElementById("plus");

let minus = document.getElementById("minus");

if (qty && plus && minus) {

    plus.onclick = function () {

        qty.value++;

    };

    minus.onclick = function () {

        if (qty.value > 1) {

            qty.value--;

        }

    };

}

// ===============================
// NEWSLETTER
// ===============================

let newsletter = document.querySelector(".newsletter form");

if (newsletter) {

    newsletter.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you for subscribing!");

        this.reset();

    });

}

// ===============================
// CONTACT FORM
// ===============================

let contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Message Sent Successfully!");

        this.reset();

    });

}