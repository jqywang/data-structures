var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.count = 0;
  return stack;
};

var stackMethods = {
	pop : function () {
		if (this.count !== 0) {	
			var result = this.storage[this.count];
			delete this.storage[this.count];
			this.count --;
			return result;
		}
	},
	push : function (value) {
		this.count ++;
		this.storage[this.count] = value;
	},
	size : function () {
		return this.count;
	}
};

    if(this.count !== 0){
      this.count--;
    }

    return temp;
  },
  size : function() {
    return this.count;
  }
};
