const initialState = {
  showLogin: false,
  loggedInUser: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGINPAGE": {
      return { ...state, showLogin: action.payload };
    }
    case "USERNAME": {
      return { ...state, loggedInUser: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
