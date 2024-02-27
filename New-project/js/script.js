$(document).ready(function () {
  // menu-toggle
  $(".menu-toggle").click(function () {
    $(this).toggleClass("on");
    $(".navbar").slideToggle();
  });
  // scrolltop
  $(".scrolltop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
  var offSetTop = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offSetTop) {
      $(".scrolltop").fadeIn();
    } else {
      $(".scrolltop").fadeOut();
    }
  });
});

//sticky-header

$(document).scroll(function () {
  if ($(this).scrollTop() > 30) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
  var y = $(this).scrollTop();
  if (y > 500) {
    $(".scrollToTop").fadeIn();
  } else {
    $(".scrollToTop").fadeOut();
  }
});
