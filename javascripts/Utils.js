var Spinn = [];
Spinn.Utils = [];

Spinn.Utils.exists = function (a) {
	return ((typeof a !== "undefined") && (a !== NaN) && (a !== null))
},
Spinn.Utils.isEmptyObject = function (b) {
	for (var a in b) {
		return false
	}
	return true
},
Spinn.Utils.isInt = function (a) {
	if(this.exists(a)){
		var intRegEx = /^-?\d+$/;
		return intRegEx.test(a);
	} else {
		return false;
	}
},
Spinn.Utils.isFloat = function (a) {
	if(this.exists(a)){
		var floatRegEx = /^[-+]?\d+(\.\d+)?$/;
		return floatRegEx.test(a);
	} else {
		return false;
	}
},
//http://codeaid.net/javascript/convert-seconds-to-hours-minutes-and-seconds-(javascript)
Spinn.Utils.secondsToTime = function(secs)
{
	var hours = Math.floor(secs / (60 * 60));
   
	var divisor_for_minutes = secs % (60 * 60);
	var minutes = Math.floor(divisor_for_minutes / 60);
 
	var divisor_for_seconds = divisor_for_minutes % 60;
	var seconds = Math.ceil(divisor_for_seconds);
   
	var obj = {
		"h": hours,
		"m": minutes,
		"s": seconds
	};
	return obj;
},
//http://stackoverflow.com/questions/2998784/how-to-output-integers-with-leading-zeros-in-javascript
Spinn.Utils.zeroPad = function(num, places) {
	var zero = places - num.toString().length + 1;
	return Array(+(zero > 0 && zero)).join("0") + num;
},
//http://www.mredkj.com/javascript/nfbasic.html
Spinn.Utils.addCommasToNum = function(num) {
	num += '';
	var x = num.split('.');
	var x1 = x[0];
	var x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}