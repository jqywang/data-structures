var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  stack.count = 0;
  extend(stackMethods, stack);
  return stack;
};
var extend = function (source, destination) {
	for (var key in source) {
		destination[key] = source[key];
	}
}
var stackMethods = {
	push : function (value) {
		this.count ++;
		this.storage[this.count] = value;

	},
	pop : function () {
		if (this.count !== 0) {
			var result = this.storage[this.count];
			delete this.storage[this.count];
			this.count --;
			return result;
		}

	},
	size : function () {
		return this.count;
	}
};


