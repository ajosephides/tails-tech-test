const Order = require('../../src/order')

let order;

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
mockItemCreater.mockImplementation(function() {
    this.product_id = 1,
    this.quantity = 1,
    this.price = 10,
    this.vat = 2
})


describe('Order', () => {

  beforeEach(() => {
    order = new Order(mockRequest)
  });

  it('recieves an order', () => {
    expect(order.request.order.id).toBe(12345)
  })

  it('creates a number of item objects', () => {
    order.createItems(mockItemCreater);
    expect(mockItemCreater.mock.calls.length).toBe(3);
    expect(order.items.length).toBe(3);
  })

  it('calculates a total order price', () => {
    order.createItems(mockItemCreater);
    expect(order.totalPrice()).toBe(30)
  })

  it('calculates the total vat on an order', () => {
    order.createItems(mockItemCreater);
    expect(order.totalVat()).toBe(6)
  })

})