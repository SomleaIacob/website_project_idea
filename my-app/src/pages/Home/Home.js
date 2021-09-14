import Spinner from "react-bootstrap/Spinner";
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";
import ScrollingItemList from "../../components/scrolling-item-list/scrolling-item-list";
import TheMask from "../../img/themasklarge.jpg";
import DumbDumber from "../../img/dumbanddumberlarge.jpg";
import TheTrumanshow from "../../img/thetrumanshowlarge.jpg";
import { useState, useEffect } from "react";


function Home() {
  const [popularMovies, setPopularMovies] = useState(null);
  const [latestMovies, setLatestMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const API_PATH = "http://localhost/myapp/api/allmovies.php";

  function getMovies() {
    setIsLoading(true);
    fetch(`${API_PATH}`, {
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
        setLatestMovies(data);
        let coppyOfMovies = [...data];
        coppyOfMovies.sort((movieA, movieB) => {
          debugger
          if (parseFloat(movieA.rating) < parseFloat(movieB.rating)) {
            return 1;
          }
          if (parseFloat(movieA.rating) > parseFloat(movieB.rating)) {
            return -1;
          }
          return 0;
        })

        setPopularMovies(coppyOfMovies);
        setIsLoading(false);
      })

      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getMovies();
  },[]);

  return (
    <>
    {isLoading === true && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={TheMask}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={DumbDumber}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={TheTrumanshow}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {popularMovies != null && <ScrollingItemList title="Popular Movies" movies={popularMovies}></ScrollingItemList>}

      {latestMovies != null && <ScrollingItemList title="Newest Movies" movies={latestMovies}></ScrollingItemList>}
    </>
  );
}

export default Home;
