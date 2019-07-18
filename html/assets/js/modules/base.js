define([], function(){
  'use strict';

  var base = (function(){
    var init = function(){

      console.log('module: init base');
      $(document).ready(function(){

        // bs
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover({
          // trigger: 'focus'
        });

        // select2
        $('.form-control--select2').select2({
          language: "vi"
        });



        // date picker
        $('input.js-datepicker').daterangepicker();

        $('.js-datepicker-report-courses').daterangepicker({
          autoUpdateInput: false,
          singleDatePicker: true,
          showDropdowns: true,
          locale: {
            format: 'DD/MM/YYYY'
          },
          opens: 'left'
        }, function(chosen_date) {
          $(this.element[0]).val(chosen_date.format('DD/MM/YYYY'));
        });

        // sidebar auto hide / show for screen resolution
        function sidebarPosition(){
          var $vw = $(window).outerWidth();
          var $body = $('.l-body');
          if($vw >= 992){
            if(!$body.hasClass('l-body--sidebar-in')){
              $body.addClass('l-body--sidebar-in');
            }
          }else{
            if($body.hasClass('l-body--sidebar-in')){
              $body.removeClass('l-body--sidebar-in');
            }
          }
        }
        sidebarPosition();
        $(window).resize(function (){
          sidebarPosition();
        });
        

        // click to toggle sidebar
        $('.sidebar-offcanvas-toggler').click(function(e){
          e.preventDefault();
          
          if($('.l-body').hasClass('l-body--sidebar-in')){
            $('.l-body').removeClass('l-body--sidebar-in');
          }else{
            $('.l-body').addClass('l-body--sidebar-in');
          }
        });


        // get scrollbar width
        var $scollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        $('.modal').on('show.bs.modal', function(){
          $('.l-header--fixtop').css('right', $scollbarWidth + 'px');
          $('.c-card--profile .c-card__footer--fix-bottom').css('left', 'calc(50% - ' + $scollbarWidth / 2 + 'px)');
        });
        $('.modal').on('hidden.bs.modal', function(){
          $('.l-header--fixtop').css('right', '0');
          $('.c-card--profile .c-card__footer--fix-bottom').css('left', '50%')
        });


      });


    };

    return{
      init: init
    };
  })();

  return base;
});

	