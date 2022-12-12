const initialState = {
  selectedTrack: null,
};

const musicPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SELECTED_TRACK":
      return {
        ...state,
        selectedTrack: action.payload,
      };
    default:
      return state;
  }
};

export default musicPlayerReducer;
