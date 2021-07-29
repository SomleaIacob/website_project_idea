import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './body.css';

function Body(){
    return (
    <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src="../../img/47aaa4df05f4907b3fa6cc871638289f.jpg"
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
      src="../../img/show-truman-wallpaper-preview.jpg"
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
      src="../../img/comedy-dumb-dumber-family-wallpaper-thumb.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </>
        ) 
}

export default Body;