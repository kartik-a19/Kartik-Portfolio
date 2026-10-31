
// ===== THEME TOGGLE =====

const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
    themeButton.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        themeButton.textContent = document.body.classList.contains("dark-mode")
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";
    });
}


// ===== SCROLL REVEAL ANIMATION =====

const revealElements = document.querySelectorAll(
    "#about, #skills, #project, #contact"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.1
    });

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
        observer.observe(element);
    });

} else {
    revealElements.forEach(function (element) {
        element.classList.add("active");
    });
}
