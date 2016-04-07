function Widget(width,height) {
	this.width = width || 50;
	this.height = height || 50;
	this.$elem = null;
}

Widget.prototype.render = function($where){
	if (this.$elem) {
		this.$elem.css({
			width: this.width + "px",
			height: this.height + "px"
		}).appendTo($where);
	}
};

function Button(width, height, label) {
	Widget.call(width, height, label);
	this.label = label;
	this.$elem = $("<button>").text(this.label);
	this.width = width;
	this.height = height;
}

Button.prototype = Object.create(Widget.prototype);

Button.prototype.render = function($where) {
	// call the parent render()
	Widget.prototype.render.call(this, $where);
	// add a click handler -> onClick
	this.$elem.click(this.onClick.bind(this));
}

Button.prototype.onClick = function(evt) {
	console.log("Button " + this.label + " clicked!");
}

$(document).ready(function(){
	var $body = $(document.body);
	var btn1 = new Button(25, 25, "First");
	var btn2 = new Button(75, 50, "Second");

	btn1.render($body);
	btn2.render($body);
});
