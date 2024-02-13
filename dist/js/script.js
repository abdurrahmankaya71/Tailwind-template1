let mobileBtn = document.getElementById("mobile-btn");
let mobileMenu = document.getElementById("mobile-menu");

mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.add("flex");
});
mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
});
