const initialState = {
  showLogin: false,
  loggedInUser: "",
  isHomePage: false,
  isGrocery: false,
  itemprice: {},
  isPayment: false,
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
    case "GROCERYPAGE": {
      return { ...state, isGrocery: action.payload };
    }
    case "ITEMPRICE": {
      return { ...state, itemprice: action.payload };
    }
    case "PAYMENT": {
      return { ...state, isPayment: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
