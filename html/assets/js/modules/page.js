define([], function(){
  'use strict';

  var page = (function(){
    var init = function(){

      $(document).ready(function(){


        // search
        $('.option-wrap__view-more').click(function(){
          if($(this).hasClass('collapsed')){
            $(this).html("Thu gọn");
          }else{
            $(this).html("Xem thêm");
          }
        })
      });

    };

    return{
      init: init
    };
  })();

  return page;
});

	
	