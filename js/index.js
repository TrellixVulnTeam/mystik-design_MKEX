//Switch logofilio vs redes sociales

$("#redesBtn").click(function() {
    $("#redesBtn").css("filter", "none").css("z-index", "8").css("width", "169px");
    $("#logofolioBtn").css("filter", "grayscale(100%)").css("z-index", "7").css("width", "229px");
  });

  $("#logofolioBtn").click(function() {
    $("#logofolioBtn").css("filter", "none").css("z-index", "8").css("width", "169px");
    $("#redesBtn").css("filter", "grayscale(100%)").css("z-index", "7").css("width", "229px");
  });

  //Slider Swiper

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
