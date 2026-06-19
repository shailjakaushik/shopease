// CART COUNT
let cartcount = Number(localStorage.getItem("cartcount")) || 0;
document.getElementById("cart-count").innerText = cartcount;

// CART BUTTONS (FIXED)
document.querySelectorAll(".cart-btn").forEach(button => {
    button.addEventListener("click", () => {
        cartcount++;

        localStorage.setItem("cartcount", cartcount);
        document.getElementById("cart-count").innerText = cartcount;

        alert("Product Added To Cart");
    });
});


// WISHLIST
let wishcount = Number(localStorage.getItem("wishcount")) || 0;
document.getElementById("wish-count").innerText = wishcount;

// WISHLIST BUTTONS
document.querySelectorAll(".wish-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        wishcount++;

        localStorage.setItem("wishcount", wishcount);
        document.getElementById("wish-count").innerText = wishcount;

        btn.innerText = "❤️ Added";
    });
});


// SEARCH
const searchInput = document.getElementById("search");
const msg = document.getElementById("noProductMsg");

searchInput.addEventListener("keyup", function() {

    const value = searchInput.value.toLowerCase();
    const products = document.querySelectorAll(".product");

    let found = false;

    products.forEach(p => {

        let name = p.querySelector("h3").innerText.toLowerCase();

        if(name.includes(value)){
            p.style.display = "block";
            found = true;
        } else {
            p.style.display = "none";
        }
    });

    msg.style.display = (value && !found) ? "block" : "none";
});


// DARK MODE
document.getElementById("darkModeBtn").addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});


// SCROLL
document.getElementById("shopNowBtn").addEventListener("click", () => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});