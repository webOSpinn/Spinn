enyo.kind({
	name: "Spinn.InputDialog",
	kind: enyo.ModalDialog,
	caption: "Enter Input",
	events: {
		onSubmit: "",
		onCancel: ""
	},
	published: {
		affirmCaption: "Submit",
		denyCaption: "Cancel",
		directions: "This hint will help the user enter data.",
		inputHint: "Enter data here."
	},
	components: [
		{kind:"RowGroup", components: [
			{kind: "Input", hint: "", name:"userInput", 
				selectAllOnFocus: true
			}
		]},
		{name: "directions", content: "", className: "spinn-input-directions"},
		{kind: "Spacer", height: "10px"},
		{kind: "Spinn.AffirmDeny", name:"actionButtons", affirmCaption: "Submit", onAffirm: "submitHandler", denyCaption: "Cancel", onDeny: "resetHandler" }	
	],
	rendered: function() {
		this.affirmCaptionChanged();
		this.denyCaptionChanged();
		this.directionsChanged();
		this.inputHintChanged();
	},
	affirmCaptionChanged: function() {
		this.$.actionButtons.setAffirmCaption(this.affirmCaption);
	},
	denyCaptionChanged: function() {
		this.$.actionButtons.setDenyCaption(this.denyCaption);
	},
	directionsChanged: function() {
		this.$.directions.setContent(this.directions);
	},
	inputHintChanged: function() {
		this.$.userInput.setHint(this.inputHint);
	},
	setDefaultInput: function(fileName) {
		this.$.userInput.setValue(fileName);
	},
	submitHandler: function() {
		if(this.$.userInput.getValue() != "") {
			this.doSubmit({ userInput: this.$.userInput.getValue() });
			this.$.userInput.setValue("");
			this.close();
		} else {
			this.$.userInput.forceFocus();
		}
	},
	resetHandler: function() {
		this.doCancel();
		this.close();
	},
	close: function() {
		this.inherited(arguments);
		//Need this to stop the dialog from being hidden but still interactive.  This seems to be an enyo bug.
		this.hide();
	}
});
