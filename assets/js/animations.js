

  $(window).scroll(function(){
  var wScroll = $(this). scrollTop();
  var opacity = (wScroll - $('.contenedor-servicios').offset().top + 5500) / (wScroll / 24);


  $('.circle-mid'). css({
    'transform' : 'translate('+ wScroll /8 + '%, '+ wScroll /8 +'%)'
  });

  $('.circle-small'). css({
    'transform' : 'translate(-'+ wScroll /16 +'%, '+ wScroll /16 +'%)'
  });

  $('.bubbles'). css({
    'transform' : 'translate(-'+ wScroll /236 +'%, -'+ wScroll /40 +'%)',
    'opacity' : opacity


  });


    if(wScroll > $('.botoncont').offset().top - ($(window).height() / 3.5)) {

      $('.figurecont figure').each(function(i){

        setTimeout(function(){
          $('.figurecont figure').eq(i).addClass('is-showing2');
        }, (900 * (Math.exp(i * 0.14))) - 900);
      });

    }




    if(wScroll > $('.seccion1').offset().top - ($(window).height() / 2)) {

      $('.contenedor-servicios .servicios').each(function(i){

        setTimeout(function(){
          $('.contenedor-servicios .servicios').eq(i).addClass('is-showing1');
        }, (1400 * (Math.exp(i * 0.10 + 0.0))) - 600);
      });

    }

  });
