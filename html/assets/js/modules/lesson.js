define([], function(){
  'use strict';

  var lesson = (function(){
    var init = function(){

      $(document).ready(function(){
        $('.lesson-timeline--slick').slick({
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="c-slick__nav slick-prev"><i class="fas fa-angle-left"></i></button>',
          nextArrow: '<button type="button" class="c-slick__nav slick-next"><i class="fas fa-angle-right"></i></button>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
        
        var timelineTopOffset = $('.lesson-timeline-note').offset().top - 48;
        $(window).scroll(function (){
          if($(window).scrollTop() > timelineTopOffset){
            $('.lesson-timeline-fixtop').addClass('is-activated sidebar-in-affected');
            setTimeout(function(){
              $('.lesson-timeline-fixtop').css('transition', 'margin 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)');
            }, 400);
          }else{
            $('.lesson-timeline-fixtop').removeClass('is-activated sidebar-in-affected');
            $('.lesson-timeline-fixtop').css('transition', 'none');
          }
        });

        
      });

    };

    return{
      init: init
    };
  })();

  return lesson;
});

	
	