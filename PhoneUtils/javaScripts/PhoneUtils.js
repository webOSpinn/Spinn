enyo.kind({
	name: "PhoneUtils",
	//https://developer.palm.com/distribution/viewtopic.php?f=21&t=18727&hilit=SlidingPane
	isPhone = function () {
		return (enyo.windows.getRootWindow().innerWidth < 600);
	}
});