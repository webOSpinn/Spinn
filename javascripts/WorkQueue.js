enyo.kind({
	name: "Spinn.WorkQueue",
	kind: enyo.Component,
	constructor: function () {
		this.inherited(arguments);
		this._workQueue = [];
		this._running = false;
	},
	create: function () {
		this.inherited(arguments);
	},
	getLength: function() {
		return this._workQueue.length;
	},
	isRunning: function() {
		return this._running;
	},
	createWorkItem: function(workItem) {
		if(!this._running && this._workQueue.length == 0) {
			//Nothing in Queue and nothing currently running - just execute
			this._running = true;
			workItem();
		} else {
			//Add work item to end
			this._workQueue.push(workItem);
		}
	},
	lookForMoreWork: function () {
		this._running = false;
		//Process next item in the queue
		if(this._workQueue.length > 0) {
			this._processWorkQueue();
		}
	},
	_processWorkQueue: function() {
		//If we have any work to do
		if(this._workQueue.length > 0) {
			this._running = true;
			//Grab the next item from the list
			var workItem = this._workQueue.splice(0,1)[0];
			workItem();
		}
	}
});
