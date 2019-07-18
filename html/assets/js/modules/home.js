define([], function(){
  'use strict';

  var home = (function(){
    var init = function(){

      var numCourseSlides = $('.list-courses--slide-h .single-course').length;
      // console.log(numCourseSlides);
      var centerMode = true;
      if(numCourseSlides <= 3){
        centerMode = false;
      }

      $(document).ready(function(){
        $('.list-courses--slide-h').slick({
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          // infinite: true,
          // variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: centerMode,
          centerPadding: '16px',
          prevArrow: '<button type="button" class="c-slick__nav slick-prev"><i class="fas fa-angle-left"></i></button>',
          nextArrow: '<button type="button" class="c-slick__nav slick-next"><i class="fas fa-angle-right"></i></button>',
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });

        var numCourseSlides = $('.list-courses--slide-h--2 .single-course').length;
        // console.log(numCourseSlides);
        var centerMode = true;
        if(numCourseSlides <= 3){
          centerMode = false;
        }

        $('.list-courses--slide-h--2').slick({
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          infinite: true,
          // variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: centerMode,
          centerPadding: '16px',
          prevArrow: '<button type="button" class="c-slick__nav slick-prev"><i class="fas fa-angle-left"></i></button>',
          nextArrow: '<button type="button" class="c-slick__nav slick-next"><i class="fas fa-angle-right"></i></button>',
          responsive: [
            {
              breakpoint: 1560,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 1020,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });

        $('.js-course-sorting-menu .c-dropdown-menu__item').click(function(e){
          e.preventDefault();
          $('.js-course-sorting-menu .c-dropdown-menu__item').removeClass('active');
          $(this).addClass('active');
          $('.js-course-sorting-menu .js-course-sorting-menu__label').html('<span class="h-ml-8">' + $(this).text() + '</span>');
        }) 
      });

    };

    return{
      init: init
    };
  })();

  return home;
});

	
	