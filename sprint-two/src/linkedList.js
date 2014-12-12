var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // in the beginning when list is empty check to see if tail exists
    // add a next to the current tail

    // take in a value
    // do something with the node
    // add that value to the end of the list

    var newNode = Node(value);
    if (list.tail !== null){
      list.tail.next = newNode;
    }
    list.tail = newNode;
    if (list.head === null) {
      list.head = list.tail;
    }

  };

  list.removeHead = function(){
    // removes first node from the list and returns its value
    // should delete first node
    var temp = list.head.value;
    if (list.head.next !== null) {
      list.head = list.head.next;
    }
    return temp;


  };

  list.contains = function(target){
    // start from head
    // see if next.value equals target
    var search = function (node, target) {
      if (node.value === target) {
        return true;
      }
      else if (node.next !== null) {
        return search(node.next, target);
      }
      else {
        return false;
      }
    }
    return search(list.head, target)
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
