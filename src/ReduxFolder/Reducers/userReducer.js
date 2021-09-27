let userdetails = {
  name: 'Bob',
  age: 21,
  Id: 1,
};
const userReducer = (state = userdetails, action) => {
  switch (action.type) {
    case 'UpdateName_FULFILLED':
      state = { ...state, name: action.payload };
      break;
    case 'UpdateAge':
      state = { ...state, age: action.payload };
      break;
  }
  return state;
};
export default userReducer;
