import React from 'react'

export const PlayListItem = ({handleClick, playlist, selectedPlaylists}) => {
    const isSelected = selectedPlaylists.find(p => p.name === playlist.name)
    return (
    <div onClick={handleClick}>
        {playlist.name}
        {isSelected && (<span> Selected</span>)}
    </div>
  )
}
