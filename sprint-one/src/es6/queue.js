class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.count = 0;
  	this.front = 1;
  	this.storage = {};
  }
  enqueue(value) {
  	this.count++;
  	this.storage[this.count] = value;
  }
  dequeue() {
  	if(this.size() !== 0) {
  		var result = this.storage[this.front];
  		delete this.storage[this.front];
  		this.front ++;
  		return result;
  	}
  }
  size() {
  	return (this.count - this.front + 1);
  }

}
