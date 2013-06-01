enyo.kind({
	name: "Spinn.SelectableVirtualList",
	kind: enyo.VirtualList,
	className: "spinn-svl-list",
	selectedIndex: -1,			// index number of selected item (if any)
	selectedID: null,			// id of selected item (if any)
	setupRow: function(a,b) {		
		if(this.reselectItem) {
			this.reselectItem = false;
			this.setSelectedItem(this.getSelectedIndex(), this.getSelectedID());
		}
		
		return this.doSetupRow(b);
	},
	setItemToSelect: function(inIndex, inID) {
		//clear the selected item first
		this.clearSelection();
		
		this.selectedIndex = inIndex;
		this.selectedID = inID;
		//Set this so the item will be selected on render
		this.reselectItem = true;
	},
	setSelectedItem: function(inIndex, inID) {
		var node = this.$.list.fetchRowNode(inIndex);
		
		//Only change the selection if the index is valid
		if(node) {
			//clear the selected item first
			this.clearSelection();
			
			this.selectedIndex = inIndex;
			this.selectedID = inID;
			node.className  = "spinn-selected-svl-item";
		}
	},
	clearSelection: function() {
		var node = this.$.list.fetchRowNode(this.getSelectedIndex());
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