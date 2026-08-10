```javascript
/* =====================================================
   PAVITHRA N - PORTFOLIO
   JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (icon) {

            if (navLinks.classList.contains("active")) {
                icon.classList.remove("bi-list");
                icon.classList.add("bi-x");
            } else {
                icon.classList.remove("bi-x");
                icon.classList.add("bi-list");
            }

        }

    });

}


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuToggle) {

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("bi-x");
                icon.classList.add("bi-list");
            }

        }

    });

});


/* =====================================================
   SMOOTH SCROLL
===================================================== */

const pageLinks =
    document.querySelectorAll('a[href^="#"]');

pageLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            const header =
                document.querySelector(".header");

            let headerHeight = 0;

            if (header) {
                headerHeight = header.offsetHeight;
            }

            const position =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: position,
                behavior: "smooth"
            });

        }

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    const currentPosition =
        window.scrollY + 150;

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            currentPosition >= sectionTop &&
            currentPosition < sectionBottom
        ) {

            navigationLinks.forEach(function (link) {
                link.classList.remove("active");
            });

            const activeLink =
                document.querySelector(
                    '.nav-links a[href="#' +
                    sectionId +
                    '"]'
                );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =====================================================
   HEADER SHADOW
===================================================== */

const header =
    document.querySelector(".header");

function updateHeader() {

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 5px 25px rgba(38, 51, 42, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

}

window.addEventListener(
    "scroll",
    updateHeader
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".about-grid, " +
        ".skill-card, " +
        ".timeline-item, " +
        ".project-card, " +
        ".experience-card, " +
        ".contact-container"
    );

function revealElementsOnScroll() {

    revealElements.forEach(function (element) {

        const elementPosition =
            element.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (
            elementPosition <
            screenHeight - 80
        ) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealElementsOnScroll
);


/* =====================================================
   CLOSE MENU WITH ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            if (navLinks) {
                navLinks.classList.remove("active");
            }

            if (menuToggle) {

                const icon =
                    menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove("bi-x");
                    icon.classList.add("bi-list");

                }

            }

        }

    }
);


/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        if (!menuToggle || !navLinks) {
            return;
        }

        const clickedMenu =
            menuToggle.contains(event.target);

        const clickedNavigation =
            navLinks.contains(event.target);

        if (
            navLinks.classList.contains("active") &&
            !clickedMenu &&
            !clickedNavigation
        ) {

            navLinks.classList.remove("active");

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("bi-x");
                icon.classList.add("bi-list");

            }

        }

    }
);


/* =====================================================
   INITIAL LOAD
===================================================== */

updateActiveNavigation();

updateHeader();

revealElementsOnScroll();

console.log(
    "Pavithra Portfolio loaded successfully."
);
```
