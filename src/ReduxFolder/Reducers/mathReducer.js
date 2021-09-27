let initialValue = {
  result: 1,
  values: [],
};
const mathReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD':
      state.result += action.payload;
      break;
    case 'SUBTRACT':
      break;
  }
  return state;
};

export default mathReducer;
