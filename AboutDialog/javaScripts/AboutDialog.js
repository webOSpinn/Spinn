enyo.kind({
	name: "Spinn.AboutDialog",
	kind: enyo.ModalDialog,
	className: "enyo-popup enyo-modaldialog aboutDialog",
	layoutKind: "VFlexLayout",
	caption: "About",
	contentHeight:"98%", height:"90%", style: "max-height: 570px;",
	published: {
		title: null,
		version: null,
		vendor: null,
		website: null,
		email: null,
		emailSubject: null,
		emailMessage: null,
		description: null,
		copyright: null,
		license: null,
		facebookUrl: null,
		twitterUrl: null
	},
	components: [
		{kind: "Spinn.Utils", name: "Utils"},
		{name: "appOpener", kind: "PalmService", service: "palm://com.palm.applicationManager/", method: "open"},
		{kind: "Group", caption: "", contentFit: true, layoutKind: "VFlexLayout", style: "height: 125px;", components: [
			{kind: "Scroller", name:"fileListScroller", flex: 1, autoHorizontal: false, horizontal: false,
				components: [
					{name: "info", allowHtml: true, flex: 1, style: "font-size: 14px; padding: 12px"}
				]
			}
		]},
		{kind: "Group", caption: "Support", contentFit: true, layoutKind: "VFlexLayout", flex: 1, components: [
			{kind: "Scroller", name:"fileListScroller", flex: 1, autoHorizontal: false, horizontal: false,
				components: [
					{kind: "Spinn.CountableIconItem", name: "webSiteItem", caption:"Visit our Website", imageSrc: "Spinn/AboutDialog/images/web.png", showCount: false, onclick: "onVisitSite"},
					{kind: "Spinn.CountableIconItem", name: "emailItem", caption:"Send Support Email", imageSrc: "Spinn/AboutDialog/images/email.png", showCount: false, onclick: "onSendEmail"},
					{kind: "Spinn.CountableIconItem", name: "twitterItem", caption:"Follow Us on Twitter", imageSrc: "Spinn/AboutDialog/images/twitter.png", showCount: false, onclick: "onTwitter"},
					{kind: "Spinn.CountableIconItem", name: "facebookItem", caption:"Friend Us on Facebook", imageSrc: "Spinn/AboutDialog/images/facebook.png", showCount: false, onclick: "onFacebook"}
			]}
		]},
		{name: "copyright", content: "", allowHtml: true, style: "font-size: small; padding-left: 12px; padding-bottom: 10px"},
		{kind: "Button", name: "ok", caption: "OK", onclick: "okHandler"}
	],
	constructor: function () {
		this.inherited(arguments);
		this.appInfo = enyo.fetchAppInfo();
		this._populatedProperties = false;
	},
	rendered: function() {
		//Have to put this here because for some odd reason the $ hash doesn't have anything in it in the create function
		if(this._populatedProperties == false) {
			this._populatedProperties = true;
			
			if(this.$.Utils.exists(this.title) == false) { this.title = this.appInfo.title; }
			if(this.$.Utils.exists(this.version) == false) { this.version = this.appInfo.version; }
			if(this.$.Utils.exists(this.vendor) == false) { this.vendor = this.appInfo.vendor; }
			if(this.$.Utils.exists(this.website) == false) { this.website = this.appInfo.vendorurl; }
			if(this.$.Utils.exists(this.email) == false) { this.email = this.appInfo.aboutDialogInfo.email; }
			if(this.$.Utils.exists(this.emailSubject) == false) { this.emailSubject = this.appInfo.aboutDialogInfo.emailSubject; }
			if(this.$.Utils.exists(this.emailMessage) == false) { this.emailMessage = this.appInfo.aboutDialogInfo.emailMessage; }
			if(this.$.Utils.exists(this.description) == false) { this.description = this.appInfo.aboutDialogInfo.description; }
			if(this.$.Utils.exists(this.copyright) == false) { this.copyright = this.appInfo.aboutDialogInfo.copyright; }
			if(this.$.Utils.exists(this.license) == false) { this.license = this.appInfo.aboutDialogInfo.license; }
			if(this.$.Utils.exists(this.facebookUrl) == false) { this.facebookUrl = this.appInfo.aboutDialogInfo.facebookUrl; }
			if(this.$.Utils.exists(this.twitterUrl) == false) { this.twitterUrl = this.appInfo.aboutDialogInfo.twitterUrl; }
		}
		
		this.titleChanged();
		this.renderInfo();
		this.websiteChanged();
		this.emailChanged();
		this.copyrightChanged();
		this.facebookUrlChanged();
		this.twitterUrlChanged();
	},
	okHandler: function() { this.close(); },
	titleChanged: function() { this.setCaption("About " + this.title); },
	versionChanged: function() { this.renderInfo(); },
	vendorChanged: function() { this.renderInfo(); },
	websiteChanged: function() { this.setControlVisibility(this.website, this.$.webSiteItem); },
	emailChanged: function() { this.setControlVisibility(this.email, this.$.emailItem); },
	//dont' need changed functions for emailSubject or emailMessage because they don't appear on the UI
	descriptionChanged: function() { this.renderInfo(); },
	copyrightChanged: function() { this.$.copyright.setContent(this.copyright); },
	licenseChanged: function() { this.renderInfo(); },
	facebookUrlChanged: function() { this.setControlVisibility(this.facebookUrl, this.$.facebookItem); },
	twitterUrlChanged: function() { this.setControlVisibility(this.twitterUrl, this.$.twitterItem); },
	setControlVisibility: function(property, control) {
		if(this.$.Utils.exists(property) == false) {
			control.setShowing(false);
		}else{
			if(this.property == ""){
				control.setShowing(false);
			}else{
				control.setShowing(true);
			}
		}
	},
	renderInfo: function() {
		var content = "";
		if(this.$.Utils.exists(this.version)) {
			content = content +"<b>Version:</b> " + this.version + "<br/>";
		}
		if(this.$.Utils.exists(this.vendor)) {
			content = content +"<b>Created By:</b> " + this.vendor + "<br/>";
		}
		if(this.$.Utils.exists(this.description)) {
			content = content +"<br/>" + this.description + "<br/>";
		}
		if(this.$.Utils.exists(this.license)) {
			content = content +"<br/><b>License:</b><br/>" + this.license + "<br/>";
		}
		this.$.info.setContent(content);
	},
	onVisitSite: function()
	{
		var params = {id: "com.palm.app.browser", params: {target: this.website}};
		this.$.appOpener.call(params);
	},
	onSendEmail: function()
	{
		var emailSubject = "";
		var emailMessage = "";
		
		if (this.$.Utils.exists(this.emailSubject)) {
			emailSubject = this.emailSubject;
		}
		if (this.$.Utils.exists(this.emailMessage)) {
			emailMessage = this.emailMessage;
		}
		
		var params = { 
			id: "com.palm.app.email",
			params: {
				"summary": emailSubject,
				"text": emailMessage,
				"recipients": [ { "role": 1, "value": this.email } ]
			}
		};
			
		this.$.appOpener.call(params);
	},
	onTwitter: function()
	{
		var params = {id: "com.palm.app.browser", params: {target: this.twitterUrl}};
		this.$.appOpener.call(params);
	},
	onFacebook: function()
	{
		var params = {id: "com.palm.app.browser", params: {target: this.facebookUrl}};
		this.$.appOpener.call(params);
	},
	close: function() {
		this.inherited(arguments);
		//Need this to stop the dialog from being hidden but still interactive.  This seems to be an enyo bug.
		this.hide();
	}
});
