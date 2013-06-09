enyo.kind({
	name: "Spinn.CountableIconItem",
	kind: enyo.SwipeableItem,
	layoutKind: "VFlexLayout", 
	swipeable: false,
	tapHighlight: true,
	published: {
		caption: "",
		count: 0,
		iconSrc: "",
		showCount: true,
		showIcon: true
	},
	components: [
		{className: "spinn-countable-icon-item", components: [
			{kind: "Spinn.IconLabel", name: "iconLabel", className: "spinn-countable-icon-item-icon-label"},
			{kind: "Spinn.CountPill", name: "count", className: "spinn-countable-icon-item-count"}
		]}
	],
	create: function() {
		this.inherited(arguments);
		
		this.captionChanged();
		this.countChanged();
		this.iconSrcChanged();
		this.showCountChanged();
		this.showIconChanged();
	},
	captionChanged: function() {
		this.$.iconLabel.setCaption(this.caption);
	},
	countChanged: function() {
		this.$.count.setCount(this.count);
	},
	iconSrcChanged: function() {
		this.$.iconLabel.setIconSrc(this.iconSrc);
	},
	showCountChanged: function() {
		if(Spinn.Utils.exists(this.showCount)) {
			(this.showCount == true) ? this.$.count.show() : this.$.count.hide();
		} else {
			this.showCount = false;
			this.$.count.hide();
		}
	},
	showIconChanged: function() {
		this.$.iconLabel.setShowIcon(this.showIcon);
	},
	clearIcon: function() {
		this.$.iconLabel.clearIcon();
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