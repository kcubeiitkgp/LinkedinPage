// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});



// =========================
// STICKY HEADER
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// =========================
// REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
    ".mentor-card,.feature-card,.stat-card,.resource-card,.timeline-item,.faq-item"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});



// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".stat-card h3");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const el = entry.target;

        const value = el.innerText;

        const number = parseInt(value);

        if (isNaN(number)) return;

        let current = 0;

        const increment = Math.ceil(number / 40);

        const timer = setInterval(() => {

            current += increment;

            if (current >= number) {

                current = number;

                clearInterval(timer);

            }

            el.innerText = current + "+";

        }, 30);

        counterObserver.unobserve(el);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});



// =========================
// BACK TO TOP BUTTON
// =========================

const button = document.createElement("button");

button.innerHTML = "↑";

button.className = "back-to-top";

document.body.appendChild(button);

button.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        button.classList.add("visible");

    } else {

        button.classList.remove("visible");

    }

});



// =========================
// FOOTER YEAR
// =========================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}
