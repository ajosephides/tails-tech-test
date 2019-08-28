const Order = require('./src/Order')

// enpoint hit and router happening in this file.
// logic that follow on

module.exports = function returnPrices(requestData){
  var order = new Order(requestData);
  return order.getPrice()
};
