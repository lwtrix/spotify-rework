const initialState = {
  results: [],
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RESULTS_ONLOAD":
      return {
        ...state,
        results: [...action.payload],
      };
    default:
      return state;
  }
};

export default homePageReducer;
