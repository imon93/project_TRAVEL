$(document).ready(function(){

  $('.back_to_top').click(function() {
      $('html, body').animate({scrollTop: 0}, 500)
  });

  $(window).on('load', function() {
      $('.preloader_area').fadeOut(1000)
  });

  $(window).scroll(function(){
      var scrolling = $(this).scrollTop()

      if (scrolling > 200) {
          $('.navbar').addClass('primary_color')
          $('.back_to_top').fadeIn(500)
      }
      else{
          $('.navbar').removeClass('primary_color')
          $('.back_to_top').fadeOut(500)
      }
  });

});






















const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars-staggered");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header_container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header_container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".feature_card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".destination_card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".package_card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
