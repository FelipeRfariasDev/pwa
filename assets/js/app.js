$(function() {

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 120) {
          $("header").addClass("active");
          $(".header").addClass("fixedTop");
          $("body").addClass('active-body');
          $(".btn-burguer").addClass('activeColor');
      } else {
          $("header").removeClass("active");
          $(".header").removeClass("fixedTop");
          $("body").removeClass('active-body');
          $(".btn-burguer").removeClass('activeColor');
      }
  });

  $('.showText').click(function(){
    $('.extraText bdi').toggleClass('active');
    $('.showText').toggleClass('active');
  });

$('.btn-anchor a').click(function(event){
  $('html, body').animate({
  scrollTop: $( $.attr(this, 'href') ).offset().top -150 }, 700);
  event.preventDefault();
});


$('.btn-anchor-link').click(function(event){
  $('html, body').animate({
  scrollTop: $( $.attr(this, 'href') ).offset().top -150 }, 400);
  event.preventDefault();
});

function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 0);
  }
}

// Captures click events of all a elements with href starting with #
$(document).on('click', 'a.btn-anchor-home', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);


function offsetAnchor2() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 85);
  }
}

// Captures click events of all a elements with href starting with #
$(document).on('click', 'a.btn-anchor-atuacao', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor2();
  }, 0);
});




// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor2, 0);


  $(".btn-burguer").click(function () {
    $(".nav-mobile").toggleClass('is-open');
    $("body").toggleClass('lock-nav');
    $(".mobile-menu-overlay").toggleClass('is-open');
    $("header").toggleClass('fixedHeader');
  });

  $(".btn-burguer").on("click", function () {
    $(this).toggleClass("active");
  });

    $('.content-text-atuacao li').on('click', function() {
       $(this).toggleClass('active');
  });

  $('.btn-anchor-link').click(function(){
    event.preventDefault();
    $('.content-text-atuacao li').removeClass('active');

  });

  $('body').bind('cut copy paste',function(e) {
  e.preventDefault();
  return false;
  });

});
