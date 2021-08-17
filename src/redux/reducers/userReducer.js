const userReducer = (state = null, action) => {
  //state es user
  switch (action.type) {
    case "LOGIN":
      return action.payload;

    case "LOGOUT":
      return (state.token = []);

    case "SET_TWEETS":
      return { ...state, tweets: [...action.payload] };

    case "ADD_TWEET":
      return { ...state, tweets: [action.payload, ...state.tweets] };

    case "DELETE_TWEET":
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
