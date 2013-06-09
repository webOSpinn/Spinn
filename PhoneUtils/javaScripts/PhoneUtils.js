if(((typeof Spinn !== "undefined") && (Spinn !== NaN) && (Spinn !== null)) == false) {
	Spinn = [];
}
Spinn.PhoneUtils = [];

//https://developer.palm.com/distribution/viewtopic.php?f=21&t=18727&hilit=SlidingPane
Spinn.PhoneUtils.isPhone = function () {
	return (enyo.windows.getRootWindow().innerWidth < 600);
}