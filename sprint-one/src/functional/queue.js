var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var frontCount = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
  	count ++;
  	storage[count] = value;
  };

  someInstance.dequeue = function() {
  	if (count - frontCount > -1) {
  		var result = storage[frontCount];
  		delete storage[frontCount];
  		frontCount ++;
  		return result;
  	}
  };

  someInstance.size = function() {
  	return count - frontCount + 1;
  };

  return someInstance;
};
