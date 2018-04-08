export const addCard = text => {
    return {
      type: 'ADD_CARD',
      text
    }
  }
  
  export const updateCard = (id, text) => {
    return {
      type: 'UPDATE_CARD',
      id,
      text
    }
}

export const deleteCard = id => {
    return {
      type: 'DELETE_CARD',
      id
    }
  }