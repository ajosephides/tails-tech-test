const Item = require('./item')

module.exports = class Order{

  constructor(order, item = Item){
    this.request = order;
    this.items = this.createItems(item);
  }

  createItems(newItem){
    return this.items = this.request.order.items.map(item => {
      var item = new newItem(item.product_id, item.quantity)
      return item
    })
  }

  totalPrice(){
    let total = 0;
    this.items.forEach(item => {
      total += item.price;
    });
    return total;
  }

  totalVat(){
    let total = 0;
    this.items.forEach(item => {
      total += item.vat;
    });
    return total;
  }

  getPrice(){
    let order = {
      "order": {
      "id": 12345,
      "customer": {},
      "items": this.items,
      "totalPrice": this.totalPrice(),
      "totalVat": this.totalVat()
      }
    }
    return order;
  }

}