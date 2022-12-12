import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import '../css/homepage.css'

import { TrackPill } from "./TrackPill";
import { fetchResults } from "../../redux/actions";

export const HomePage = () => {
    const dispatch = useDispatch()
    const fetchedResults = useSelector(state => state.homepage.results)
    useEffect(() => {
        dispatch(fetchResults())
    }, [])

  return (
    <div className="results-container">
    {fetchedResults.map(track => (
        <TrackPill key={track.id} title={track.title} author={track.artist.name} track={track}/>
    ))}
    </div>
  );
};
