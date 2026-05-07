// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typing Effect

const typingText = document.querySelector(".typing");

const words = [
  "Flutter Developer",
  "AI Engineer",
  "Frontend Developer",
  "Mobile App Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex++);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;

    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((section) => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom){
      section.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();