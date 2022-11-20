window.addEventListener('DOMContentLoaded', function() {
  console.log('load');
  this.$(this).scrollTop(0);
})

window.addEventListener('scroll', function() {
  // section1
  if($(this).scrollTop() < 500) {
    $('section').css('background', '#709ed0');
    // nav
    $('nav').css('background', 'rgba(181,203,197,0.6)');//#709ed0
    $('li').each(function(idx, val) {
      if(idx > 0) {
        val.style.border = 'none';
      }
    });
    $('li.list-home').css('border-bottom', 'white solid 1px');
  // section2
  } else if(500 < $(this).scrollTop() && $(this).scrollTop() < 1250) {
    $('section').css('background', '#acbedd');
    // nav
    $('nav').css('background', '#acbedd');
    $('li').each(function(idx, val) {
      if(idx > 1) {
        val.style.border = 'none';
      }
    });
    $('li.list-section2').css('border-bottom', 'white solid 1px');
  }
  // section3
  if(1250 < $(this).scrollTop() && $(this).scrollTop() < 1800) {
    $('section').css('background', '#f5d8c8');
    // nav
    $('nav').css('background', '#f5d8c8');
    $('li').each(function(idx, val) {
      if(idx > 2) {
        val.style.border = 'none';
      }
    });
    $('li.list-section3').css('border-bottom', 'white solid 1px');
  // section4
  } else if(1800 < $(this).scrollTop() && $(this).scrollTop() < 2400) {
    $('section').css('background', '#dfe2e3');
    // nav
    $('nav').css('background', '#dfe2e3');
    $('li').each(function(idx, val) {
      if(idx > 3) {
        val.style.border = 'none';
      }
    });
    $('li.list-section4').css('border-bottom', 'white solid 1px');
  // section5
  } else if(2400 < $(this).scrollTop()) {
    $('section').css('background', '#c6ccdf');
    // nav
    $('nav').css('background', '#c6ccdf');
    $('li').each(function(idx, val) {
      $(val).css('border-bottom', '1px solid white');
    });
  }
});