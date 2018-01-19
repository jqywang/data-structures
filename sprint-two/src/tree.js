var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
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

treeMethods.removeFromParent = function () {
  //no input value, select the tree node and calling htis fucntion removes the node and its children from the tree
  if (this.parent !== null) {
    var siblings = this.parent.children; //returns children array
    var index = _.indexOf(siblings, this);
    this.parent = null;
    
    siblings.splice(index, 1);
    
  //loop through the array and use indexOf to find the index of child 
  //splice the parent's children array hence removing the child from parent
  
  }

};

// function remove:
  // set the nodes parent to null
  // delete node from parents child list



/*
 * Complexity: What is the time complexity of the above functions?
 addChild - O(1)
 contains - O(n)
 */
