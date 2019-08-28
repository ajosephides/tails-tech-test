const Pricing = require('../data/pricing.json')

module.exports = class Item {

  constructor(id, quantity){
    this.id = id
    this.quantity = quantity
    this.price = this.getPrice()
    this.vat = this.getVat()
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
    return (this.findItemPrice() * this.quantity).toFixed(2)
  }

  findVatBand(){
    let vatBand;
    Pricing.prices.forEach(item => {
      if(item.product_id === this.id){
        vatBand = item.vat_band
      }
    })
    return vatBand
  }

  findVatRate(){
    let vatBand = this.findVatBand()
    let vatRate = Pricing.vat_bands[vatBand]
    return vatRate
  }

  getVat(){
    return (this.price * this.findVatRate()).toFixed(2)
  }








}