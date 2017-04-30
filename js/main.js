$(document).ready(function() {
  $('.flexslider').flexslider({
  animation: "slide",
  controlNav: false,
  start: function(slider){
     $('.flexslider .flex-direction-nav').css({visibility:'hidden'});
  }
  });
});
