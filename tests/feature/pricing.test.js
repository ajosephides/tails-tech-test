const returnPrices =  require('../../app');

// console.log(App)

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

let expectedResponse = {
  "order": {
      "id": 12345,
      "customer": {},
      "items": [
          {
              "product_id": 1,
              "quantity": 1,
              "price": 599,
              "vat": 120
          },
          {
              "product_id": 2,
              "quantity": 5,
              "price": 1250,
              "vat": 0
          },
          {
              "product_id": 3,
              "quantity": 1,
              "price": 250,
              "vat": 0
          }
      ],
      "totalPrice": 2099,
      "totalVat": 120
  }
}

describe('feature test', () => {

  it('gives the expected item and order prices', () => {
    expect(returnPrices(mockRequest)).toEqual(expectedResponse);
  })

})