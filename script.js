$(function() {


/* cursor hover event */
  $('.hand-on').hover(
    function(){
      $(this).find('.hand').animate({
        'font-size':'30px'
      },150);
    },
    function(){
      $(this).find('.hand').animate({
        'font-size':'0'
      },150);
    }
  );
/* cursor hover event */

/* ckick event exemple */
  $('button').click(function(){
    var $text = $(this).val();
    $('#exemple').val($text);

  });
/* ckick event exemple */





});
