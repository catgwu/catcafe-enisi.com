$(function () {
  //ハンバーガーメニュー（SP）
  $btnMenu = $("#js-btn-menu");
  $nav = $(".nav");

  $btnMenu.on("click", function () {
    $btnMenu.toggleClass("active");
    $nav.toggleClass("show");
    $nav.animate({ width: "toggle" }, 200);
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest($nav).length &&
      !$(e.target).closest($btnMenu).length
    ) {
      if ($nav.hasClass("show")) {
        $nav.removeClass("show");
        $btnMenu.toggleClass("active");
        $nav.animate({ width: "toggle" }, 200);
      }
    }
  });
});
