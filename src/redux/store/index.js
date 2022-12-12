import { configureStore, combineReducers } from "@reduxjs/toolkit";
import homePageReducer from "../reducers/homePageReducer";
import musicPlayerReducer from "../reducers/musicPlayerReducer";
import playlistsReducer from "../reducers/playlistsReducer";


const mainReducer = combineReducers({
    homepage: homePageReducer,
    player: musicPlayerReducer,
    playlists: playlistsReducer
})

export const store = configureStore({
    reducer: mainReducer
})