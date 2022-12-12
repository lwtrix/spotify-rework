export const FETCH_RESULTS_ONLOAD = 'FETCH_RESULTS_ONLOAD'
export const UPDATE_SELECTED_TRACK = 'UPDATE_SELECTED_TRACK'
export const CREATE_PLAYLIST = 'CREATE_PLAYLIST'
export const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST'

export const updateSelectedTrack = (track) => {
    return (dispatch, getState) => {
        dispatch({
            type: UPDATE_SELECTED_TRACK,
            payload: track
        })
    }
}

export const fetchResults = () => {
    const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=trap'

    return async (dispatch, getState) => {
        try {
            const res = await fetch(baseEndpoint)
            if(res.ok) {
                const { data } = await res.json()
                dispatch({
                    type: FETCH_RESULTS_ONLOAD,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const createPlaylist = (playlist) => {
    console.log(playlist)
    return (dispatch, getState) => {
        dispatch({
            type: CREATE_PLAYLIST,
            payload: playlist
        })
    }
}

export const addToPlaylist = (updatedPlaylist) => {

    return (dispatch, getState) => {
        dispatch({
            type: ADD_TO_PLAYLIST,
            payload: updatedPlaylist
        })
    }
}