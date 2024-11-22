import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from './components/ExampleCarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function QuoteTool() {
    return (
        <Carousel>
            <Carousel.Item>
                <div style={{ height: '300px', backgroundColor: 'gray' }}>
                    <h3>First slide content</h3>
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ height: '300px', backgroundColor: 'lightgray' }}>
                    <h3>Second slide content</h3>
                </div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ height: '300px', backgroundColor: 'darkgray' }}>
                    <h3>Third slide content</h3>
                </div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}