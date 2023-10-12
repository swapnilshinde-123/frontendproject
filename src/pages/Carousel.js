import slide1 from './images/home1.jpg';
import slide2 from './images/home2.jpg';
import slide3 from './images/home4.jpg';
import { Carousel, ButtonGroup, Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Carouselslide() {
  const navigate=useNavigate()
  const state=useSelector((state)=>state);
  return (
    <div className='mt-5'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1} height={600} width={1000}
            alt="First slide"
          />
          <Carousel.Caption>
          {state.loggedin.IsLoggedIn ? "":(
            <ButtonGroup size="lg" className="mb-2">
              <Button onClick={e=>navigate('/login')} variant="info gradient me-2">Login</Button>
              <Button variant="success gradient" onClick={e=>{navigate('/cregister')}}>Signup</Button>
            </ButtonGroup>
            )}
            <p className="text-white-monospace fw-bold  bg-secondary p-1 "> 
            user can book the bed from our application easily, so that time and money 
will save. user can aslo view photos of apartment and book that bed and cancel 
it also. </p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-98"
            src={slide2} height={600} width={1500}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark fw-bold  bg-warning  p-1 ">Home Sweet Home</h3>
            <p className="text-dark fw-bold  bg-warning p-1 ">Home is where love resides, memories are created, friends always belong, <br />
              and laughter never ends.” “A house is made of bricks and beams</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-99 "
            src={slide3} height={600} width={1600}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark fw-bold  bg-success p-1 ">There’s no place like home</h3>
            <p className="text-dark fw-bold  bg-success p-1 ">You will never be completely at home again, because part of your heart <br />
              will always be elsewhere. That is the price you pay for the richness of loving and knowing people in more than one place</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
