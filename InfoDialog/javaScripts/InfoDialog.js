enyo.kind({
	name: "Spinn.InfoDialog",
	kind: enyo.ModalDialog,
	caption: "Info",
	events: {
		onOk: ""
	},
	published: {
		message: "This is an informative message."
	},
	components: [
		{name: "message"},
		{kind:"Spacer", height: "10px"},
		{kind: "Button", name: "ok", caption: "OK", flex: 1, onclick: "okHandler"}
	],
	rendered: function() {
		this.messageChanged();
	},
	messageChanged: function() {
		this.$.message.setContent(this.message);
	},
	okHandler: function() {
		this.doOk();
		this.close();
	}
});
