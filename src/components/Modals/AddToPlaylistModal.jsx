import React, { useState } from "react";
import { Modal, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PlayListItem } from "./PlaylistItem";
import { addToPlaylist } from "../../redux/actions";

export const AddToPlaylistModal = (props) => {
  const playlists = useSelector((state) => state.playlists.savedPlaylists);
  const [selectedPlaylists, setSelectedPlaylists] = useState([]);
  const dispatch = useDispatch();

  const handleSelect = (playlistObj) => {
    const isSelected = selectedPlaylists.includes(playlistObj);
    if (!isSelected) {
      setSelectedPlaylists([...selectedPlaylists, playlistObj]);
    } else {
      setSelectedPlaylists([
        ...selectedPlaylists.filter((p) => p.name !== playlistObj.name),
      ]);
    }
  };

  const handleAddToPlaylist = (track) => {
    for (let i = 0; i < selectedPlaylists.length; i++) {
      setTimeout(() => {
        const updatedPlaylist = selectedPlaylists[i];
        updatedPlaylist.addedTracks = [...updatedPlaylist.addedTracks, track];
        console.log(updatedPlaylist);
        dispatch(addToPlaylist(updatedPlaylist));
      }, 500)
      
    }
  };

  return (
    <Modal size="sm" {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Add {props.data.title} to playlists</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Select Playlist</p>
        <ListGroup className="mb-3">
          {playlists.map((p) => (
            <PlayListItem
              playlist={p}
              selectedPlaylists={selectedPlaylists}
              handleClick={() => handleSelect(p)}
            />
          ))}
        </ListGroup>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => handleAddToPlaylist(props.data)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};
