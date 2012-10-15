enyo.kind({
	name: "Spinn.ConfirmationDialog",
	kind: enyo.ModalDialog,
	caption: "Are you sure?",
	events: {
		onYes: "",
		onNo: ""
	},
	published: {
		message: "Are you sure?"
	},
	components: [
		{name: "message"},
		{kind:"Spacer", height: "10px"},
		{kind: "AffirmDeny", affirmCaption: "Yes", onAffirm: "yesHandler", denyCaption: "No", onDeny: "noHandler" }		
	],
	rendered: function() {
		this.messageChanged();
	},
	messageChanged: function() {
		this.$.message.setContent(this.message);
	},
	yesHandler: function() {
		this.doYes();
		this.close();
	},
	noHandler: function() {
		this.doNo();
		this.close();
	}
});
