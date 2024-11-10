let slideIndex = 0;
showSlide(slideIndex);


function changeSlide(n) {
    showSlide(slideIndex += n);
}


function setSlide(n) {
    showSlide(slideIndex = n - 1);
}


function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    
    if (n >= slides.length) { slideIndex = 0; } 
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    for (let dot of dots) {
        dot.classList.remove("active");
    }

   
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}


function autoplaySlides() {
    slideIndex++;
    showSlide(slideIndex);
    setTimeout(autoplaySlides, 3000); 
}


autoplaySlides();
