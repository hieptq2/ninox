define([], function(){
  'use strict';

  var landing = (function(){
    var init = function(){

      var $icon         = $('#Section__Landing--Features .icon-wrapper'),
          $featTitle    = $('#Section__Landing--Features .single-feature__title'),
          $featDesrc    = $('#Section__Landing--Features .single-feature__descr'),
          $featActionTitle  = $('#Section__Landing--Features .features-actions__title'),
          $featActionLink   = $('#Section__Landing--Features .features-actions__link'),
          $lewContent = $('.lew-content'),
          $bnf1 = $('#Landing-benefit-1'),
          $bnf2 = $('#Landing-benefit-2'),
          $bnf3 = $('#Landing-benefit-3'),
          $bnf4 = $('#Landing-benefit-4'),
          $bnf5 = $('#Landing-benefit-5');


      function animateClass(){
        var windowHeight = $(window).height();  
        if($(window).scrollTop() > $icon.offset().top - $(window).height()){
          if(!$icon.hasClass('zoomIn')){
            $icon.addClass('zoomIn');
          }
        }
        if($(window).scrollTop() > $featTitle.offset().top - $(window).height()){
          if(!$featTitle.hasClass('fadeInUp')){
            $featTitle.addClass('fadeInUp');
          }
        }
        if($(window).scrollTop() > $featDesrc.offset().top - $(window).height()){
          if(!$featDesrc.hasClass('fadeInUp')){
            $featDesrc.addClass('fadeInUp');
          }
        }
        if($(window).scrollTop() > $featActionTitle.offset().top - $(window).height()){
          if(!$featActionTitle.hasClass('slideInLeft')){
            $featActionTitle.addClass('slideInLeft');
          }
        }
        if($(window).scrollTop() > $featActionLink.offset().top - $(window).height()){
          if(!$featActionLink.hasClass('slideInRight')){
            $featActionLink.addClass('slideInRight');
          }
        }

        // lew
        if($(window).scrollTop() > $lewContent.offset().top - $(window).height()){
          if(!$lewContent.hasClass('fadeInUp')){
            $lewContent.addClass('fadeInUp');
          }
        }


        // benefits

        if($(window).scrollTop() > $bnf1.offset().top - $(window).height()){
          if(!$bnf1.hasClass('flipInX')){
            $bnf1.addClass('flipInX');
          }
        }
        if($(window).scrollTop() > $bnf2.offset().top - $(window).height()){
          if(!$bnf2.hasClass('fadeInRight')){
            $bnf2.addClass('fadeInRight');
          }
        }
        if($(window).scrollTop() > $bnf3.offset().top - $(window).height()){
          if(!$bnf3.hasClass('flipInX')){
            $bnf3.addClass('flipInX');
          }
        }
        if($(window).scrollTop() > $bnf4.offset().top - $(window).height()){
          if(!$bnf4.hasClass('fadeInRight')){
            $bnf4.addClass('fadeInRight');
          }
        }
        if($(window).scrollTop() > $bnf5.offset().top - $(window).height()){
          if(!$bnf5.hasClass('fadeInLeft')){
            $bnf5.addClass('fadeInLeft');
          }
        } 
      }

      function headerFix(){
        if($(window).scrollTop() > 200){
          $('.l-header').addClass('js-away-from-top');
        }else{
          $('.l-header').removeClass('js-away-from-top');
        }
      }

      $(document).ready(function(){

        headerFix();

        
        $('.lew-content').removeClass('fadeInUp');
        animateClass();


        // scroll
        $(window).scroll(function (){
          // console.log($(window).scrollTop());
          headerFix();
          animateClass();
          
        });

        
        $('.intro-image__next-section').click(function(e){
          e.preventDefault();
          $('html, body').animate({
              scrollTop: $("#Section__Landing--Features").offset().top
          }, 1000);
        });



      });

    };

    return{
      init: init
    };
  })();

  return landing;
});

	
	