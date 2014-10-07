/**
 * Augments the object on which it is called with the specified method.
 * @function
 * @returns {Object} The prototype object of the object that has been augmented.
 */
Function.prototype.method = function(name, func) {
	this.prototype[name] = func;
	return this;
}

/**
 * Identifies whether a variable is an array or not.
 * @function
 * @param {*} value The variable to be checked
 * @returns {Boolean} True or false if the value is an array.
 */
var is_array = function(value) {
	return Object.prototype.toString.apply(value === '[object Array]';
}

/**
 * Allows user to do computation on arrays.
 * @function
 */
Array.method('reduce', function(f, value) {
	var i;
	for (i = 0; i< this.length; i += 1) {
		value = f(this[i], value);
	}
});