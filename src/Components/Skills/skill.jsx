import React from 'react';
import './skill.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import iant from '../../assets/iant-logo.png';
import unified from '../../assets/unified1.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/JavaScript.png';
import react from '../../assets/react.png';
import boots from '../../assets/boottstrap.png';
import '../MediaCss/media.css';

const Skills = () => {
  return (
    <Container fluid className='section skill px-5'>
        <Row className='languages justify-content-center'>
            <Col lg={2} className='icon'>
              <img src={html} alt="HTML Logo" width='95px'/>
              <p>HTML5</p>
            </Col>
            <Col lg={2} className="icon">
              <img src={css} alt="CSS Logo" width='105px'/>
              <p>CSS</p>
            </Col>
            <Col lg={2} className="icon">
              <img src={boots} alt="ReactJs Logo" width='105px' />
              <p>Bootstrap</p>
            </Col>
            <Col lg={2} className="icon">
              <img src={js} alt="JavaScript Logo" width='135px'/>
              <p>JavaScript</p>
            </Col>
            <Col lg={2} className="icon">
              <img src={react} alt="ReactJs Logo" width='120px' />
              <p>ReactJs</p>
            </Col>
        </Row>
        <Row className='experience justify-content-center'>
            <Col lg={6} className='item'>
              <div className="image-wrapper">
                <Link to='https://www.unifiedmentor.com/' target='blank'><img src={unified} alt="Unified Mentor" width='90px' /></Link>
              </div>
              <div className="detail">
                <h3>FrontEnd Developer Internship</h3>
                <h3>(Unified Mentor)</h3>
                <h4>Jan-2025, Remote</h4>
                <p>Worked on Real World Projects</p>
              </div>
            </Col>
            <Col lg={6} className='item'>
              <div className="image-wrapper">
                <Link to='https://iantindia.com/' target='blank'><img src={iant} alt="Iant" width='100px'/></Link>
              </div>
              <div className="detail">
                <h3>Certified Software Programmer</h3>
                <h3>(IANT)</h3>
                <h4>2022-2024, Jaipur</h4>
                <p>Learned Many Different Technologies</p>
              </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Skills;