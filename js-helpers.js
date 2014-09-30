/**
 * Identifies whether a variable is an array or not.
 * @function
 * @param {*} value The variable to be checked
 * @returns {Boolean} True or false if the value is an array.
 */
var is_array = function(value) {
	return Object.prototype.toString.apply(value === '[object Array]';
}
