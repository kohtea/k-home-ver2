  $(function () {
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function () {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href = $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });

      $(window).scroll(function () {
        $(".effect-fade").each(function () {
          var elemPos = $(this).offset().top; /* 要素の位置を取得 */
          var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
          var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
          if (scroll > elemPos - windowHeight) {
            /* 要素位置までスクロール出来たときに動作する */
            $(this).addClass("effect-scroll");
          }
        });
      });
      jQuery(window).scroll();



  //   $(".open_cht").click(function(){
  //     $(".modal_cht").fadeIn();
  //   });
  //   $(".modal_bg").click(function(){
  //     $(".modal_cht").fadeOut();
  //   });

  //   $(".open_pp").click(function(){
  //     $(".modal_pp").fadeIn();
  //   });
  //   $(".modal_bg").click(function(){
  //     $(".modal_pp").fadeOut();
  //   });

  });
