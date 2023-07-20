const initialState = {
  showLogin: false,
  loggedInUser: "",
  isHomePage: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGINPAGE": {
      return { ...state, showLogin: action.payload };
    }
    case "USERNAME": {
      return { ...state, loggedInUser: action.payload };
    }
    case "HOMEPAGE": {
      return { ...state, isHomePage: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
