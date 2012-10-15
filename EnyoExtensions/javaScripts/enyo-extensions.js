if (typeof enyo.exists === "undefined") {
    enyo.exists = function (a) {
        return typeof a !== "undefined" && a !== NaN && a !== null
    }
}
if (!enyo.exists(enyo.isEmptyObject)) {
    enyo.isEmptyObject = function (b) {
        for (var a in b) {
            return false
        }
        return true
    }
}
if (!enyo.exists(enyo.isInt)) {
	enyo.isInt = function (a) {
		if(enyo.exists(a)){
			var intRegEx = /^-?\d+$/;
			return intRegEx.test(a);
		} else {
			return false;
		}
	}
}
if (!enyo.exists(enyo.isFloat)) {
	enyo.isFloat = function (a) {
		if(enyo.exists(a)){
			var floatRegEx = /^[-+]?\d+(\.\d+)?$/;
			return floatRegEx.test(a);
		} else {
			return false;
		}
	}
}