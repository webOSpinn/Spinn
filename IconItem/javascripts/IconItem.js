enyo.kind({
	name: "Spinn.IconItem",
	kind: enyo.SwipeableItem,
	align: "center",
	swipeable: false,
	tapHighlight: true,
	layoutKind: "HFlexLayout", 
	published: {
      caption: "",
      imageSrc: "Spinn/IconItem/images/blank.png"
	},
	components: [
		{kind: "HFlexBox", components: [
			{name: "img", kind: "Image", src: "", style: "padding-left: 7px;"},
			{name: "caption", content: "", className: "spinn-icon-item-caption", style: "padding-left: 7px; padding-top: 7px;"}
		]}
	],
	create: function() {
		this.inherited(arguments);
		this.captionChanged();
		this.imageSrcChanged();
	},
	captionChanged: function() {
		this.$.caption.setContent(this.caption);
	},
	imageSrcChanged: function() {
		if(enyo.exists(this.imageSrc)) {
			if(this.imageSrc == "") {
				this.clearIcon();
			} else {
				this.$.img.setSrc(this.imageSrc);
			}
		} else {
			this.clearIcon();
		}
	},
	clearIcon: function() {
		this.setImageSrc("Spinn/IconItem/images/blank.png");
	}
});