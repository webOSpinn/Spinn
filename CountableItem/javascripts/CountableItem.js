enyo.kind({
	name: "Spinn.CountableItem",
	kind: enyo.SwipeableItem,
	layoutKind: "VFlexLayout", 
	swipeable: false,
	tapHighlight: true,
	published: {
      caption: "",
      count: 0
	},
	components: [
		{name: "caption", className: "spinn-countable-item-caption"},
		{kind: "Spinn.CountPill", name: "count", className: "spinn-countable-item-count"}
	],
	create: function() {
		this.inherited(arguments);
		this.captionChanged();
		this.countChanged();
	},
	captionChanged: function() {
		this.$.caption.setContent(this.caption);
	},
	countChanged: function() {
		this.$.count.setCount(this.count);
	},
	startAnimation: function() {
		this.$.count.startAnimation();
	},
	stopAnimation: function() {
        this.$.count.stopAnimation();
    },
	isAnimating: function() {
		return this.$.count.isAnimating();
	},
});