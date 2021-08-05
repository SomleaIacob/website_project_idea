import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './body.css';
import ScrollingItemList from '../scrolling-item-list/scrolling-item-list';
import TheMask from '../../img/themasklarge.jpg';
import DumbDumber from '../../img/dumbanddumberlarge.jpg'
import TheTrumanshow from '../../img/thetrumanshowlarge.jpg'

function Body(){
    return (
    <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src={TheMask}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src={DumbDumber}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src={TheTrumanshow}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<ScrollingItemList title="Popular Movies"></ScrollingItemList>

<ScrollingItemList title="Newest Movies"></ScrollingItemList>
    </>
        ) 
}



export default Body;