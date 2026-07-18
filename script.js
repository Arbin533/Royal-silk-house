

const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");

function displayProducts(productsToShow) {

    productsContainer.innerHTML = "";

    productsToShow.forEach(product => {

        productsContainer.innerHTML += `
        <div class="product-card">

          <div class="product-image">

            <img src="${product.image}" alt="${product.name}">

            <span class="offer-badge">
            25% OFF
            </span>

        </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="old-price">
                    Original Price: <span>${product.originalPrice}</span>   
                </p>

                <p class="price">
                    Offer Price: ${product.offerPrice}
                </p>

                <p class="shipping"> | Shipping Charge: ${product.shipping}</p>
                <p class="cod"> | No Cash on Delivery</p>


                <p class="rating">${product.rating}</p>

                <div class="quantity-box">
    <button class="qty-minus">-</button>

    <input type="number" class="qty-input" value="1" min="1">

    <button class="qty-plus">+</button>
</div>

<button class="whatsapp-btn">
    Order on WhatsApp
</button>

            </div>

        </div>
        `;
    });

}

if (productsContainer) {
    displayProducts(products);
}

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const searchValue = searchInput.value.toLowerCase();

        const filteredProducts = products.filter(function(product) {

            return product.name.toLowerCase().includes(searchValue);

        });

        displayProducts(filteredProducts);

    });

}

const categoryButtons = document.querySelectorAll(".category-card");

categoryButtons.forEach(button => {

button.addEventListener("click", function () {

const selectedCategory = this.dataset.category;

if(selectedCategory === "All"){

displayProducts(products);

}

else{

const filteredProducts = products.filter(product => {

return product.category === selectedCategory;

});

displayProducts(filteredProducts);

}

});

});

const specialProductsContainer = document.getElementById("special-products");

if (specialProductsContainer) {

    const specialProducts = products.slice(0, 8);

    specialProducts.forEach(product => {

        specialProductsContainer.innerHTML += `
        <div class="product-card">

            <div class="product-image">

        <img src="${product.image}" alt="${product.name}">

        <span class="offer-badge">
        25% OFF
        </span>

</div>

            <h3>${product.name}</h3>

            <p class="old-price">
                Original Price: <span>${product.originalPrice}</span>
            </p>

            <p class="price">
                Offer Price: ${product.offerPrice}
            </p>

            <p class="shipping"> | Shipping Charge: ${product.shipping}</p>
            <p class="cod"> | No Cash on Delivery</p>
            <p class="rating">${product.rating}</p>
            <div class="quantity-box">
    <button class="qty-minus">-</button>

    <input type="number" class="qty-input" value="1" min="1">

    <button class="qty-plus">+</button>
</div>

<button class="whatsapp-btn">
    Order on WhatsApp
</button>
            
        </div>
        `;

    });

}

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if(menuBtn && mobileMenu){

    menuBtn.addEventListener("click", function(){

        mobileMenu.classList.toggle("show");

    });

}

const popup = document.getElementById("popup");

const popupImage = document.getElementById("popup-image");
const popupName = document.getElementById("popup-name");
const popupOriginal = document.getElementById("popup-original");
const popupOffer = document.getElementById("popup-offer");
const popupShipping = document.getElementById("popup-shipping");
const popupWhatsapp = document.getElementById("popup-whatsapp");

document.addEventListener("click",function(e){

const image = e.target.closest(".product-image");

if(!image) return;

const card = image.closest(".product-card");

if(card){

const image=card.querySelector("img").src;

const name=card.querySelector("h3").innerText;

const original=card.querySelector(".old-price").innerText;

const offer=card.querySelector(".price").innerText;

const shipping=card.querySelector(".shipping").innerText;

popup.style.display="flex";

popupImage.src=image;

popupName.innerText=name;

popupOriginal.innerText=original;

popupOffer.innerText=offer;

popupShipping.innerText=shipping;

popupWhatsapp.href=`https://wa.me/918822016942?text=${encodeURIComponent(
`Hello Royal Silk House,

I want to order:

${name}

Product Link:
https://royalsilkhouse.in/shop.html?product=${product.id}

Please share payment details.`
)}`;

}

});

document.querySelector(".close-popup").onclick=function(){

popup.style.display="none";

}

window.onclick=function(e){

if(e.target===popup){

popup.style.display="none";

}

}

document.addEventListener("click", function(e){

    if(e.target.classList.contains("qty-plus")){

        const input = e.target.parentElement.querySelector(".qty-input");
        input.value = Number(input.value) + 1;

    }

    if(e.target.classList.contains("qty-minus")){

        const input = e.target.parentElement.querySelector(".qty-input");

        if(Number(input.value) > 1){

            input.value = Number(input.value) - 1;

        }

    }

});

document.addEventListener("click", function(e){

    if(!e.target.classList.contains("whatsapp-btn")) return;

    e.preventDefault();

    const card = e.target.closest(".product-card");

    const name = card.querySelector("h3").innerText;

    const code = products.find(p => p.name === name)?.id || "N/A";

    const price = card.querySelector(".price").innerText;

    const shipping = card.querySelector(".shipping").innerText;

    const qtyInput = card.querySelector(".qty-input");

    const quantity = qtyInput ? qtyInput.value : 1;

    const message = `Hello Royal Silk House,

I want to order this product.

Product Code : ${code}

Product Name : ${name}

Quantity : ${quantity}

${price}

${shipping}

Please confirm my order.`;

    window.open(
        `https://wa.me/918822016942?text=${encodeURIComponent(message)}`,
        "_blank"
    );

});S
