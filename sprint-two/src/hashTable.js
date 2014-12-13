var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentVal = this._storage.get(i);
  if(currentVal === undefined || currentVal === null){
    this._storage.set(i, [k, v]); // change v to [k, v]?
    return;
  }
  if(Array.isArray(currentVal[0])){
    currentVal.push([k, v]); // change v to [k, v]?
    return;
  }
  this._storage.set(i, [currentVal, [k, v]]); //change v to [k, v]?
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var currentVal = this._storage.get(i);
  if(currentVal === null){
    return null;
  }
  if(Array.isArray(currentVal[0])){
    for(var j = 0; j<currentVal.length; j++){
      if(currentVal[j][0] === k)
        return currentVal[j][1];
    }
  }
  return currentVal[1];

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
