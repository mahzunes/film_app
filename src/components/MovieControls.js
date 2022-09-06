import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function MovieControls({ movie, type }) {
  const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeMovieFromWatched } =
    useContext(GlobalContext);

  return (
    <div className="inner-card-controls">

      {type === "watchlist" && (

        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button
            onClick={() => removeMovieFromWatchlist(movie.id)}
            className="ctrl-btn"
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}


      {type === "watched" && (

        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>
          <button
            onClick={() => removeMovieFromWatched(movie.id)}
            className="ctrl-btn"
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}








    </div>
  );
}

export default MovieControls;
