// make a node obj 
// Instantiate a new graph
var Graph = function() {
  this.counter = 0;
  this.storage = {};
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.contains(node)) {
    this.storage[this.counter] = node;
    this.counter ++;
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.storage) {
    if (this.storage[key] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // var cleanUp = function (item) {
  //   return Graph.prototype.removeEdge.apply(this, item, node);
  // };
  // this.forEachNode(cleanUp);
  
  
  for (var key in this.storage) {
    if (this.storage[key] === node) {
      delete this.storage[key];
    }
    this.removeEdge(this.storage[key], node);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    if (_.contains(this.edges[i], fromNode) && _.contains(this.edges[i], toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.hasEdge(fromNode, toNode)) {
    this.edges.push([fromNode, toNode]);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toBeDeleted = -1;
  for (var i = 0; i < this.edges.length; i++) {
    if (_.contains(this.edges[i], fromNode) && _.contains(this.edges[i], toNode)) {
      toBeDeleted = i;
    }
  }
  if (toBeDeleted !== -1) {
    this.edges.splice(toBeDeleted, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(this.storage[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


