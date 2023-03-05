let bg_color;
let idx;

$(window).on('DOMContentLoaded', function(){

  /* 初期表示時点での色の適用 */
  changeColor();

  /* ナビ押下時：自動スクロール機能・ナビの下線を付ける */
  $(function(){

    // 位置取得
    let list_y = [];
    list_y.push(100); // section1微調整のため
    for(let i=1; i<$('.list-section').length-1; i++) {
      list_y.push($('section').eq(i).offset().top - 45);
    }
    list_y.push($('section').eq(4).offset().top); // section5微調整のため

    // クリック時動作
    $('.list-section').on('click', function() {
      // スクロール
      let list_index = $('.list-section').index($(this));
      scrollTo(0, list_y[list_index]);

      // 下線
      $('li').css('border-bottom', 'none'); // 外す
      for(let i=0; i<=list_index; i++) {
        console.log('list_index=>' + list_index);
        console.log($('li')[i]);
        $('li')[i].style.borderBottom = 'white solid 2px'; // 付ける
      }
    });
  });

});

$(document).on('scroll', function() {

  /* スクロール時点での色の適用 */
  changeColor();

  /* works のアニメーションクラス付与 */
  if($(this).scrollTop() < 1500) {
    $('.works-title').removeClass("turning");
  }
  if(1500 < $(this).scrollTop() && $(this).scrollTop() < 2200) {
    if(!$('.works-title').hasClass('turning')) {
      $('.works-title').addClass("turning");
    }
  }
  if(2200 < $(this).scrollTop()) {
    $('.works-title').removeClass("turning");
  }

});


/* 色・下線の適用処理 */
function changeColor () {
  /* 位置による適切な色の取得 */
  $.each($('section'), () => {

    // section1
    if(0 < $(this).scrollTop() && $(this).scrollTop() < 600) {
      bg_color = '#c6ccdf';
      idx = 0;
    }

    // section2
    else if(600 < $(this).scrollTop() && $(this).scrollTop() < 1250) {
      bg_color = '#dfe2e3';
      idx = 1;
    }

    // section3
    else if(1250 < $(this).scrollTop() && $(this).scrollTop() < 1900) {
      bg_color = '#f5d8c8';
      idx = 2;
    }

    // section4
    else if(1900 < $(this).scrollTop() && $(this).scrollTop() < 2550) {
      bg_color =  '#acbedd';
      idx = 3;
    }

    // section5
    else if(2550 < $(this).scrollTop()) {
      bg_color =  '#709ed0';
      idx = 4;
    }

    // 取得した色を適用
    $('section').css('background', bg_color); // 背景色
    $('nav').css('background', bg_color); // ナビ背景色

    // 下線
    $('li').css('border-bottom', 'none'); // 外す
    for(let i=0; i<=idx; i++) {
      $('li')[i].style.borderBottom = 'white solid 2px'; // 付ける
    }
  });
}