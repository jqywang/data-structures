class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    var temp = this.storage[this.head];
    delete this.storage[this.head];
    if(this.head !== this.tail){
      this.head++;
    }

    return temp;
  }

  size() {
    return this.tail - this.head;
  }

}
