const products = [
{   id: "p1",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p1.jpeg"
},
{
    id: "p2",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p2.jpeg"
},
{
    id: "p3",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice : "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p3.jpeg"
},
{
    id: "p4",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p4.jpeg"
},
{
    id: "p5",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p5.jpeg"
},
{
    id: "p6",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p6.jpeg"
},
{
    id: "p7",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p7.jpeg"
},
{
    id: "p8",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p8.jpeg"
},
{
    id: "p9",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p9.jpeg"
},
{
    id: "p10",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",                                    
    category: "Cotton",
    image: "products/p10.jpeg"
},
{
    id: "p11",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p11.jpeg"
},
{
    id: "p12",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p12.jpeg"
},
{
    id: "p13",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p13.jpeg"
},
{
    id: "p14",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p14.jpeg"
},
{
    id: "p15",
    name: "Kesa Pat Cotton Mekhela Chador",
    originalPrice: "₹499",
    offerPrice: "₹299",
    shipping: "₹100",
     rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Cotton",
    image: "products/p15.jpeg"
}
];

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

                <p class="rating">${product.rating}</p>

                <a href="https://wa.me/918822016942?text=${encodeURIComponent(
`Hello Royal Silk House,

I want to order:

${product.name}

Product Link:
https://royalsilkhouse.in/shop.html?product=${product.id}

Please share payment details.`
)}"
                class="whatsapp-btn">

                Order on WhatsApp

                </a>

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
            <p class="rating">${product.rating}</p>

            <a href="https://wa.me/918822016942?text=${encodeURIComponent(
            `Hello Royal Silk House,

            I want to order:

            ${product.name}

            Product Link:
            https://royalsilkhouse.in/shop.html?product=${product.id}

            Please share payment details.`
            )}" class="whatsapp-btn">
                Order on WhatsApp
            </a>

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

const card=e.target.closest(".product-card");

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