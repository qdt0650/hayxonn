// hayxonn.js

(function($){
// jQuery

var headBox = $('#headBox');
var navBox = $('#naviBox');
var sideBox = $('#sideBox');

var topBtn = $('.top_btn');

topBtn.find('a').on('click', function(e){
  e.preventDefault();
  $('html,body').animate({scrollTop : 0 });
});


})(jQuery);