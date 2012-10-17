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
		{kind: "Spinn.AffirmDeny", affirmCaption: "Yes", onAffirm: "yesHandler", denyCaption: "No", onDeny: "noHandler" }		
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
	},
	close: function() {
		this.inherited(arguments);
		//Need this to stop the dialog from being hidden but still interactive.  This seems to be an enyo bug.
		this.hide();
	}
});
