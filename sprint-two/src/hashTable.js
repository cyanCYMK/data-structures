var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  if( this._count === Math.round(this._limit*0.75) ){
    this.resize(this._limit*2);
  }
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);
  var tuple = [k, v];
  if( !bucket ){
    var newBucket = [];
    newBucket.push(tuple);
    this._storage.set(idx, newBucket);
    this._count++;
  } else {
    bucket.push(tuple);
    this._count++;
  }
};

HashTable.prototype.retrieve = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);
  if( bucket.length === 0 ){
    return null;
  } 
  for( var i=0; i<bucket.length; i++ ){
    if( bucket[i][0] === k ){
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  if( this._count === Math.round(this._limit*0.25) ){
    this.resize(this._limit/2);
  }
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);
  if( !bucket ){
    return null;
  }
  for( var i=0; i<bucket.length; i++ ){
    if( bucket[i][0] === k ){
      var removedTuple = bucket.splice(i, 1);
      this._count--;
      return removedTuple[1];
    }
  }
};

HashTable.prototype.resize = function(newLimit){
  var oldStorage = this._storage;
  // change the size of our hashTable
  this._storage = LimitedArray(newLimit);
  this._count = 0;
  this._limit = newLimit;
  var context = this;
  // iterate over the buckets/tuples
    // for each, insert it back into the hashTable
  var values = [];
  oldStorage.each(function(value){
    values.push(value);
  });
  for( var i=0; i<values.length; i++ ){
    var bucket = values[i];
    if( bucket === undefined ){
      continue;
    }
    bucket.forEach(function(tuple){
      context.insert(tuple[0], tuple[1]);
    });
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
