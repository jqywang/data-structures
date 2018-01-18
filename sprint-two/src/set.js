var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = [];
  set.toBeRemoved = -1;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage.push(item);
};

setPrototype.contains = function(item) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      this.toBeRemoved = i;
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    this.storage.splice(this.toBeRemoved, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
