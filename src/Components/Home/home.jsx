import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import myimage from '../../assets/myimg.jpg';
import './home.css';
import '../MediaCss/media.css';

const Home = () => {
    useEffect(() => {
        const typingelement = document.querySelector('.typing');
        if (typingelement) { 
          const typed = new Typed(typingelement, {
            strings: ["","","I'm Gulshan Saini"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
          });
          return () => {
            typed.destroy();
          };
        }
      }, []);
  return (
    <Container fluid className='home section'>
    <Row>
      <Col lg={12} xs={12} className='d-flex align-items-center flex-column'>
        <Image src={myimage} className='img object-fit-cover'/>
        <h1>Hello,<span className='typing'></span>, Frontend Developer</h1>
        <p>I am a dedicated frontend developer with skills in HTML, CSS, JavaScript, ReactJS. I'm a Fresher.</p>
        <div className="btns">
          <Link to='/contact'><button className='contact'>Contact With Me</button></Link>
          <a href='https://drive.google.com/file/d/1xX9KZ0JE6WRUKCAmtPm_Rb3Ox-rjCKQy/preview' target='blank' ><button className='resume' rel="noopener noreferrer">My Resume</button></a>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default Home;