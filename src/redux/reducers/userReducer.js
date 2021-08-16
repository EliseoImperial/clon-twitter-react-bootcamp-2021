const userReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;

    case "LOGOUT":
      return (state.token = []);

    case "DELETE_TWEET":
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
