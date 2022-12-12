const intialState = {
  savedPlaylists: [],
};

const playlistsReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_TO_PLAYLIST':
      return {
        ...state,
        savedPlaylists: [...state.savedPlaylists.filter(p => p.name !== action.payload.name), action.payload]
      }
    case "CREATE_PLAYLIST":
      return {
        ...state,
        savedPlaylists: [...state.savedPlaylists, action.payload],
      };
    case "REMOVE_PLAYLIST":
      return {
        ...state,
        savedPlaylists: [],
      };
    default:
      return state;
  }
};

export default playlistsReducer;
