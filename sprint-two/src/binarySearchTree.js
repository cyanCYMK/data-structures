var BinarySearchTree = function(value){
  var binSrchTree = {};
  binSrchTree.value = value;
  binSrchTree.left = null;
  binSrchTree.right = null;
  _.extend(binSrchTree, BSTMethods);

  return binSrchTree;
};

var BSTMethods = {};
BSTMethods.insert = function(value){
  if( value < this.value ){
    if( this.left === null ){
      this.left = BinarySearchTree(value);
    }
    this.left.insert(value);
  }
  if( value > this.value ){
    if( this.right === null ){
      this.right = BinarySearchTree(value);
    }
    this.right.insert(value);
  }
};
BSTMethods.contains = function(value){
  if( this.value === value ){
    return true;
  }
  if( value < this.value ){
    if( this.left === null ){
      return false;
    }
    return this.left.contains(value);
  }
  if( value > this.value ){
    if( this.right === null ){
      return false;
    }
    return this.right.contains(value);
  }
  return false;

};
BSTMethods.depthFirstLog = function(callback){
  if( this.value === null ){
    return;
  }
  callback(this.value);
  if( this.left !== null ){
    this.left.depthFirstLog(callback);
  }
  if( this.right !== null ){
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
