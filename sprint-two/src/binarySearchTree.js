var BinarySearchTree = function(value) {
  var obj = Object.create(BSTMethods);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  obj.parent = null;
  //size counter
  return obj;
};

var BSTMethods = {
  insert: function(value) {
    var newNode = BinarySearchTree(value);
    if (value < this.value) {
      if (this.left === null) {
        this.left = newNode;
        newNode.parent = this;
      } else {
        this.left.insert(value);
        // counter ++
      }
    } else {
      if (this.right === null) {
        this.right = newNode;
        newNode.parent = this;
      } else {
        this.right.insert(value);
        // counter ++
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
  },
  
  checkDepth: function() {
    var maxRight = 0;
    var maxLeft = 0;
    
    if (this.right === null && this.left === null) {
      return 0;
    } 
    
    if (this.right !== null) {
      maxRight = this.right.checkDepth();
    }
    
    if (this.left !== null) {
      maxLeft = this.left.checkDepth();
    }
    
    return Math.max(maxRight, maxLeft) + 1;
  }
  
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 * contains O(log(n))
 * inserts O(log(n))
 * depthFirst: O(n)
 */
