$(function () {


  /* cursor hover event */
  $('.hand-on').hover(
    function () {
      $(this).find('.hand').animate({
        'font-size': '30px'
      }, 150);
    },
    function () {
      $(this).find('.hand').animate({
        'font-size': '0'
      }, 150);
    }
  );
  /* cursor hover event */

  /* ckick event exemple */
  $('button').click(function () {
    var $text = $(this).val();
    $('#exemple').val($text);

  });
  /* ckick event exemple */

  /* Hand wrting space */
  let canvas, ctx;
  let mouseX, mouseY, mouseDown = 0;


  function drawDot(ctx, x, y, size) {
    r = 153; g = 123; b = 173; a = 255;


    ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + (a / 255) + ")";

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }



  document.getElementById('clear').addEventListener('click', ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  
  

  function sketchpad_mouseDown() {
    mouseDown = 1;
    drawDot(ctx, mouseX, mouseY, 10);
  }

  function sketchpad_mouseUp() {
    mouseDown = 0;
  }

  function sketchpad_mouseMove(e) {
    getMousePos(e);

    if (mouseDown == 1) {
      drawDot(ctx, mouseX, mouseY, 10);
    }
  }

  function getMousePos(e) {
    if (!e) {
      let e = Event;
    }

    if (e.offsetX) {
      mouseX = e.offsetX;
      mouseY = e.offsetY;

    } else if (e.layerX) {
      mouseX = e.layerX;
      mouseY = e.layerY;
    }

  }

  // remplace body onload="init()"
  $(document).ready(function init() {
    canvas = document.getElementById('sketchpad');

    if (canvas.getContext) {
      ctx = canvas.getContext('2d');
    }

    if (ctx) {
      canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
      canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
      window.addEventListener('mouseup', sketchpad_mouseUp, false);

    }
  })

});