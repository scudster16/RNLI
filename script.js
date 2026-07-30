document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Mobile Navigation
    =============================== */

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.querySelector("nav ul");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {

            const open = nav.style.display === "flex";

            if (open) {
                nav.style.display = "none";
            } else {
                nav.style.display = "flex";
                nav.style.flexDirection = "column";
                nav.style.position = "absolute";
                nav.style.top = "80px";
                nav.style.right = "20px";
                nav.style.background = "#012b45";
                nav.style.padding = "1rem";
                nav.style.borderRadius = "12px";
                nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
                nav.style.zIndex = "999";
            }

        });
    }

    /* ===============================
       Sticky Header
    =============================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            header.style.background = "#012b45";
        } else {
            header.style.background = "rgba(1,43,69,.96)";
        }

    });

    /* ===============================
       Scroll Reveal Animation
    =============================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.animate([
                    {
                        opacity: 0,
                        transform: "translateY(30px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ], {
                    duration: 700,
                    easing: "ease-out",
                    fill: "forwards"
                });

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll("section, .cards article, .grid article, .stats div")
        .forEach(element => {

            element.style.opacity = "0";
            observer.observe(element);

        });

    /* ===============================
       Animated Counters
    =============================== */

    document.querySelectorAll(".stats h2").forEach(counter => {

        const originalText = counter.textContent.trim();

        const target = parseInt(originalText.replace(/\D/g, ""));

        if (!target) return;

        const suffix = originalText.replace(/[0-9]/g, "");

        let current = 0;

        const increment = Math.ceil(target / 80);

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            counter.textContent = current + suffix;

        }, 20);

    });

    /* ===============================
       Smooth Scrolling
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetID = this.getAttribute("href");

            const target = document.querySelector(targetID);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

    /* ===============================
       Back To Top Button
    =============================== */

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id = "backToTop";

    topButton.style.position = "fixed";
    topButton.style.right = "20px";
    topButton.style.bottom = "20px";
    topButton.style.width = "50px";
    topButton.style.height = "50px";
    topButton.style.border = "none";
    topButton.style.borderRadius = "50%";
    topButton.style.background = "#f58220";
    topButton.style.color = "#fff";
    topButton.style.fontSize = "22px";
    topButton.style.cursor = "pointer";
    topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";
    topButton.style.display = "none";
    topButton.style.transition = "0.3s";

    document.body.appendChild(topButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
