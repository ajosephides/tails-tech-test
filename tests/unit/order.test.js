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

let mockResponse = {
  "order": {
      "id": 12345,
      "customer": {},
      "items": [
          {
              "product_id": 1,
              "quantity": 1,
              "price": 10,
              "vat": 2
          },
          {
              "product_id": 1,
              "quantity": 1,
              "price": 10,
              "vat": 2
          },
          {
              "product_id": 1,
              "quantity": 1,
              "price": 10,
              "vat": 2
          }
      ],
      "totalPrice": 30,
      "totalVat": 6
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
    order = new Order(mockRequest, mockItemCreater)
  });

  it('recieves an order', () => {
    expect(order.request.order.id).toBe(12345)
  })

  it('creates a number of item objects', () => {
    // to check - unsure why with refactor the mock is called 6 times instead of 3
    expect(mockItemCreater.mock.calls.length).toBe(6);
    expect(order.items.length).toBe(3);
  })

  it('calculates a total order price', () => {
    expect(order.totalPrice()).toBe(30)
  })

  it('calculates the total vat on an order', () => {
    expect(order.totalVat()).toBe(6)
  })

  it('returns priced up order object', () => {
    expect(order.getPrice()).toEqual(mockResponse)
  })

})