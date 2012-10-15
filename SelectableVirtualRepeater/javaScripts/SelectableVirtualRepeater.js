enyo.kind({
	name: "Spinn.SelectableVirtualRepeater",
	kind: enyo.VirtualRepeater,
	className: "spinn-svr-list",
	selectedIndex: -1,			// index number of selected item (if any)
	selectedID: null,			// id of selected item (if any)
	rendered: function() {
		this.inherited(arguments);
		
		if(this.reselectOnRender) {
			this.reselectOnRender = false;
			this.setSelectedItem(this.getSelectedIndex(), this.getSelectedID());
		}
	},
	setItemToSelectOnRender: function(inIndex, inID) {
		//clear the selected item first
		this.clearSelection();
		
		this.selectedIndex = inIndex;
		this.selectedID = inID;
		//Set this so the item will be selected on render
		this.reselectOnRender = true;
	},
	setSelectedItem: function(inIndex, inID) {
		var node = this.fetchRowNode(inIndex);
		
		//Only change the selection if the index is valid
		if(node) {
			//clear the selected item first
			this.clearSelection();
			
			this.selectedIndex = inIndex;
			this.selectedID = inID;
			node.className  = "spinn-selected-item";
		}
	},
	clearSelection: function() {
		var node = this.fetchRowNode(this.getSelectedIndex());
		//need to check this because it is possible that the user deleted items
		//and the selected index is now out of bounds so nothing is fetched
		if(node) {
			node.className = "";
		}
		this.selectedIndex = -1;
		this.selectedID = null;
	},
	getSelectedIndex: function(){
		return this.selectedIndex;
	},
	getSelectedID: function(){
		return this.selectedID;
	}
});