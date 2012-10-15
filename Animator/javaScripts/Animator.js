enyo.kind({
	name: "Spinn.Animator",
	kind: enyo.Component,
	published: {
		animationTarget: null,
		cssClass: "spinn-activity-animation",
		lastFrame: 12,
		timerInterval: 50
	},
	startAnimation: function() {
		if (enyo.exists(this.animationTarget)) {
			if (this.animationTarget.hasNode()) {
				if (!enyo.exists(this.animationTimer)) {
					this.currentFrame = 1;
					var spinSync = this.animation.bind(this);
					this.animationTimer = setInterval(spinSync, this.timerInterval);
					this.animationTarget.setClassName(this.cssClass + " frame" +this.currentFrame);
				}
			}
		}
	},
	stopAnimation: function() {
        if (this.animationTimer) {
            clearInterval(this.animationTimer);
            this.animationTimer = null;
        }
		
		this.animationTarget.setClassName(this.cssClass);
    },
    animation: function() {
        this.currentFrame++;

        if (this.currentFrame > this.lastFrame) {
			this.currentFrame = 1;
        }

        if (this.animationTimer) {
            this.animationTarget.setClassName(this.cssClass + " frame" + this.currentFrame);
        }
    },
	isAnimating: function() {
		if (this.animationTimer) { return true; }
		else { return false; }
	}
});