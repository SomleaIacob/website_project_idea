import "./scroling-item.css"

function ScrollingItem(props){
    return(
        <>
        <div class="movie-card">
            <div class="movie-card__img">
                <img src={props.icon} alt="" />
            </div>
            <span class="movie-card__score">
                {props.score}
            </span>
            <p class="movie-card__title">
                {props.title}
            </p>
        </div>
        </>
    )
}


export default ScrollingItem; 