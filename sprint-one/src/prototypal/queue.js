var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.count = 0;
  newQueue.storage = {};
  newQueue.front = 1;
  return newQueue;
};

var queueMethods = {
	enqueue : function (value) {
		this.count ++;
		this.storage[this.count] = value;
	},
	dequeue : function () {
		if (this.front <= this.count) {
			var result = this.storage[this.front];
			delete this.storage[this.front];
			this.front ++;
			return result;
		}
	},
	size : function () {
		return (this.count - this.front + 1);
	}
};