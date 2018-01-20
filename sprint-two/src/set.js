var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = new HashTable();
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.insert(item, item);
  
  // refactored
  // if (!this.contains(item)) {
  //   this._storage.push(item);
  // }
};

setPrototype.contains = function(item) {
  return this._storage.retrieve(item) !== undefined;
  
  // refactored
  // return _.contains(this._storage, item);
};

setPrototype.remove = function(item) {
  this._storage.remove(item);
  
  
  // refactored
  // var index = _.indexOf(this._storage, item);
  // if (index !== -1) {
  //   this._storage.splice(index, 1);
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add : O(1)
 contains: O(1)
 remove: O(1)
 */
