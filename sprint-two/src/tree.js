var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target){
  //console.log(this);
  var search = function(tree){
    if (target === tree){
      return true;
    }
    //debugger;
    var length = tree.children.length;
    for (var i = 0; i < length; i++){
      return search(tree.children[i]);
    }
    return false;
  };

  return search(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
