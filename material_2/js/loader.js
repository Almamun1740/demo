  function toggleModal(){
      var instance = M.Modal.getInstance($('#modal3'))
      instance.open();
  }

  (function ($) {
    "use strict";
    $(document).ready(function () {
        $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $(".sidenv").sidenav();
    $(".slider").slider({ full_width: true });
    $('.parallax').parallax();
    $(".myreviews").carousel({
        namVisible: 7,
        shift: 55,
        padding: 55,
    });
     /************************************************
            07. PRELOADER JS
        *************************************************/
            setTimeout(function(){
                $('.preloader').fadeToggle();
            }, 5000);
          
     });
}(jQuery));