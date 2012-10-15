enyo.kind({
	name: "Spinn.AffirmDeny",
	kind: enyo.HFlexBox,
	published: {
		affirmCaption: "Ok",
		denyCaption: "Cancel"
	},
	events: {
		onDeny: "",
		onAffirm: ""
	},
	components: [
		{kind: "Button", name: "deny", flex: 1, className: "enyo-button-negative", onclick: "doDeny"},
		{kind: "Button", name: "affirm", flex: 1, className: "enyo-button-affirmative", onclick: "doAffirm"}
	],
	create: function() {
		this.inherited(arguments);
		this.affirmCaptionChanged();
		this.denyCaptionChanged();
	},
	affirmCaptionChanged: function() {
		this.$.affirm.setCaption(this.affirmCaption);
	},
	denyCaptionChanged: function() {
		this.$.deny.setCaption(this.denyCaption);
	},
});