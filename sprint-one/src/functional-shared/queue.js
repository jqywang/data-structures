var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var queue = {};
  queue.storage = {};
  extend(queueMethods, queue);
  queue.front = 1;
  queue.count = 0;
  return queue;

};
var extend = function (source, destination) {
	for (var key in source) {
		destination[key] = source[key];
	}
}
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

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.tail] = value;
    this.tail++;
  },
  dequeue : function() {
    var temp = this.storage[this.head];
    delete this.storage[this.head];
    if(this.head !== this.tail){
      this.head++;
    }

    return temp;
  },
  size: function() {
    return this.tail - this.head;
  }
};
