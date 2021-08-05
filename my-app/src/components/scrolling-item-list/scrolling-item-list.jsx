import ScrollingItem from "../scrolling-item/scrolling-item";
import TheMask from '../../img/themaskcard.jpg';
import "./scrolling-item-list.css"

function ScrollingItemList(props){
    return (
        <>
        <div class="movie-list__header">
            <h3 class="list__title h5">{props.title}</h3>
            <button class="list__button">VIEW ALL</button>
        </div>
        <div class="movie-card-list">
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