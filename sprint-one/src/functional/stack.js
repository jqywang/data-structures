var Stack = function() {
	var count = 0;
	var someInstance = {};

	// Use an object with numeric keys to store values
	var storage = {};

	// Implement the methods below
	someInstance.push = function(value) {
		count ++;
	};

	someInstance.pop = function() {
		if (count !== 0) {
			count --;
		}
	};

	someInstance.size = function() {
		return count;
	};

	return someInstance;
};
