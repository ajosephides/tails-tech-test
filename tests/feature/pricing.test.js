const App =  require('../../app');

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
              "itemPrice": 599,
              "itemVat": 119.8
          },
          {
              "product_id": 2,
              "quantity": 5,
              "itemPrice": 1250,
              "itemVat": 0
          },
          {
              "product_id": 3,
              "quantity": 1,
              "itemPrice": 250,
              "itemVat": 0
          }
      ],
      "totalPrice": 2099,
      "totalVat": 119.8
  }
}

describe('feature test', () => {

  it.skip('gives the expected item and order prices', () => {
    expect(App.returnPrices()).toEqual(expectedResponse);
  })

})