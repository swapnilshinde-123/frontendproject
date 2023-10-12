import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./Footer.css";
import slide1 from '../pages/images/blackwall.jpg';

export default function Footer() {
  return (
    <footer className="Footer stick-bottom  text-center text-white mx-auto " style={{ background: "#5595f4",width:"96%",margin:0, background: `url(${slide1})`}} >

      <div className="container-fluid p-1"  >

        <a className="btn btn-outline-light btn-floating m-2" href="https://www.facebook.com/login.php" type="button" target="_blank"
        ><i className="fa fa-facebook-f"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-2" href="https://twitter.com/login/" type="button" target="_blank"
        ><i className="fa fa-twitter"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-2" href="https://myaccount.google.com/" Type="button" target="_blank"
        ><i className="fa fa-google"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-2" href="https://www.instagram.com/" type="button" target="_blank"
        ><i className="fa fa-instagram"></i
        ></a>

        <a className="btn btn-outline-light btn-floating m-2" href="https://www.linkedin.com/uas/login" type="button" target="_blank"
        ><i className="fa fa-linkedin"></i
        ></a>


        <a className="btn btn-outline-light btn-floating m-2" href="https://github.com/login" type="button" target="_blank"
        ><i className="fa fa-github"></i
        ></a>


      </div>
      <div >
        <h2>Pg-Mates</h2>
        <p>Explore the website for much more Amazing experience !
        </p>
        <p>Contact No: 7972170846    &ensp; &ensp; &ensp;    Gmail: stshinde123@gmail.com</p>

      </div>


      <div className="text-center p-1" >
        © 2023 Copyright by Team-4 .
        
      </div>
<br />
    </footer>
  );
}
