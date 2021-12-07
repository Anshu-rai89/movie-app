import React from "react";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../action";

function MovieCard(props) {
  const { movie, isFav } = props;
  const dispatch = useDispatch();

  return (
    <div className="movie-card">
      <div className="left">
        <img src={movie.Poster} alt="movie-poster" />
      </div>
      <div className="right">
        <div className="title">{movie.Title}</div>
        <div className="plot">{movie.Plot}</div>
        <div className="footer">
          <div className="rating">{movie.imdbRating}</div>
          {isFav ? (
            <div>
              <button
                className="unfavourite-btn"
                onClick={() => dispatch(removeFav(movie))}
              >
                {" "}
                Unfavourite{" "}
              </button>
            </div>
          ) : (
            <div>
              <button
                className="favourite"
                onClick={() => dispatch(addFav(movie))}
              >
                Favourite{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
