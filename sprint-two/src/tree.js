var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var searchNode = function(node) {
    var found = false;
    if (node.value === target) {
      return true;
    }
    if (node.children.length !== 0) {
      for (var i = 0; i < node.children.length; i++) {
        found = searchNode(node.children[i]);
        if (found) {
          return true;
        }
      }
    }
    return found;
  };
  
  return searchNode(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild - O(1)
 contains - O(n)
 */
