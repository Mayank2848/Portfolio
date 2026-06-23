document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Fix & Enhance Resume Button Action ---
    const cvButton = document.getElementById("cv");
    if (cvButton) {
        cvButton.addEventListener("click", function () {
            // Changed from 'cv.pdf' to 'CV.pdf' to ensure it finds your file case-accurately
            window.open("CV.pdf", "_blank");
        });
    }

    // --- 2. Dark/Light Theme Switch Engine ---
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle.querySelector("i");
    
    // Check local storage for previous choice, otherwise default to light mode
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener("click", function () {
        let theme = document.documentElement.getAttribute("data-theme");
        if (theme === "dark") {
            theme = "light";
        } else {
            theme = "dark";
        }
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        updateThemeIcon(theme);
    });

    function updateThemeIcon(theme) {
        if (theme === "dark") {
            themeIcon.className = "fas fa-sun"; // Sun icon for switching back to light
        } else {
            themeIcon.className = "fas fa-moon"; // Moon icon for switching to dark
        }
    }

    // --- 3. Dynamic Scroll Reveal Effects ---
    const fadeCards = document.querySelectorAll(".card");
    
    const revealOnScroll = function () {
        fadeCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // If the element is within view, smoothly scale it to view
            if (cardTop < windowHeight - 50) {
                card.style.opacity = "1";
                card.style.transform = card.style.transform.replace("translateY(20px)", "translateY(0)");
            }
        });
    };

    // Prepare cards for slide-up reveal entrance
    fadeCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
    });

    // Fire on load and on scroll
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});