// Toggle menú móvil
const navToggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__links a");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
  });

  // Cerrar menú al hacer clic en un link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--open");
    });
  });
}

// Año automático
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// LIGHTBOX GALERÍA
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-image");
const lightboxClose = document.querySelector(".lightbox__close");

if (galleryImages.length && lightbox && lightboxImg) {
  // Abrir al hacer click en una imagen
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "";
      lightbox.classList.add("lightbox--open");
    });
  });

  // Cerrar con botón X
  if (lightboxClose) {
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("lightbox--open");
    });
  }

  // Cerrar haciendo click fuera de la imagen (en el fondo oscuro)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("lightbox--open");
    }
  });

  // Opcional: cerrar con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("lightbox--open");
    }
  });
}
