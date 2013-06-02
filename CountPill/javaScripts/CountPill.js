enyo.kind({
	name: "Spinn.CountPill",
	kind: enyo.Control,
	published: {
      count: 0
	},
	components: [
		{kind: "Spinn.Utils", name: "Utils"},
		{kind: "Spinn.Animator", name:"theAnimator", cssClass: "spinn-count-pill-animation", lastFrame: 10, timerInterval: 50},
		{name: "spinner", nodeTag: "div", className: "spinn-count-pill-animation", showing: false},
		{name: "count", className: "spinn-count-pill-count", flex: 0}
	],
	create: function() {
		this.inherited(arguments);
		this.countChanged();
	},
	rendered: function() {
		this.inherited(arguments);
		this.$.theAnimator.setAnimationTarget(this.$.spinner);
	},
	countChanged: function() {
		//Make sure that what is passed in is a number if it is not default to 0.
		if(this.$.Utils.isInt(this.count) == false) {
			this.count = 0;
		}
		this.$.count.setContent(this.count);
		//Update the animator here to allow for the number to change while animating
		if (this.count === 0) {
			this._updateAnimator("count0", 10);
		} else if (this.count < 10) {
			this._updateAnimator("count1", 10);
		} else if (this.count < 100) {
			this._updateAnimator("count2", 12);
		} else if (this.count < 1000) {
			this._updateAnimator("count3", 15);
		} else {
			this._updateAnimator("count4", 16);
		}
	},
	startAnimation: function() {
		if (this.$.spinner.hasNode()) {
			this.$.spinner.setShowing(true);
			this.$.theAnimator.startAnimation();
			this.$.count.setClassName("spinn-count-pill-count animating");
		}
	},
	stopAnimation: function() {
        this.$.theAnimator.stopAnimation();
        this.$.spinner.setShowing(false);
		this.$.count.setClassName("spinn-count-pill-count");
    },
	isAnimating: function() {
		return this.$.theAnimator.isAnimating();
	},
	_updateAnimator: function(unreadCountLength, lastFrame) {
		this.$.theAnimator.setLastFrame(lastFrame);
		this.$.theAnimator.setCssClass("spinn-count-pill-animation " + unreadCountLength);
	}
});