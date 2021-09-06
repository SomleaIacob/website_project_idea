import "./scroling-item.css";
import { Link } from "react-router-dom";

function ScrollingItem(props) {
  return (
    <>
      <div className="movie-card">
        <Link className="link" to="/movie">
          <div className="movie-card__img">
            <img src={props.icon} alt="" />
          </div>
        </Link>
        <span className="movie-card__score">{props.score}</span>
        <p className="movie-card__title">{props.title}</p>
      </div>
    </>
  );
}

export default ScrollingItem;
