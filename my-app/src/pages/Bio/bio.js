import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/esm/Spinner";
import { Link, withRouter, useParams, useLocation } from "react-router-dom";
import BioModel from "../../models/bio";

function Bio(props) {
   const API_PATH =
     "http://localhost/myapp/api/bio.php?bioId=";
//   const WRITER_API_PATH = "http://localhost/myapp/api/writers.php?writerId=";
//   const ACTOR_API_PATH = "http://localhost/myapp/api/actor.php?actorId=";
  const [bio, setBio] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let { id } = useParams();
  let location = useLocation();

  function getBio() {
    setIsLoading(true);
    
    let pageType = location.pathname.split("/")[1];
  
    fetch(`${API_PATH}${id}&bioType=${pageType}`, {
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
          setBio(new BioModel(data));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getBio();
  }, []);

  if (!bio) {
    return <div>Could not load bio</div>;
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
          <div className="bio-header movie-header text-start p-3">
            <h1 className="movie-title">{bio.name}</h1>
            <span>{bio.birthday.getFullYear()}</span>
          </div>
          {/* div className="position-relative"></div> */}

          <div className="text-start px-3 pt-3">{bio.description}</div>

          <hr></hr>
            <div className='px-3'>
                <span className='h6 '>Movie{bio.movies.length > 1 && "s"}:</span>
                {bio.movies.map(movie=>{
                    return (
                        <div key={movie.id} className='d-flex justify-content-between'>
                            <Link to={`/movie/${movie.id}`} ><span>{movie.title}</span></Link>
                            <span>{movie.year}</span>
                        </div>
                    )
                })}
            </div>
          <hr></hr>
        </>
      )}
    </>
  );
}

export default withRouter(Bio);
