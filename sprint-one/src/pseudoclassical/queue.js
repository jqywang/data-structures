var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.count = 0;
  this.front = 1;
  this.storage = {};

};

Queue.prototype.enqueue = function (value) {
	this.count ++;
	this.storage[this.count] = value;
};
Queue.prototype.dequeue = function () {
	if (this.size() !== 0) {
		var result = this.storage[this.front];
		delete this.storage[this.front];
		this.front ++;
		return result;
	}
};
Queue.prototype.size = function () {
	return (this.count - this.front +1);
};
