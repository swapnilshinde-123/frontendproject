import { ButtonGroup, Button } from 'react-bootstrap';
import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import slide1 from './images/wall.jpg';

export default function Aboutus() {

  {/* This is for feedback button*/}
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 {/* This is for Help Center button*/}
  const [view, setView] = useState(false);

  const handleClosed = () => setView(false);
  const handleView = () => setView(true);

   {/* This is for T&C Apply button*/}
   const [showtc, setShowtc] = useState(false);

   const handleClosetc = () => setShowtc(false);
   const handleShowtc = () => setShowtc(true);


  return (
    <div className="mt-3 mx-auto p-4 text-center " style={{width:"96%",background:"white" , background: `url(${slide1})`}} >
      
      <div className="fw-bold fs-2 text-dark" id="aboutus">About Pg-Mates</div>
      <p className='px-5 text-dark'> Launched in 2023, Pg-Mates is India’s No.1 online  renting residential properties. We have designed this website with  the purpose of easily availability of sharing 
rooms for students , office workers, migrants etc. With the help of this website we can easily search for rental rooms.
      </p>
    </div>
  );
}
