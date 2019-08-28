const Pricing = require('../data/pricing.json')

module.exports = class Item {

  constructor(id, quantity){
    this.product_id = id
    this.quantity = quantity
    this.price = this.getPrice()
    this.vat = this.getVat()
  }

  findItemPrice(){
    let itemPrice = 0;
    Pricing.prices.forEach(item => {
      if(item.product_id === this.product_id){
        itemPrice = item.price
      }
    })
    return itemPrice
  }

  getPrice(){
    return Math.round(this.findItemPrice() * this.quantity)
  }

  findVatBand(){
    let vatBand;
    Pricing.prices.forEach(item => {
      if(item.product_id === this.product_id){
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
    return Math.round(this.price * this.findVatRate())
  }








}