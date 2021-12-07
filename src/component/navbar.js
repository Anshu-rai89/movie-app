import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleMovieSearch, addMovieToList, addSearchResult } from "../action";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
function Navbar(props) {
  const [serachText, setSearchText] = useState("");
  const history = useHistory();
  const searchMovieResult = useSelector((state) => state.search.result);
  const dispatch = useDispatch();

  // const handleClick = async () => {
  //   if (serachText) {
  //     const res = await fetch(
  //       `http://www.omdbapi.com/?t=${serachText}&apikey=891a9115`
  //     );
  //     const data = await res.json();
  //     setSearchMovieResult(data);
  //     setSearchText("");
  //   } else alert("Please type to search");
  // };

  return (
    <div className="nav">
      <div className="search-container">
        <div style={{ margin: "20px" }}>
          <Link to="/"> Home </Link>
        </div>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={serachText}
        />
        <button
          id="search-btn"
          onClick={() => dispatch(handleMovieSearch(serachText))}
        >
          Search
        </button>
        <ul>
          {!props.isUserLoggedIn && (
            <li>
              <Link to="/login/anshu">Login</Link>
            </li>
          )}
          {!props.isUserLoggedIn && (
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          )}

          {props.isUserLoggedIn && (
            <li
              onClick={() => {
                localStorage.setItem("login", false);
                history.push("/login/anshu");
              }}
            >
              Signout
            </li>
          )}
        </ul>
      </div>
      {searchMovieResult && (
        <div className="search-results">
          <div className="search-result">
            <img src={searchMovieResult.Poster} alt="search-pic" />
            <div className="movie-info">
              <span>{searchMovieResult.Title}</span>
              <button
                onClick={() => {
                  dispatch(addMovieToList(searchMovieResult));
                  dispatch(addSearchResult(null));
                }}
              >
                add To Movies
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
