class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.count = 0;
  	this.storage = {}
  }
  pop() {
  	if (this.count !== 0) {
  		var result = this.storage[this.count];
  		delete this.storage[this.count];
  		this.count --;
  		return result;
  	}
  }
  push(value) {
  	this.count ++;
  	this.storage[this.count] = value;
  }
  size() {
  	return this.count;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    var temp = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    if(this.count !== 0){
      this.count--;
    }
    return temp;
  }

  size() {
    return this.count;
  }
}
