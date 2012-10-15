if (!enyo.exists(enyo.isPhone)) {
	//https://developer.palm.com/distribution/viewtopic.php?f=21&t=18727&hilit=SlidingPane
	enyo.isPhone = function () {
		return (enyo.windows.getRootWindow().innerWidth < 600);
	}
}