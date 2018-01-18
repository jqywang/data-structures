var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var result = list.head;
    if (list.head !== null) {
      list.head = list.head.next;
      
    }
    return result.value;
  };

  list.contains = function(target) {
    var containRecursion = function (node) {
      if (node.value === target) {
        return true;
      }
      if (node.next === null) {
        return false;
      } else {
        return containRecursion(node.next);
      }
    };
    
    return containRecursion(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * O(n)
 */
