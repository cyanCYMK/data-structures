var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.topCounter = 0;
  this.botCounter = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.topCounter] = value;
  this.topCounter++;
}

Queue.prototype.dequeue = function() {
  if (this.topCounter > this.botCounter) {
    var temp = this.storage[this.botCounter];
    delete this.storage[this.botCounter];
    this.botCounter++;
    return temp;
  }
}

Queue.prototype.size = function() {
  return this.topCounter - this.botCounter;
}
