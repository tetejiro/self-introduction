window.addEventListener('DOMContentLoaded', function() {
  console.log('load');
  this.$(this).scrollTop(0);
})

window.addEventListener('scroll', function() {
  // section1
  if($(this).scrollTop() < 600) {
    $('section').css('background', '#c6ccdf');
    $('nav').css('background', '#c6ccdf');
    $('li').each(function(idx, val) {
      if(idx > 0) {
        val.style.border = 'none';
      }
    });
    $('li.list-home').css('border-bottom', '2px solid white');
  // section2
  } else if(600 < $(this).scrollTop() && $(this).scrollTop() < 1250) {
    $('section').css('background', '#dfe2e3');
    $('nav').css('background', '#dfe2e3');
    $('li').each(function(idx, val) {
      if(idx > 1) {
        val.style.border = 'none';
      }
    });
    $('li.list-section2').css('border-bottom', 'white solid 2px');
  }

  // section3
  else if(1250 < $(this).scrollTop() && $(this).scrollTop() < 1900) {
    $('section').css('background', '#f5d8c8');
    $('nav').css('background', '#f5d8c8');
    $('li').each(function(idx, val) {
      if(idx > 2) {
        val.style.border = 'none';
      }
    });
    $('li.list-section3').css('border-bottom', 'white solid 2px');

  // section4
  } else if(1900 < $(this).scrollTop() && $(this).scrollTop() < 2550) {
    $('section').css('background', '#acbedd');
    $('nav').css('background', '#acbedd');
    $('li').each(function(idx, val) {
      if(idx > 3) {
        val.style.border = 'none';
      }
    });
    $('li.list-section4').css('border-bottom', 'white solid 2px');

  // section5
  } else if(2550 < $(this).scrollTop()) {
    $('section').css('background', '#709ed0');
    $('nav').css('background', 'rgba(181,203,197,0.6)');
    $('li').each(function(idx, val) {
      if(idx > 4) {
        val.style.border = 'none';
      }
    });
    $('li.list-section5').css('border-bottom', 'white solid 2px');
  }
});