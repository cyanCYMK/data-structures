var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var topCounter = 0;
  var botCounter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[topCounter] = value;
    topCounter++;
  };

  someInstance.dequeue = function(){
    if (someInstance.size() > 0){
      var temp = storage[botCounter];
      delete storage[botCounter];
      botCounter++;
      return temp;
    }
  };

  someInstance.size = function(){
    return topCounter - botCounter;
  };

  return someInstance;
};
