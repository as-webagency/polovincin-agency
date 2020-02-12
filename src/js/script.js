$(document).ready(function(){
    toolTiper();
  });
  
  function toolTiper(effect) {
    $('.tooltiper').each(function(){
      var eLcontent = $(this).attr('data-tooltip'),
          eLtop = $(this).position().top,
          eLleft = $(this).position().left;
      $(this).append('<span class="tooltip">'+eLcontent+'</span>');
      var eLtw = $(this).find('.tooltip').width(),
          eLth = $(this).find('.tooltip').height();
      $(this).find('.tooltip').css({
        "top": (0 - eLth - 40)+'px',
        "left":'-10px'
      });
    });
  }