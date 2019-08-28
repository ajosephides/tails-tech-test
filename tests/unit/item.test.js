const Item = require('../../src/item')

describe('Item', () => {
  it('calculates the correct price', () => {
    let item = new Item(2, 5);
    expect(item.price).toBe(1250)
  })

})