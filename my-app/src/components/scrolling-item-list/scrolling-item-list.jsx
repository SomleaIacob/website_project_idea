import ScrollingItem from "../scrolling-item/scrolling-item";
import TheMask from '../../img/themaskcard.jpg';
import "./scrolling-item-list.css"
import DumbAndDumber from '../../img/dumbanddumbercard.jpg';
import BruceAlmighty from '../../img/bruce almightycard.jpg';
import EternalSunshineOfTheSpotlessMind from '../../img/eternal sunshine of the spotless mind card.jpg';
import TheTrueManShow from '../../img/thetrumanshowcard.jpg';
import TheBadBatch from '../../img/thebadbatchcard.jpg';

function ScrollingItemList(props){
    let moviePosters={
        "1":TheMask,
        "3":BruceAlmighty,
        "4":EternalSunshineOfTheSpotlessMind,
        "5":DumbAndDumber,
        "6":TheBadBatch,
        "7":TheTrueManShow
    }

    return (
        <>
        <div className="movie-list__header">
            <h3 className="list__title h5">{props.title}</h3>
            <button className="list__button">VIEW ALL</button>
        </div>
        <div className="movie-card-list">
            {props.movies.map((movie) => {
                return <ScrollingItem key={movie.id} movieId={movie.id} icon={moviePosters[movie.id]} score={movie.rating} title={movie.title} />
            })}
        </div>
        </>
    )
}

export default ScrollingItemList;