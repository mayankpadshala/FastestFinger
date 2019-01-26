(function($) {
  $(".icon-box").on("click", function(event) {
    console.log($(event.currentTarget).attr("data-name"));
  });
})(jQuery);
