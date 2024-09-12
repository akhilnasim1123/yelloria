$(".navbar-toggler").click(function () {
  if ($(this).hasClass("collapsed")) {
    $(".navbar").removeClass("navbar-active");
  } else {
    $(".navbar").addClass("navbar-active");
  }
});
$(document).scroll(function () {
  if ($(document).scrollTop() >= 50) {
    console.log("aaaaa");
    $(".navbar-top").addClass("navbar-active");
  } else {
    $(".navbar-top").removeClass("navbar-active");
  }

  if (checkScreenSize() == true) {
    console.log(true);
    if ($(".navbar-collapse").hasClass("show")) {
      $(".navbar-top").addClass("navbar-active");
    }
  }
});

function checkScreenSize() {
  var newWindowWidth = $(window).width();
  if (newWindowWidth < 481) {
    return true;
  } else {
    return false;
  }
}


$(document).ready(function () {
  $(".").slick({
    slidesToShow: 1,
    autoplay: true,
    infinite: true,
    // speed: 5000,
    // autoplaySpeed: 0,
    swipeToSlide: true,
    centerMode: false,
    cssEase: "linear",
    dots: false,
    focusOnSelect: true,
    mobileFirst: true,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      // {
      //   breakpoint: 1400,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(".case-arrow-prev").click(function () {
  $(".casestudy-main-div-two").slick("slickPrev");
});

$(".case-arrow-next").click(function () {
  $(".casestudy-main-div-two").slick("slickNext");
});