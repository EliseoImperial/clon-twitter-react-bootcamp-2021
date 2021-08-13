const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("desde dispatch", state, action.payload);
      return action.payload;

    case "LOGOUT":
      return (state = null);

    default:
      return state;
  }
};

export default userReducer;
