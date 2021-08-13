const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;

    case "LOGOUT":
      return (state.token = []);

    default:
      return state;
  }
};

export default userReducer;
