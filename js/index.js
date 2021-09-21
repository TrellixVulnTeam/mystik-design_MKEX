//Slider Swiper JS (libreria) utilizado detector de pantalla agregado

var swiper = new Swiper(".mySwiper", {
  slidesPerView:1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },  
});




//Switch logofilio vs redes sociales

$("#redesBtn").click(function() {
    $("#redesBtn").css("filter", "none").css("z-index", "8").css("width", "169px");
    $("#logofolioBtn").css("filter", "grayscale(100%)").css("z-index", "7").css("width", "229px");
  });

  $("#logofolioBtn").click(function() {
    $("#logofolioBtn").css("filter", "none").css("z-index", "8").css("width", "169px");
    $("#redesBtn").css("filter", "grayscale(100%)").css("z-index", "7").css("width", "229px");
  });
