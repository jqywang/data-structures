class DoublyLinkedList {
  
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  addToHead(value) {
    var node = new Node(value);
    
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }
  
  addToTail(value) {
    var node = new Node(value);
    if (this.tail === null) {
      this.addToHead(value);
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }

  removeHead() {
    var returnHead;
    if (this.head === null) {
      // Do nothing  
    } else {
      returnHead = this.head.value;
                
      if (this.head === this.tail) {
        this.head = null;
      } else {
        var temp = this.head;
        this.head.next.prev = null;
        this.head = temp.next;
      }

    }
    
    return returnHead;
  }
  
  removeTail() {
    var returnTail;
    if (this.tail === null) {
      // Do nothing
    } else {
      returnTail = this.tail.value;
      
      if (this.head === this.tail) {
        this.tail = null;
      } else {
        var temp = this.tail;
        this.tail.prev.next = null;
        this.tail = temp.prev;
      }
    }
    
    return returnTail;
  }
  
  contains(value) {
    var containRecursion = function (node) {
      if (node.value === value) {
        return true;
      }
      if (node.next === null) {
        return false;
      } else {
        return containRecursion(node.next);
      }
    };
    
    return containRecursion(this.head);    
    
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}