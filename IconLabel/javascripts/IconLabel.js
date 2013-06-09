enyo.kind({
	name: "Spinn.IconLabel",
	kind: enyo.Control,
	className: "spinn-icon-label",
	published: {
		caption: "",
		iconSrc: "",
		showIcon: true
	},
	components:[
		{kind: "HFlexBox", components: [
			{name: "icon", kind: "Image", className:"spinn-icon-label-icon", src: ""},
			{name: "heightHolder", kind: "Image", src: "Spinn/IconLabel/images/heightHolder.png"},
			{name: "caption", content: "", className: "spinn-icon-label-caption"}
		]}
	],
	create: function() {
		this.inherited(arguments);
		
		this.captionChanged();
		this.iconSrcChanged();
		this.showIconChanged();
	},
	captionChanged: function() {
		this.$.caption.setContent(this.caption);
	},
	iconSrcChanged: function() {
		var emptyImage = "Spinn/IconLabel/images/blank.png";
		if(Spinn.Utils.exists(this.iconSrc)) {
			if(this.iconSrc == "") {
				this.$.icon.setSrc(emptyImage);
			} else {
				this.$.icon.setSrc(this.iconSrc);
			}
		} else {
			this.$.icon.setSrc(emptyImage);
		}
	},
	showIconChanged: function() {
		//HeightHolder is used to keep the text of an IconLabel without the icon showing 
		//lined up with an IconLabel with the icon showing
		if(Spinn.Utils.exists(this.showIcon)) {
			(this.showIcon == true) ? this.$.icon.show() : this.$.icon.hide();
			(this.showIcon == true) ? this.$.heightHolder.hide() : this.$.heightHolder.show();
		} else {
			this.showIcon = false;
			this.$.icon.hide();
			this.$.heightHolder.show();
		}
	},
	clearIcon: function() {
		this.setIconSrc("");
	}
})