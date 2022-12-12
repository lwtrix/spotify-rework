import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Playlist = () => {
    const playlists = useSelector(state => state.playlists.savedPlaylists)
    const {id} = useParams()
    console.log(id)
    console.log(playlists)
    const playlist = playlists.find(playlist => playlist.name === id)
    console.log(playlist)
  return (
    <div>Playlist</div>
  )
}

export default Playlist