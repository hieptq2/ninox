define([], function(){
  'use strict';

  var profile = (function(){
    var init = function(){

      $(document).ready(function(){
         var moment = require('moment');

        $('input.js-datepicker--single').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          startDate: '01/01/2000',
          maxDate:  moment().format('DD/MM/YYYY'),
          locale: {
            format: 'DD/MM/YYYY'
          },
          opens: 'left'
        });


        // save button
        

        function cardFooterWidth(sidebar = 0){
          // if($(window).outerWidth() >= 992){
          //   var width = $('.c-card--profile').outerWidth() - 24;
          //   console.log(width);
          //   $('.c-card--profile .c-card__footer').width(width);
          // }
          
        }
        function cardFooterBottom(){
          if($(window).scrollTop() + $(window).height() > $(document).height() - 42) {
            $('.c-card--profile .c-card__footer').addClass('footer-appeared');
          }else{
            $('.c-card--profile .c-card__footer').removeClass('footer-appeared');
          }
        }


        cardFooterBottom();
        $(window).resize(function (){
          cardFooterBottom();
        });
        $(window).scroll(function() {
          cardFooterBottom();
        });
        $('[data-toggle="collapse"]').click(function(e){
          window.setTimeout(function(){
            cardFooterBottom();
          }, 210);
        });
        
      });

    };

    return{
      init: init
    };
  })();

  return profile;
});

	
	