//NOTE: This class requires that your project include the onecrayon.Database kind.  This can be found here: http://onecrayon.github.io/database-webos/
enyo.kind({
	name: "Spinn.DataModel",
	kind: enyo.Component,
	components: [
		{
			name: "db",
			kind: "onecrayon.Database",
			database: "ext:" + (enyo.g11n.getPlatform() === "device" ? enyo.fetchAppId() : enyo.fetchAppInfo().id),
			version: "",
			debug: (Spinn.Utils.exists(enyo.fetchFrameworkConfig().debuggingEnabled) ? enyo.fetchFrameworkConfig().debuggingEnabled : false)
		},
		{ name:"workQueue", kind:"Spinn.WorkQueue"}
	],
	constructor: function () {
		this.inherited(arguments);
		this.bound = {
			_databaseError: enyo.bind(this, this._databaseError)
		}
	},
	_databaseError: function (er) {
		try {
			if (er.code === 1) {
				this.error("Database error (" + er.code + "): " + er.message);
				//this.populateDatabase();
			} else {
				this.error("Database error (" + er.code + "): " + er.message);
			}
		} finally {
			this.$.workQueue.lookForMoreWork();
		}
	}
});
