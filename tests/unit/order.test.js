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

let mockItemCreater = jest.fn()

describe('Order', () => {
  it('recieves an order', () => {
    var order = new Order(mockRequest)
    expect(order.request.order.id).toBe(12345)
  })

  it('creates a number of item objects', () => {
    var order = new Order(mockRequest);
    order.createItems(mockItemCreater);
    expect(mockItemCreater.mock.calls.length).toBe(3);
    expect(order.items.length).toBe(3);
  })

})