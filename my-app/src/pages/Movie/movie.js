import { useState, useEffect } from "react";
import MovieModel from "../../models/movie";
import Spinner from "react-bootstrap/Spinner";
import TheMaskLarge from "../../img/themasklarge.jpg";
import TheMaskCard from "../../img/themaskcard.jpg";
import Button from "react-bootstrap/Button";
import "./movie.css";

function Movie(props) {
  const API_PATH = "http://localhost/myapp/api/movie.php?movieId=";
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getMovie(movieId) {
    setIsLoading(true);
    fetch(`${API_PATH}${movieId}`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMovie(new MovieModel(data));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getMovie(1);
  }, []);

  if (!movie) {
    return <div>Could not load movie</div>;
  }

  return (
    <>
      {isLoading === true && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {isLoading === false && (
        <>
          <div className="movie-header text-start p-3">
            <h1>{movie.title}</h1>
            <span>{movie.year}</span>
          </div>
          <div className="position-relative">
            <img
              src={TheMaskLarge}
              className="movie-img w-100"
              alt="Movie Wallpaper"
            />
            <div className="movie-poster position-absolute d-flex">
              <img src={TheMaskCard} className="" alt="Movie Poster"></img>
            </div>
          </div>
          <div className="movie-genres d-flex px-3 py-4">
            {movie.genres.map((genre) => {
              return <Button key={genre.id} variant="outline-success">{genre.title}</Button>;
            })}
          </div>
          <div className="text-start px-3">{movie.description}</div>
          <div className="d-flex p-3">
            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="rgb(245, 197, 24)"
              >
                <g>
                  <rect fill="none" height="24" width="24" x="0" />
                  <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" />
                </g>
              </svg>
              <span className="ms-2">{movie.rating}/10</span>
            </div>
          </div>
          <div className="px-3">
            <hr></hr>
            <div className="">
              <div className="gap-3 d-flex">
                <span className="h6">Director{movie.directors.length > 1 && "s"}:</span>
                <div className="gap-3 d-inline-flex flex-wrap">
                  {movie.directors.map((directors) => {
                    return <span className="nowrap d-inline"  key={directors.id}>{directors.name}</span>
                  })}
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
              <div className="gap-3 d-inline-flex">
                <span className="h6">Writer{movie.writers.length > 1 && "s"}:</span>
                <div className="gap-3 d-inline-flex flex-wrap">
                  {movie.writers.map((writers) => {
                    return <span className="nowrap d-inline" key={writers.id}>{writers.name}</span>
                  })}
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
              <div className="d-flex">
                <span className="h6">Cast:</span>
                <div>
                  {/* {movie.cast.map((cast) => {
                    return <span>{cast.name}</span>
                  })} */}
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        </>
      )}
    </>
  );
}

export default Movie;
