var BinarySearchTree = function(value) {
  var obj = Object.create(BSTMethods);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

var BSTMethods = {
  //insert
  insert: function(value) {
    var newNode = BinarySearchTree(value);
    if (this.value > value) {
      if (this.left === null) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    } 
  },
  contains: function(value) {
    if (this.value === value) {
      return true;
    }
    // recursion here 
  },
  depthFirstLog: function() {
    
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
