var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
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
  this._size++;

  // check size and resize accordingly
  if (this.checkOccupancy() > 75) {
    this.resize(1);
    //double
  }
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
  
  if (this._size !== 0) {
    this._size--;
  }
  if (this.checkOccupancy() < 25) {
    this.resize(0);
    //halve
  }
};

HashTable.prototype.resize = function (operation) {
  var limit;
  if (operation === 1) {
    //double
    limit = this._limit * 2;
  } else if (operation === 0) {
    //halve
    limit = Math.floor(this._limit / 2);
  }
  
  var resizedHash = new HashTable(limit);
  var rehash = function(value, key) {
    if (value !== undefined) {
      for (var i = 0; i < value.length; i++) {
        var v = value[i][0];
        var k = value[i][1];
        resizedHash.insert(k, v);
      }
    }
  };
  
  this._storage.each(rehash);
  _.extend(this, resizedHash);
};

HashTable.prototype.checkOccupancy = function () {
  return Math.round(this._size / this._limit * 100);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * all constant in perfect hash table
 * only used for loops in collision cases - where complexity is O(n)
 * time complexity for rehashing is O(n)
 */


