const Order = require('../../src/order')

let mockRequest = {
  "order": {
      "id": 12345,
      "customer": {},
      "items": [
          {
              "product_id": 1,
              "quantity": 1
          },
          {
              "product_id": 2,
              "quantity": 5
          },
          {
              "product_id": 3,
              "quantity": 1
          }
      ]
  }
}

describe('Order', () => {
  it('recieves an order', () => {
    var order = new Order(mockRequest)
    expect(order.request.order.id).toBe(12345)
  })

})