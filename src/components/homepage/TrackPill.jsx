import React, { useState } from "react";
import "../css/track-pill.css";
import { Card, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedTrack } from "../../redux/actions";
import { AddToPlaylistModal } from "../Modals/AddToPlaylistModal";

export const TrackPill = ({ title, author, track }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleModal = (bool) => {
    setShowModal(bool);
  };

  return (
    <>
      <Card
        className="track-pill mx-1 mb-2 justify-space-between"
        onClick={() => dispatch(updateSelectedTrack(track))}
      >
        <Card.Header>{author}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="danger">Like</Button>
          <Button variant="info" onClick={() => handleModal(true)}>
            Add To Playlist
          </Button>
        </Card.Body>
      </Card>
      <AddToPlaylistModal data={track} onHide={() => handleModal(false)} show={showModal} />
    </>
  );
};
