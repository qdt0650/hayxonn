// hayxonn-3.js

(function($){

var headBox = $('#headBox');
var navBox = $('#naviBox');
var navA = navBox.find('a');

var scrollMove = function(it){
  var naviTarget = it.attr('href');
  var target = $(naviTarget);
  var targetOffset = target.offset().top;
  var move;
  var wrapOffset = $('#wrap').offset().top;
  (targetOffset === wrapOffset) ? move = wrapOffset : move = targetOffset - headBox.outerHeight();
  $('html,body').animate({scrollTop : move + 'px'});
};

navA.on('click', function(e){
  e.preventDefault();
  var _this = $(this);
  scrollMove(_this);
});

})(jQuery);