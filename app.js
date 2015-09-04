(function(global) {


	var jsLib = function() {
		return new jsLib.init();
	}

	jsLib.prototype = {

		factorial: function(num) {
			if( num < 0) {
				console.log("Enter number greater than 0");
				return;
			}
			var total = 1; 

			for(var i =1; i<= num; i++){
				total = total*i;
			}

			return total;
		}, 
		max: function(num1, num2) {
			return num1 >= num2 ? num1 : num2;
		}, 

		min: function(num1, num2) {
			return num1 <= num2 ? num1: num2;
		},

		isPalidrome: function(str) {
			return str === str.split('').reverse().join('');
		},

		substr: function(str, num1, num2) {
			var s =''

			for(var i=num1; i< num2;i++){
				s+= str.charAt(i);
			}
			return s;
		},

		startsWith: function(str, prefix){

		}

	};

	jsLib.init = function() {
		var self = this;
	}

	jsLib.init.prototype = jsLib.prototype;

	global.jsLib = jsLib;

}(window));