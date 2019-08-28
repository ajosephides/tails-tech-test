const Pricing = require('../data/pricing.json')

module.exports = class Item {

  constructor(id, quantity){
    this.id = id
    this.quantity = quantity
    this.price = this.getPrice()
  }

  findItemPrice(){
    let itemPrice = 0;
    Pricing.prices.forEach(item => {
      if(item.product_id === this.id){
        itemPrice = item.price
      }
    })
    return itemPrice
  }

  getPrice(){
    return this.findItemPrice() * this.quantity
  }








}