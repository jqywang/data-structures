

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[0];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var compareValue = this._storage.get(index);
  var removeFunction = function (value, key, collection) {
    if (value === compareValue) {
      collection.splice(value, 1);
      //break;
    }
  };
  this._storage.each(removeFunction);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


