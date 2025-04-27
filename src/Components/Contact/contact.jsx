import React, {useRef, useState} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume, faLocationDot , faCode} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn ,faGithub ,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import './contact.css';

const Contact = () => {
  const formRef=useRef(null);
  const [validated, setValidated] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
  
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      
      alert("Please fill all the required fields before submitting!");
      return;
    }
  
    setValidated(true);
  
    const formData = new FormData(event.target);
    formData.append("access_key", "ae99d394-5c82-41a6-a567-8ead2bce9284");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
  
    if (res.success) {
      setShow(true);   
      resetbtn();      
    }
    else {
      alert("Something went wrong. Please try again."); 
    }
  };
  

  function resetbtn(){
    if(formRef.current){
      formRef.current.reset(); 
    }
    setValidated(false); 
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    
    <Container fluid className='section contact'>
      <Container>
        <Row xs={12}>
          <h1 className='fw-bold text-center'>Get in touch</h1>
        </Row>
        <Row>
          <Col lg={6} xs={12} className='leftPart py-5'>
            <h2 className='fw-bold'>Let's talk</h2> 
            <p>I'm Currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. you can contact anytime.  </p>
            <div className="personal-info">
              <p><span><FontAwesomeIcon icon={faEnvelope}/></span>gulshansaini0125@gmail.com</p>
              <p><span><FontAwesomeIcon icon={faPhoneVolume}/></span>+91&nbsp; 7014957196</p>
              <p><span><FontAwesomeIcon icon={faLocationDot}/></span>Kotputli-Bahror(RAJ)</p>
            </div>
            <div className="social">
              <a href='https://www.linkedin.com/in/gulshan-saini-6769482b4/' target='blank' className='icon' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/></a>
              <a href='https://github.com/SainiGulshan12/' target='blank' className='icon' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
              <a href='http://localhost:3000/contact' className='icon'><FontAwesomeIcon icon={faCode} /></a>
              <a href='mailto:gulshansaini0125@gmail.com?subject=Hello%20Gulshan&body=I%20wanted%20to%20connect%20with%20you.' target='blank' className='icon'><FontAwesomeIcon icon={faEnvelope}/></a>
              <a href='https://web.whatsapp.com/' target='blank' className='icon' rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp}/></a>
            </div> 
          </Col>
          <Col lg={6} xs={12} className='py-4 ps-5'>
          <Form noValidate validated={validated} ref={formRef} onSubmit={handleFormSubmit} className='rightPart'>
            <Row className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Control required type="text" name='firstname' className='inputf' placeholder="First name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Control required type="text" name='lastname' className='inputf' placeholder="Last name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-2" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" name="email" className='input' placeholder="abc@gmail.com" />
              <Form.Control.Feedback>Great!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Write your message here</Form.Label>
              <Form.Control as="textarea" name="message" className='textarea' rows={5} placeholder='Enter your message'/>
            </Form.Group>

            <Form.Group className="mb-1" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out!" />
            </Form.Group>

            <Button type="submit">Submit Now</Button>
            <Button type='reset' className='reset' onClick={resetbtn}>Reset</Button>
                
            {/* Alert Modal Start  */}   
              <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                  <Modal.Title>Form Submission</Modal.Title>
                </Modal.Header>
                <Modal.Body>Form is Submitted Successfully ✅</Modal.Body>
                  <Modal.Footer>
                    <Button variant="btn closebtn " onClick={handleClose}>Close</Button>
                  </Modal.Footer>
              </Modal>
            {/* Alert Modal Close */}
          </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  )
    
}

export default Contact