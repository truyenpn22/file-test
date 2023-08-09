$(document).ready(function(){
  $('.silder-wrapper').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      // arrows: true,
      draggable: false,
      prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow"></i></button>',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
  });
});

// Menu
const menu = document.querySelector(".navBar");
const menuButton = document.querySelector(".header-icons");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("is-show");
  menuButton.classList.toggle("open");
});
