import React from 'react';
import './about.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {FaCss3, FaHtml5, FaJsSquare, FaReact} from 'react-icons/fa';
import boot from '../../assets/boottstrap.png';
import '../MediaCss/media.css';

const About = () => {
  return (
    <Container fluid className='section about px-5'>
      <h1>About Me</h1>
      <Row  className='content'>
        <Col lg={8} xs={12} className='content'>
          <div className="info">
            <h3>I'm Gulshan Saini And I am Fresher</h3>
            <p>I am a dedicated frontend developer with skills in HTML, CSS, JavaScript, ReactJS. Currently I am a fresher and looking for opportunities to start my career. I assure you that my towards my work will never let you down and my aim is to make a career in a renowned company with my dedicated efforts and associate myself with an organization that will give me the opportunity. I am always ready to learn new skills and constantly upgrade myself as per the market trends.</p>
            <div className="personal-info">
              <h3>Personal information </h3>
              <p><span>Email</span> : gulshansaini0125@gmail.com</p>
              <p><span>Age</span> : 18+</p>
              <p><span>Contact no</span> : +91 7014957196</p>
              <p><span>City </span>: Kotputli-Bahror</p>
            </div>
          </div>   
        </Col>
        <Col lg={4} className='circle'>
            <div><FaHtml5 className='icon1'/></div>
            <div><FaCss3 className='icon2'/></div>
            <div><FaJsSquare className='icon3'/></div>
            <div><FaReact className='icon4'/></div>
            <div><img src={boot} className='img-fluid' alt='bootstrap'/></div>
        </Col>
      </Row>
    </Container>
  )
}

export default About;