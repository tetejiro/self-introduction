/* スクロール時の背景色・ナビの下線を付ける */

window.addEventListener('scroll', function() {
  // section1
  if($(this).scrollTop() < 600) {
    // 背景色の変更
    $('section').css('background', '#c6ccdf');
    // 該当のナビの下線を付ける
    $('nav').css('background', '#c6ccdf');
    $('li').each(function(idx, val) {
      if(idx > 0) {
        val.style.border = 'none';
      }
    });
    $('li.list-section1').css('border-bottom', '2px solid white');

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

/* 自動スクロール機能・ナビの下線を付ける */

window.addEventListener('DOMContentLoaded', function() {
  let moveTop;
  $('.list-section1').on('click', function() {
    // 該当のポイントまで遷移させる
    moveTop = ($('.section1').offset().top);
    scrollTo(0, moveTop);
    // 該当のナビの下線を付ける
    $('li').css('border-bottom', 'white solid 2px');
    $('li').each(function(idx, val) {
      if(idx > 0) {
        val.style.border = 'none';
      }
    });
  });

  $('.list-section2').on('click', function() {
    moveTop = ($('.section2').offset().top);
    scrollTo(0, moveTop);
    $('li').css('border-bottom', 'white solid 2px');
    $('li').each(function(idx, val) {
      if(idx > 1) {
        val.style.border = 'none';
      }
    });
  });

  $('.list-section3').on('click', function() {
    moveTop = ($('.section3').offset().top);
    scrollTo(0, moveTop);
    $('li').css('border-bottom', 'white solid 2px');
    $('li').each(function(idx, val) {
      if(idx > 2) {
        val.style.border = 'none';
      }
    });
  });

  $('.list-section4').on('click', function() {
    moveTop = ($('.section4').offset().top);
    scrollTo(0, moveTop);
    $('li').css('border-bottom', 'white solid 2px');
    $('li').each(function(idx, val) {
      if(idx > 3) {
        val.style.border = 'none';
      }
    });
  });

  $('.list-section5').on('click', function() {
    moveTop = ($('.section5').offset().top);
    scrollTo(0, moveTop);
    $('li').css('border-bottom', 'white solid 2px');
    $('li').each(function(idx, val) {
      if(idx > 4) {
        val.style.border = 'none';
      }
    });
  });
});


// works のアニメーションクラス付与
window.addEventListener('scroll', function() {
  if($(this).scrollTop() < 1500) {
    $('.section4 > p').removeClass("turning");
    console.log('111111');
  }
  if(1500 < $(this).scrollTop() && $(this).scrollTop() < 2200) {
    if(!$('.section4 > p').hasClass('turning')) {
      $('.section4 > p').addClass("turning");
    }
    console.log('22222');
  }
  if(2200 < $(this).scrollTop()) {
    $('.section4 > p').removeClass("turning");
    console.log('33333');
  }
});