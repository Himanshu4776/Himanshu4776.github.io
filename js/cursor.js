document.body.onmousemove = function (e) {
  document.documentElement.style.setProperty(
    "--x",
    e.clientX + window.scrollX + "px"
  );
  document.documentElement.style.setProperty(
    "--y",
    e.clientY + window.scrollY + "px"
  );
};

$(document).ready(function () {
  $(document).on("mousemove", function (e) {
    $("#circularcursor").css({
      left: e.pageX,
      top: e.pageY,
    });
  });
});
