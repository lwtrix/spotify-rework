import React from 'react'
import { useSelector } from 'react-redux'
import CreatePlaylist from './CreatePlaylist'
import { Link } from 'react-router-dom'

const PlaylistsPage = () => {

    const playlists = useSelector(state => state.playlists.savedPlaylists)

  return (
    <div>
        {playlists.map(playlist => (
            <h3><Link to={`/playlist/${playlist.name}`}>{playlist.name}</Link></h3>
        ))}
        <CreatePlaylist />
    </div>
  )
}

export default PlaylistsPage
