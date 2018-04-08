const initialState = [
    {text: "Write code!"}
  ];

  export default function cards(state=initialState, action) {
    let cardList = state.slice();

    switch (action.type) {
  
      case 'ADD_CARD':
        return [...state, {text: action.text}];
  
      case 'UPDATE_CARD':
        let cardToUpdate = cardList[action.id]
        cardToUpdate.text = action.text;
        cardList.splice(action.id, 1, cardToUpdate);
        return cardList;
  
      case 'DELETE_CARD':
        cardList.splice(action.id, 1);
        return cardList;
  
      default:
        return state;
    }
  } //of function cards