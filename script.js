let slideIndex = 0;
showSlide(slideIndex);

// Function to change slide by index
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Function to set slide directly
function setSlide(n) {
    showSlide(slideIndex = n - 1);
}

// Function to show a particular slide
function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Loop back to first/last slide if needed
    if (n >= slides.length) { slideIndex = 0; } 
    if (n < 0) { slideIndex = slides.length - 1; }

    // Hide all slides, reset dots
    for (let slide of slides) {
        slide.style.display = "none";
    }
    for (let dot of dots) {
        dot.classList.remove("active");
    }

    // Display current slide and highlight dot
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// Autoplay function
function autoplaySlides() {
    slideIndex++;
    showSlide(slideIndex);
    setTimeout(autoplaySlides, 3000); // Change slide every 3 seconds
}

// Start autoplay
autoplaySlides();
