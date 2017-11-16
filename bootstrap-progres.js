// V 1.0

var loadBar = {
  init: function () {
    document.body.innerHTML +=
      "<div style='position: fixed; top: 0; width: 100%; z-index: 9999'>" +
        "<div class='progress' id='loadBarBox' style='display: none; height: " + this.barHeight + "px;'>" +
          "<div class='progress-bar "+ this.color +"' id='loadBar' role='progressbar' style='width: 0' aria-valuemin='0' aria-valuemax='100'></div>" +
        "</div>" +
      "</div>";
  },
  show: function () {
    $("#loadBarBox").show();
  },
  hide: function () {
    setTimeout(function () {
      $("#loadBarBox").hide();
    }, this.animationDuration);
  },
  setValue: function (val) {
    $("#loadBar")
      .animate({
        "width": val +"%"
      }, {
        duration: this.animationDuration,
        easing: 'linear'
      });
  },
  animationDuration: 100,
  color: "bg-success",
  barHeight: 5
};

loadBar.init();