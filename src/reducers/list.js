const initialState = {
  list: [{
    id: '0',
    name: '123',
    text: '456'
  }, {
    id: '1',
    name: '789',
    text: '10'
  }]
}

export const list = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST': {
      return {
        list: action.list
      }
    }
    default: {
      return state
    }
  }
}
