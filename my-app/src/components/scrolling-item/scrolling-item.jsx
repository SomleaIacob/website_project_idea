import "./scroling-item.css"

function ScrollingItem(props){
    return(
        <>
        <div className="movie-card">
            <div className="movie-card__img">
                <img src={props.icon} alt="" />
            </div>
            <span className="movie-card__score">
                {props.score}
            </span>
            <p className="movie-card__title">
                {props.title}
            </p>
        </div>
        </>
    )
}


export default ScrollingItem; 