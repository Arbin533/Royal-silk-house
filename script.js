
const products = [
{
    id: "RSH001",
    name: "Cotton Printed Mekhela Chador",
    originalPrice: "₹200",
    offerPrice: "₹140",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐⭐ (4.8)",
    category: "Cotton Printed",
    image: "products/RSH001.jpeg"
},
{
    id: "RSH002",
    name: "Cotton Printed Mekhela Chador",
    originalPrice: "₹200",
    offerPrice: "₹140",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐☆ (4.5)",
    category: "Cotton Printed",
    image: "products/RSH002.jpeg"
},
{
    id: "RSH003",
    name: "Cotton Printed Mekhela Chador",
    originalPrice: "₹200",
    offerPrice: "₹140",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐ (4.0)",
    category: "Cotton Printed",
    image: "products/RSH003.jpeg"
},
{
    id: "RSH004",
    name: "Cotton Printed Mekhela Chador",
    originalPrice: "₹200",
    offerPrice: "₹140",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐☆ (4.3)",
    category: "Cotton Printed",
    image: "products/RSH004.jpeg"
},
{
    id: "RSH005",
    name: "Ghesa Mekhela (3 Pieces Set)",
    originalPrice: "₹450",
    offerPrice: "₹200",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐⭐ (4.8)",
    category: "Ghesa Mekhela",
    image: "products/RSH005.jpeg",
    extraImage: "products/RSH005-2.jpeg"
},
{
    id: "RSH006",
    name: "Ari Cotton Mekhela Chador",
    originalPrice: "₹700",
    offerPrice: "₹400",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Ari Cotton",
    image: "products/RSH006.jpeg"
},
{
    id: "RSH007",
    name: "Ari Cotton Mekhela Chador",
    originalPrice: "₹700",
    offerPrice: "₹400",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐☆ (4.7)",
    category: "Ari Cotton",
    image: "products/RSH007.jpeg"
},
{
    id: "RSH008",
    name: "Ari Cotton Mekhela Chador",
    originalPrice: "₹700",
    offerPrice: "₹400",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐ (4.2)",
    category: "Ari Cotton",
    image: "products/RSH008.jpeg"
},
{
    id: "RSH009",
    name: "Ari Cotton Mekhela Chador",
    originalPrice: "₹700",
    offerPrice: "₹400",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐⭐ (4.8)",
    category: "Ari Cotton",
    image: "products/RSH009.jpeg"
},
{
    id: "RSH010",
    name: "Ari Cotton Mekhela Chador",
    originalPrice: "₹700",
    offerPrice: "₹400",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐☆ (4.6)",
    category: "Ari Cotton",
    image: "products/RSH010.jpeg"
},
{
    id: "RSH011",
    name: "Ari Cotton Mekhela Chador",
    originalPrice: "₹700",
    offerPrice: "₹400",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Ari Cotton",
    image: "products/RSH011.jpeg"
},
{
    id: "RSH012",
    name: "Ari Cotton Mekhela Chador",
    originalPrice: "₹700",
    offerPrice: "₹400",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐ (4.1)",
    category: "Ari Cotton",
    image: "products/RSH012.jpeg"
},
{
    id: "RSH013",
    name: "Ari Cotton Mekhela Chador",
    originalPrice: "₹700",
    offerPrice: "₹400",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐☆ (4.5)",
    category: "Ari Cotton",
    image: "products/RSH013.jpeg"
},
{
    id: "RSH014",
    name: "Ari Cotton Mekhela Chador",
    originalPrice: "₹700",
    offerPrice: "₹400",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐⭐ (4.8)",
    category: "Ari Cotton",
    image: "products/RSH014.jpeg"
},
{
    id: "RSH015",
    name: "Ari Cotton Mekhela Chador",
    originalPrice: "₹700",
    offerPrice: "₹400",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐ (4.3)",
    category: "Ari Cotton",
    image: "products/RSH015.jpeg"
},
{
    id: "RSH016",
    name: "Ari Cotton Mekhela Chador",
    originalPrice: "₹700",
    offerPrice: "₹400",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐⭐ (4.9)",
    category: "Ari Cotton",
    image: "products/RSH016.jpeg"
},
{
    id: "RSH017",
    name: "Ari Cotton Mekhela Chador",
    originalPrice: "₹700",
    offerPrice: "₹400",
    shipping: "₹100",
    rating: "⭐⭐⭐⭐☆ (4.4)",
    category: "Ari Cotton",
    image: "products/RSH017.jpeg"
},
];

const productsContainer = document.getElementById("products-container");
const searchInput = document.getElementById("search-input");
const bannerImage = document.getElementById("category-banner-image");

function displayProducts(productsToShow) {

    productsContainer.innerHTML = "";

    productsToShow.forEach(product => {

        productsContainer.innerHTML += `
        <div class="product-card" data-product-id="${product.id}">

          <div class="product-image">

            <img src="${product.image}" alt="${product.name}">

            <span class="offer-badge">
    ${Math.round(
        ((parseInt(product.originalPrice.replace("₹", "")) -
        parseInt(product.offerPrice.replace("₹", ""))) /
        parseInt(product.originalPrice.replace("₹", ""))) * 100
    )}% OFF
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

function changeBanner(category){

    if(!bannerImage) return;

    if(category === "Cotton Printed"){
        bannerImage.src = "products/cotton-printed-banner.jpeg";
    }

    else if(category === "Ghesa Mekhela"){
        bannerImage.src = "products/RSH005-2.jpeg";
    }

    else if(category === "Ari Cotton"){
        bannerImage.src = "products/ari-banner.jpeg";
    }

    else{
        bannerImage.src = "banner.png";
    }

} // ← YAHAN FUNCTION KHATAM

// Iske niche add karo 👇
if (bannerImage) {
    bannerImage.src = "banner.png";
}

const categoryButtons = document.querySelectorAll(".category-card");

categoryButtons.forEach(button => {

button.addEventListener("click", function () {

const selectedCategory = this.dataset.category;

if(selectedCategory === "All"){

displayProducts(products);
changeBanner("All");

}

else{

const filteredProducts = products.filter(product => {

return product.category === selectedCategory;

});

displayProducts(filteredProducts);

changeBanner(selectedCategory);

}

});

});

// ===============================
// HOMEPAGE SPECIAL OFFERS
// ===============================

const specialProductsContainer =
    document.getElementById("special-products");

if (specialProductsContainer) {

    const specialProducts = products.slice(0, 8);

    specialProducts.forEach(product => {

        const discount = Math.round(
            (
                (
                    parseInt(product.originalPrice.replace("₹", "")) -
                    parseInt(product.offerPrice.replace("₹", ""))
                ) /
                parseInt(product.originalPrice.replace("₹", ""))
            ) * 100
        );

        specialProductsContainer.innerHTML += `

        <div class="product-card"
             data-product-id="${product.id}">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <span class="offer-badge">
                    ${discount}% OFF
                </span>

            </div>

            <h3>${product.name}</h3>

            <p class="old-price">
                Original Price:
                <span>${product.originalPrice}</span>
            </p>

            <p class="price">
                Offer Price: ${product.offerPrice}
            </p>

            <p class="shipping">
                Shipping Charge: ${product.shipping}
            </p>

            <p class="cod">
                No Cash on Delivery
            </p>

            <p class="rating">
                ${product.rating}
            </p>

            <div class="quantity-box">

                <button class="qty-minus">
                    -
                </button>

                <input
                    type="number"
                    class="qty-input"
                    value="1"
                    min="1"
                >

                <button class="qty-plus">
                    +
                </button>

            </div>

            <button class="whatsapp-btn">
                Order on WhatsApp
            </button>

        </div>

        `;

    });

}


// ===============================
// QUANTITY BUTTONS
// ===============================

document.addEventListener("click", function(e) {

    if (e.target.classList.contains("qty-plus")) {

        const card =
            e.target.closest(".product-card");

        const input =
            card.querySelector(".qty-input");

        input.value =
            Number(input.value) + 1;

    }


    if (e.target.classList.contains("qty-minus")) {

        const card =
            e.target.closest(".product-card");

        const input =
            card.querySelector(".qty-input");

        if (Number(input.value) > 1) {

            input.value =
                Number(input.value) - 1;

        }

    }

});


// ===============================
// MOBILE MENU
// ===============================

const menuBtn =
    document.querySelector(".menu-btn");

const mobileMenu =
    document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener(
        "click",
        function() {

            mobileMenu.classList.toggle("show");

        }
    );

}


// ===============================
// WHATSAPP ORDER
// ===============================

document.addEventListener("click", function(e) {

    if (!e.target.classList.contains("whatsapp-btn")) {
        return;
    }

    e.preventDefault();

    const card =
        e.target.closest(".product-card");

    if (!card) {
        return;
    }

    const productId =
        card.dataset.productId;

    const product =
        products.find(
            p => p.id === productId
        );

    if (!product) {
        alert("Product information not found.");
        return;
    }

    const qtyInput =
        card.querySelector(".qty-input");

    const quantity =
        qtyInput
            ? Number(qtyInput.value) || 1
            : 1;

    const message =
`Hello Royal Silk House,

I want to order this product.

Product Code : ${product.id}

Product Name : ${product.name}

Quantity : ${quantity}

Offer Price : ${product.offerPrice}

Shipping Charge : ${product.shipping}

Product Link :
https://royalsilkhouse.in/shop.html?product=${product.id}

Please confirm my order.`;

    window.open(
        `https://wa.me/918822016942?text=${encodeURIComponent(message)}`,
        "_blank"
    );

});

// ===============================
// PRODUCT POPUP
// ===============================

const popup = document.getElementById("popup");

const popupImage = document.getElementById("popup-image");

const popupExtraImage =
    document.getElementById("popup-extra-image");

const popupName =
    document.getElementById("popup-name");

const popupOriginal =
    document.getElementById("popup-original");

const popupOffer =
    document.getElementById("popup-offer");

const popupShipping =
    document.getElementById("popup-shipping");

const popupWhatsapp =
    document.getElementById("popup-whatsapp");


// ===============================
// OPEN PRODUCT POPUP
// ===============================

document.addEventListener("click", function(e) {

    const image =
        e.target.closest(".product-image");

    if (!image) return;

    const card =
        image.closest(".product-card");

    if (!card) return;

    const productId =
        card.dataset.productId;

    const product =
        products.find(
            p => p.id === productId
        );

    if (!product) return;


    popup.style.display = "flex";


    popupImage.src =
        product.image;

    popupName.innerText =
        product.name;

    popupOriginal.innerText =
        "Original Price: " +
        product.originalPrice;

    popupOffer.innerText =
        "Offer Price: " +
        product.offerPrice;

    popupShipping.innerText =
        "Shipping Charge: " +
        product.shipping;


    // Extra Image

    if (product.extraImage) {

        popupExtraImage.src =
            product.extraImage;

        popupExtraImage.style.display =
            "block";

    } else {

        popupExtraImage.style.display =
            "none";

    }


    // Popup WhatsApp Button

    popupWhatsapp.onclick =
        function(e) {

            e.preventDefault();

            e.stopPropagation();

            const message =
`Hello Royal Silk House,

I want to order this product.

Product Code : ${product.id}

Product Name : ${product.name}

Offer Price : ${product.offerPrice}

Shipping Charge : ${product.shipping}

Product Link :
https://royalsilkhouse.in/shop.html?product=${product.id}

Please confirm my order.`;

            window.open(
                `https://wa.me/918822016942?text=${encodeURIComponent(message)}`,
                "_blank"
            );

        };

});


// ===============================
// CLOSE POPUP
// ===============================

const closePopup =
    document.querySelector(".close-popup");

if (closePopup) {

    closePopup.onclick =
        function() {

            popup.style.display =
                "none";

        };

}


window.addEventListener(
    "click",
    function(e) {

        if (e.target === popup) {

            popup.style.display =
                "none";

        }

    }
);


// ===============================
// OPEN PRODUCT FROM URL
// ===============================

const urlParams =
    new URLSearchParams(
        window.location.search
    );

const productIdFromUrl =
    urlParams.get("product");


if (productIdFromUrl) {

    const productFromUrl =
        products.find(
            p => p.id === productIdFromUrl
        );

    if (productFromUrl) {

        setTimeout(function() {

            popup.style.display =
                "flex";

            popupImage.src =
                productFromUrl.image;

            popupName.innerText =
                productFromUrl.name;

            popupOriginal.innerText =
                "Original Price: " +
                productFromUrl.originalPrice;

            popupOffer.innerText =
                "Offer Price: " +
                productFromUrl.offerPrice;

            popupShipping.innerText =
                "Shipping Charge: " +
                productFromUrl.shipping;


            if (productFromUrl.extraImage) {

                popupExtraImage.src =
                    productFromUrl.extraImage;

                popupExtraImage.style.display =
                    "block";

            } else {

                popupExtraImage.style.display =
                    "none";

            }


            popupWhatsapp.onclick =
                function(e) {

                    e.preventDefault();

                    const message =
`Hello Royal Silk House,

I want to order this product.

Product Code : ${productFromUrl.id}

Product Name : ${productFromUrl.name}

Offer Price : ${productFromUrl.offerPrice}

Shipping Charge : ${productFromUrl.shipping}

Product Link :
https://royalsilkhouse.in/shop.html?product=${productFromUrl.id}

Please confirm my order.`;

                    window.open(
                        `https://wa.me/918822016942?text=${encodeURIComponent(message)}`,
                        "_blank"
                    );

                };

        }, 500);

    }

}