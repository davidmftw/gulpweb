$(document).ready(function() {


  $('.buttontoggle').click(function() {

    $('.buttontoggle').toggleClass('toggle');
    $('.icons-mobile').toggleClass('menu-open')
  });


  $('.figurecont figure').click(function() {
    $('.seccion2').css('left','-100%');
    $('.seccion2pt2').css('display','block');
  });

  $('.portfolio').click(function() {
    $('.seccion2').css('left','0%');
    $('.seccion2pt2').hide(400);
  });


  $.ajaxSetup({ cache: true });
  $('figure').click(function() {
    var $this = $(this),
        newFolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'assets/work/'+ newFolder +'.html',
        newTitle = $this.find('.fctitle').text(),
        newType = $this.find('.fctype').text();
    $('.project-content').html(spinner).load(newHTML);
    $('.proj-title').text(newTitle);
    $('.proj-type').text(newType);
  });

  $('.form-contact .input-wrap input').focusout(function(){

    var text_val = $(this).val();

    if(text_val === "") {

      $(this).removeClass('has-value');


    } else {
      $(this).addClass('has-value');
      }

  });


});
