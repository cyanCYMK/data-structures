

var Graph = function(){
  this.storage = {};
};

Graph.prototype.addNode = function(node){
  var newNode = new GraphNode(node);
  this.storage[node] = newNode;
};

Graph.prototype.contains = function(node){
  if (this.storage[node] !== undefined){
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  var deleted = this.storage[node];
  delete this.storage[node];
  return deleted.value;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if( this.storage[fromNode].edges[toNode] === undefined ){
    return false;
  }
  return true;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edges[toNode] = this.storage[toNode];
  this.storage[toNode].edges[fromNode] = this.storage[fromNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // test does not actually perform this function???
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.storage){
    cb(this.storage[key].value);
  }
};

var GraphNode = function(value) {
  this.value = value;
  this.edges = {};
}

/*
 * Complexity: What is the time complexity of the above functions?
 */



