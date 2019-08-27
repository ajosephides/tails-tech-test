const Order = require('./src/Order')

// enpoint hit and router happening in this file.
// logic that follow on

var returnPrices = function(requestData){
  var order = new Order(requestData);
  return order.getPrice()
};

// returnPrices();