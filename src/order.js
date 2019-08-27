module.exports = class Order{

  constructor(order){
    this.request = order;
    this.items;
  }

  createItems(newItem = Item){
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

  }