const userReducer = (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("desde dispatch", state, action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
};

export default userReducer;
