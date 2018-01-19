var BinarySearchTree = function(value) {
  var obj = Object.create(BSTMethods);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  obj.parent = null;
  return obj;
};

var BSTMethods = {
  //insert
  insert: function(value) {
    var newNode = BinarySearchTree(value);
    if (value < this.value) {
      if (this.left === null) {
        this.left = newNode;
        newNode.parent = this;
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = newNode;
        newNode.parent = this;
      } else {
        this.right.insert(value);
      }
    } 
  },
  contains: function(value) {
    if (this.value === value) {
      return true;
    } else if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  },
  depthFirstLog: function(cb, alreadyRan) {
    var alreadyRan = alreadyRan || {};
    var hasntRun = function (node) {
      var value = node.value;
      if (alreadyRan[value] !== undefined) {
        return false;
      } else {
        return true;
      }
    };
    var runCB = function() {
      cb(this.value);
      alreadyRan[this.value] = 1;
    };
    
    if (hasntRun(this)) {
      runCB.call(this);
    }
    
    if (this.left !== null && hasntRun(this.left)) {
      this.left.depthFirstLog(cb, alreadyRan);
    } else if ((this.left === null || !hasntRun(this.left)) && this.right !== null && hasntRun(this.right)) {
      this.right.depthFirstLog(cb, alreadyRan);      
    } else if (this.parent !== null) {
      this.parent.depthFirstLog(cb, alreadyRan);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
