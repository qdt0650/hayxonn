// hayxonn-2.js

(function($){

var win = $(window);
var winTop = win.scrollTop();
console.log(winTop);

var headBox = $('#headBox');
var headH = headBox.offset().top;
// console.log(headH);

var scrollFix = function(){
  winTop;
  if(headH <= winTop ){
    headBox.css({'position':'fixed'});
  }else{
    headBox.removeAttr('style');
  }
};
scrollFix();

})(jQuery);
