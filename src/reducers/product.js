const initialState = {
  products: [{
    id: '0',
    name: '123',
    text: '456'
  }, {
    id: '1',
    name: '789',
    text: '10'
  }]
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTS': {
      return {
        products: action.products
      }
    }
    default: {
      return state
    }
  }
}
