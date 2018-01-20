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
    
    
    // rebalance
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
  depthFirstLog: function(cb) {
    cb(this.value); // call function on yourself
    if (this.left) { this.left.depthFirstLog(cb); } // if you can go left, go left.
    if (this.right) { this.right.depthFirstLog(cb); } // go right after apply function on left node
    // refactored
    // var alreadyRan = alreadyRan || {};
    // var hasntRun = function (node) {
    //   var value = node.value;
    //   if (alreadyRan[value] !== undefined) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // };
    // var runCB = function() {
    //   cb(this.value);
    //   alreadyRan[this.value] = 1;
    // };
    
    // if (hasntRun(this)) {
    //   runCB.call(this);
    // }
    
    // if (this.left !== null && hasntRun(this.left)) {
    //   this.left.depthFirstLog(cb, alreadyRan);
    // } else if ((this.left === null || !hasntRun(this.left)) && this.right !== null && hasntRun(this.right)) {
    //   this.right.depthFirstLog(cb, alreadyRan);      
    // } else if (this.parent !== null) {
    //   this.parent.depthFirstLog(cb, alreadyRan);
    // }
  },
  
  inOrderTraverse: function(cb) {
    if (this.left) { this.left.depthFirstLog(cb); } 
    cb(this.value);
    if (this.right) { this.right.depthFirstLog(cb); }
  },
  
  maxDepth: function() {
    var maxRight = 0;
    var maxLeft = 0;
    if (this.right === null && this.left === null) {
      return 0;
    } 
    if (this.right) {
      maxRight = this.right.maxDepth();
    }
    if (this.left) {
      maxLeft = this.left.maxDepth();
    }
    return Math.max(maxRight, maxLeft) + 1;
  },
  
  minDepth: function() {
    var minRight = 0;
    var minLeft = 0; 
    if (this.right === null && this.left === null) { return 0; }    
    if (this.right) { minRight = this.right.minDepth(); }
    if (this.left) { minLeft = this.left.minDepth(); }   
    return Math.min(minRight, minLeft) + 1;
  },
  
  // for odd number arrays, midpoint = floor, slice right = midpoint +1
  rebalance: function() {
    var orderedArray = [];
    var pushToArray = function (value) {
      orderedArray.push(value);
    };
    this.inOrderTraverse(pushToArray);
    
    var binarySearch = function(orderedArray, tree) {
      var midpoint = Math.floor(orderedArray.length / 2);
      var leftArray = [];
      var rightArray = [];
      if (orderedArray.length === 1) {
        
      } else if (orderedArray.length === 2) {
        leftArray = [orderedArray[0]];
        rightArray = [orderedArray[1]];
      } else {
        leftArray = orderedArray.slice(0, midpoint);
        rightArray = orderedArray.slice(midpoint);
      }
      
      console.log(orderedArray[midpoint]);

      if (leftArray.length !== 0) {
        binarySearch(leftArray, tree);
      }
      if (rightArray.length !== 0) {
        binarySearch(rightArray, tree);
      }
    };
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * contains O(log(n))
 * inserts O(log(n))
 * depthFirst: O(n)
 */
