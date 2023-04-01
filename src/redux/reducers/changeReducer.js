const changeReducer = (state = {init: "başlangıç değeri"}, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        init: action.payload
      };
    default:
      return state;
  }
};

export default changeReducer;