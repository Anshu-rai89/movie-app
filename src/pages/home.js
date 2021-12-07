import React from "react";
import MovieCard from "../component/movieCard";
import { useSelector, useDispatch } from "react-redux";
import { showFavourite } from "../action";

function Home(props) {
  console.log("inside home page", props);
  const dipatch = useDispatch();
  const moviesList = useSelector((state) => state.movie.list);
  const favouriteList = useSelector((state) => state.movie.favourite);
  const isFavTab = useSelector((state) => state.movie.showFavourite);

  console.log("details ", moviesList, favouriteList, isFavTab);
  const isFavourite = (movie) => {
    let index = favouriteList.findIndex((singleMovie) => singleMovie == movie);
    if (index != -1) {
      return true;
    }
    return false;
  };

  const listOfMoview = isFavTab ? favouriteList : moviesList;
  console.log("details", favouriteList, "list", listOfMoview);
  return (
    <div>
      <div className="main">
        <div className="tabs">
          <div
            className={`tab ${isFavTab ? "" : "active-tabs"}`}
            onClick={() => dipatch(showFavourite(false))}
          >
            Movies
          </div>

          <div
            className={`tab ${isFavTab ? "active-tabs" : ""}`}
            onClick={() => dipatch(showFavourite(true))}
          >
            Favorites
          </div>
        </div>
      </div>

      <div className="list">
        {listOfMoview.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            // handleFav={handleFav}
            isFav={isFavourite(movie)}
            //  handleUnFav={handleUnFav}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
