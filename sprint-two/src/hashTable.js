

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { 
  var index = getIndexBelowMaxForKey(k, this._limit);
  var list; 
  if (this.retrieve(k) !== undefined) {
    this.remove(k);
  }
  this._storage.get(index) === undefined ? list = [] : list = this._storage.get(index);
  list.push([v, k]); 
  this._storage.set(index, list);
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(index) || [];
  for (var i = 0; i < list.length; i++) {
    if (list[i][1] === k) {
      return list[i][0];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var list = this._storage.get(index) || [];
  for (var i = 0; i < list.length; i++) {
    if (list[i][1] === k) {
      list.splice(i, 1);
    }
  } 
  list.length === 0 ? this._storage.set(index, undefined) : this._storage.set(index, list);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * all constant in perfect hash table
 * only used for loops in collision cases
 */


