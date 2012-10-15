enyo.kind({
	name: "Spinn.ActivityToolButton",
	kind: "enyo.Control",
	nodeTag:"div", 
	className: "spinn-activity-tool-button",
	events: {
		onclick: ""
	},
	components: [
		{kind:"Spinn.Animator", name:"theAnimator", cssClass: "spinn-activityToolButton-animation", lastFrame: 12, timerInterval: 50},
		{kind: enyo.VFlexBox, pack: "center", 
			components: [
				{
					name: "btnUpdate",
					kind: "ToolButton",
					icon: "spinn-refresh-btn",
					iconIsClassName: true,
					onclick: "btnClick"
				},
				{name: "activity", nodeTag: "div", className: "spinn-activityToolButton-animation", showing: false}
			]
		}
	],
	constructor: function () {
		this.inherited(arguments);
	},
	rendered: function() {
		this.inherited(arguments);
		this.$.theAnimator.setAnimationTarget(this.$.activity);
	},
	create: function() {
		this.inherited(arguments);
	},
	btnClick: function(inSender) {
		this.doClick();
		this.startAnimation();
	},
	startAnimation: function() {
		if (this.$.activity.hasNode()) {
			this.$.activity.setShowing(true);
			this.$.btnUpdate.setShowing(false);
			this.$.theAnimator.startAnimation();
		}
	},
	stopAnimation: function() {
        this.$.theAnimator.stopAnimation();
        this.$.activity.setShowing(false);
		this.$.btnUpdate.setShowing(true);
    },
	isAnimating: function() {
		return this.$.theAnimator.isAnimating();
	}
});