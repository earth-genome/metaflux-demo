var winHeight = function() {
  $('.screen-pane').each(function() {
    navH = $('.menu').height();
    winH = $(window).height();
    paneH = winH - navH;
    $(this).css('minHeight',parseInt(paneH)+'px');

    // $('.brand-holder').css('marginTop',parseInt(paneH/3) + 'px');
  });
}

var ready = function() {
  winHeight()
}

$(window).resize(function() { winHeight(); });



$(document).ready(ready)
$(document).on('page:load', ready)