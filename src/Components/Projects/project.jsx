import React from 'react';
import '../MediaCss/media.css';
import './project.css';
import restro from '../../assets/Restro.png';
import blink from '../../assets/blink.png';
import port from '../../assets/portfolio.png';
import gym from '../../assets/gym.png';
import bcci from '../../assets/bcci.png';
import amazon from '../../assets/amazon.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function UncontrolledExample() {
  return (
    <Container fluid className='project section'>
      <h2 className='ms-4 fw-bold'>My Latest Projects</h2>
      <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-wrapper">
              <div className="card">
                <img src={restro} className="card-img-top" alt="..." />
                <div className="card-body text-end">
                  <div className="text-center">
                    <h5 className="card-title">Food Ordering Website</h5>
                    <p className="card-text">Crafted with clean code and modern UI — built with ❤️ using ReactJS & pure passion.</p>
                  </div>
                  <Link className='btn mt-2' to="https://omgrestro.netlify.app/" target='_blank'>Visit<FontAwesomeIcon icon={faRightFromBracket} className='icon' /></Link>
                </div>
              </div>
              <div className="card">
                <img src={bcci} className="card-img-top" alt="..." />
                <div className="card-body text-end">
                  <div className="text-center">
                    <h5 className="card-title">BCCI Clone</h5>
                    <p className="card-text">❤️ Cricket ka junoon + Code ka passion = A pixel-perfect BCCI Clone website!</p>
                  </div>
                  <Link className='btn mt-2' to="https://bcci-tv.netlify.app/" target='_blank'>Visit<FontAwesomeIcon icon={faRightFromBracket} className='icon' /></Link>
                </div>
              </div>
              <div className="card">
                <img src={blink} className="card-img-top" alt="..." />
                <div className="card-body text-end">
                  <div className="text-center">
                    <h5 className="card-title">Blinkit Clone</h5>
                    <p className="card-text">A blinkit clone made with a perfect combination of reactjs and bootstrap.</p>
                  </div>
                  <Link className='btn mt-2' to="https://blinkit-grocery-app.netlify.app/" target='_blank'>Visit<FontAwesomeIcon icon={faRightFromBracket} className='icon' /></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card-wrapper">
              <div className="card" >
                <img src={gym} className="card-img-top" alt="..." />
                <div className="card-body text-end">
                  <div className="text-center">
                    <h5 className="card-title">Gym Website</h5>
                    <p className="card-text">Fitness Plus Gym — a dynamic, animated, and responsive website crafted with ReactJS.</p>
                  </div>
                  <Link className='btn mt-2' to="https://fitnessplusgym.netlify.app/" target='_blank'>Visit<FontAwesomeIcon icon={faRightFromBracket} className='icon' /></Link>
                </div>
              </div>
              <div className="card">
                <img src={port} className="card-img-top" alt="..." />
                <div className="card-body text-end">
                  <div className="text-center">
                    <h5 className="card-title">Personal Portfolio</h5>
                    <p className="card-text">Crafted with HTML, CSS, and JavaScript — a portfolio highlighting my journey and skills in Frontend dev.</p>
                  </div>
                  <Link className='btn mt-2' to="https://res-my-portfolio.netlify.app/" target='_blank'>Visit<FontAwesomeIcon icon={faRightFromBracket} className='icon' /></Link>
                </div>
              </div>
              <div className="card">
                <img src={amazon} className="card-img-top" alt="..." />
                <div className="card-body text-end">
                  <div className="text-center">
                    <h5 className="card-title">Amazon Clone</h5>
                    <p className="card-text">A responsive Amazon clone — built with HTML, CSS & JavaScript for e-commerce experience.</p>
                  </div>
                  <Link className='btn mt-2' to="https://amazon-clone-webpage.netlify.app/" target='_blank'>Visit<FontAwesomeIcon icon={faRightFromBracket} className='icon' /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Container>
  );
}

export default UncontrolledExample;
