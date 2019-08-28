const Item = require('../../src/item')

describe('Item', () => {
  it('calculates the correct price', () => {
    let item = new Item(2, 5);
    expect(item.price).toBe(1250)
  })

  it('calculates the vat correctly on a 0 vat item', () => {
    let item = new Item(2, 5);
    expect(item.vat).toBe(0)
  })

  it('calculates the vat correctly on a 0 vat item', () => {
    let item = new Item(1, 3);
    expect(item.vat).toBe(359)
  })

})