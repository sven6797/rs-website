document.addEventListener('DOMContentLoaded', function () {
    // === Carousel Logic ===
    const carouselImages = document.querySelector('.carousel-images');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    let currentSlide = 0;

    function updateCarousel() {
        const offset = -currentSlide * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
        indicators.forEach((btn, index) => {
            btn.classList.toggle('active', index === currentSlide);
        });
    }

    function autoSlide() {
        currentSlide = (currentSlide + 1) % indicators.length;
        updateCarousel();
    }

    indicators.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    setInterval(autoSlide, 3000);

    // === Doctor Schedule Button ===
    const doctorScheduleButton = document.getElementById('doctor-schedule');
    if (doctorScheduleButton) {
        doctorScheduleButton.addEventListener('click', () => {
            alert('Doctor Schedule Image will be displayed here.');
        });
    }

    // === Audio Player Logic ===
    const audio = document.getElementById("bg-music");
    const toggle = document.getElementById("audio-toggle");

    if (audio && toggle) {
        const icon = toggle.querySelector("i");

        toggle.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                icon.classList.remove("fa-play");
                icon.classList.add("fa-pause");
            } else {
                audio.pause();
                icon.classList.remove("fa-pause");
                icon.classList.add("fa-play");
            }
        });
    }

    // === Contact Form (WhatsApp) ===
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const phone = "6283833025236"; // Ganti sesuai kebutuhan
            const text = `Bang saya mawu tanya,%0A%0A*Nama:* ${name}%0A*Email:* ${email}%0A*Pesan:* ${message}`;
            const url = `https://wa.me/${phone}?text=${text}`;

            window.open(url, "_blank");
        });
    }

    // === Mode Toggle Logic (Ganti Halaman index / index-dev) ===
    const modeToggles = document.querySelectorAll('#modeToggle, #modeToggleFloating');

    modeToggles.forEach(button => {
        button.addEventListener('click', () => {
            const currentPage = window.location.pathname;

            if (currentPage.includes("index-dev.html")) {
                window.location.href = "index.html";
            } else {
                window.location.href = "index-dev.html";
            }
        });
    });

    // === Set Ikon Toggle (Hanya Untuk Tampilan Awal) ===
    const currentPath = window.location.pathname;
    const currentMode = currentPath.includes("index-dev.html") ? "personal" : "resmi";

    modeToggles.forEach(toggleBtn => {
        const icon = toggleBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-adjust');
            icon.classList.add(currentMode === 'resmi' ? 'fa-moon' : 'fa-sun');
        }
    });
});
