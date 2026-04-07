/* ===============================
   LOAD COMPONENTS (Navbar, Header, Footer)
================================= */
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "components/navbar.html");
    loadComponent("header", "components/header.html");
    loadComponent("footer", "components/footer.html");
});


/* ===============================
   MOBILE NAVBAR TOGGLE
================================= */
document.addEventListener("click", function (e) {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");

    if (!toggle || !menu) return;

    if (toggle.contains(e.target)) {
        menu.classList.toggle("active");
    }

    // Close menu when clicking outside
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("active");
    }
});


/* ===============================
   SMOOTH SCROLLING
================================= */
document.addEventListener("click", function (e) {
    if (e.target.tagName === "A" && e.target.hash) {
        e.preventDefault();

        const target = document.querySelector(e.target.hash);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
});