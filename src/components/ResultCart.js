import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ResultCart({ movie }) {
  const { addMovieToWatchlist, watchlist, addMovieToWatched, watched } = useContext(GlobalContext);

  const storedMovie = watchlist.find((o) => o.id === movie.id);
  const storedMovieWatched = watched.find((o) => o.id === movie.id) ? true : storedMovieWatched ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h2 className="title">{movie.title}</h2>
          <h3 className="release-date">
            Release Date:{" "}
            {movie.release_date ? movie.release_date.substring(0, 4) : "Unkown"}
          </h3>
          <h3 className="release-date">
            IMBD:{movie.vote_average ? movie.vote_average : "Unkown"}
          </h3>
        </div>
        <div className="controls">
          <button disabled={storedMovie} className="btn" onClick={() => addMovieToWatchlist(movie)}>Add To Watchlist</button>
          <button disabled={storedMovieWatched} className="btn" onClick={() => addMovieToWatched(movie)}>Add To Watched</button>
        </div>
      </div>
    </div>
  );
}

export default ResultCart;
