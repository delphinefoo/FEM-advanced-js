var Widget = {
  render: function($where) {
    if (this.$elem) {
      this.$elem.css({
        width: this.width + "px",
        height: this.height + "px"
      }).appendTo($where);
    }
  },

  init: function(width, height) {
    this.width = width || 50;
    this.height = height || 50;
    this.$elem = null;
  }
};

var Button = Object.create(Widget);

Button.setup = function(width, height, label) {
  this.init(width, height);
  this.label = label || "Default";
  this.$elem = $("<button>").text(this.label);
};

Button.build = function($where) {
  this.render($where);
  this.$elem.click(this.onClick.bind(this));
};

Button.onClick = function(evt) {
  console.log("Button " + this.label + " clicked!");
};

$(document).ready(function(){
  var $body = $(document.body);

  var btn1 = Object.create(Button);
  btn1.setup(25, 25, "First");

  var btn2 = Object.create(Button);
  btn2.setup(75, 50, "Second");

  btn1.build($body);
  btn2.build($body);
});