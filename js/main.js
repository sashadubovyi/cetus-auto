/////////////////////
/////mobile menu
/////////////////////

const mobileMenu = document.querySelector(".mobile-menu");
const openMenuBtn = document.querySelector(".open-mobile-menu-btn");

openMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (mobileMenu.classList.contains("visible")) {
    mobileMenu.classList.remove("visible");
    openMenuBtn.innerHTML = `
      <svg class="menu-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </svg>
    `;
  } else {
    mobileMenu.classList.add("visible");
    openMenuBtn.innerHTML = `
      <svg class="menu-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M6 18L18 6M6 6l12 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </svg>
    `;
  }
}

/////////////////////
/////scroll page
/////////////////////

const anchorLinks = document.querySelectorAll('a[href^="#"]');

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const yOffset = targetElement.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: yOffset,
      behavior: "smooth",
    });
    toggleMenu();
  }
}

anchorLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

/////////////////////
/////swiper insta
/////////////////////

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      centeredSlides: false,
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
