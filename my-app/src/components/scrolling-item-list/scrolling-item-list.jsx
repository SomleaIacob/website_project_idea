import ScrollingItem from "../scrolling-item/scrolling-item";
import TheMask from '../../img/themaskcard.jpg';
import "./scrolling-item-list.css"

function ScrollingItemList(props){
    return (
        <>
        <div className="movie-list__header">
            <h3 className="list__title h5">{props.title}</h3>
            <button className="list__button">VIEW ALL</button>
        </div>
        <div className="movie-card-list">
        <ScrollingItem icon={TheMask} score="80%" title="The Mask" />
        <ScrollingItem icon={TheMask} score="80%" title="The Mask" />
        <ScrollingItem icon={TheMask} score="80%" title="The Mask" />
        <ScrollingItem icon={TheMask} score="80%" title="The Mask" />
        <ScrollingItem icon={TheMask} score="80%" title="The Mask" />
        <ScrollingItem icon={TheMask} score="80%" title="The Mask" />
        </div>
        </>
    )
}

export default ScrollingItemList;