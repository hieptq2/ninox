define([], function(){
  'use strict';

  var login = (function(){
    var init = function(){

      $.fn.textWidth = function(text, font) {
        if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
        $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
        return $.fn.textWidth.fakeEl.width();
      };

      $(document).ready(function(){
        $('.js-login-id-input').on('focus', function () {
          $('.owl .eye .eye__wrap').css('transform', 'translate(0, 4px)');
          $('.js-login-id-input').on('input', function() {
            console.log($(this).textWidth());
            console.log($(this).outerWidth());
            var $left = -8;
            var $left = -8 + $(this).textWidth() / $(this).outerWidth() * 20;
            if($left > 8){
              $left = 8;
            }
            $('.owl .eye .eye__wrap').css('transform', 'translate(' + $left + 'px, 4px)');
          }).trigger('input');
        }).on('focusout', function () {
          $('.owl .eye').removeClass('input-id-focus');
          $('.owl .eye .eye__wrap').css('transform', 'translate(0, 0)');
        });

        $('.js-login-password-input').on('focus', function () {
          $('.owl *').addClass('password');
        }).on('focusout', function () {
          $('.owl *').removeClass('password');
        });

        $('.js-login-password-input').keyup(function(){
          if($(this).val() !== ""){
            $('.js-login-password-input--show').removeClass('d-none')
          }else{
            $('.js-login-password-input--show').addClass('d-none');
          }
        });


        $('.js-login-password-input--show').mousedown(function(e) {
          e.preventDefault();
          $(this).addClass('active');
          $('.owl .arms .arm.password').addClass('password-sneak');
          $('.js-login-password-input').get(0).type = 'text';
        });
        $('.js-login-password-input--show').mouseup(function(e) {
          e.preventDefault();
          $(this).removeClass('active');
          $('.owl .arms .arm.password').removeClass('password-sneak');
          $('.js-login-password-input').get(0).type = 'password';
        });
        $('.js-login-password-input--show').mouseout(function(e) {
          e.preventDefault();
          $(this).removeClass('active');
          $('.owl .arms .arm.password').removeClass('password-sneak');
          $('.js-login-password-input').get(0).type = 'password';
        });
      });

    };

    return{
      init: init
    };
  })();

  return login;
});

	
	