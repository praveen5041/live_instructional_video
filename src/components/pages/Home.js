import React from 'react'
import mail from '../images/email.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import AOS from 'aos'
import { NavLink } from 'react-router-dom'
import "aos/dist/aos.css";
import './Home.css'
import instruct from '../images/instruction.jpg'
import { Container,  Button, Form } from "react-bootstrap";
import { useState } from 'react'
import Axios from 'axios'
function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const data = {
      name,
      email,
      message,
    };
    Axios({
      method: "POST",
     // url: "http://localhost:5000/user/message",
      url:"https://liveinstructor.onrender.com/user/message",
      data: data,
       
    })
      .then((res) => {
         alert("Message Sent")
      })
      .catch((err) => {
         alert("all fields required")
      });
    setName("");
    setEmail("");
    setMessage("");
  }

  AOS.init()
  return (
    <div>
      <div className='main'  data-aos="fade-right">
      <div className="intro">
          <div className="part-1">
            <div className="title">
              <h1 id="title-h">Live Instructions</h1>
              <p>No-Brainer😕. Soft Skills📃. Physical World🤩.</p>
              <NavLink className="nav-item"
                variant="custom"
                size="lg"
                to='/signup'
                // onClick={() => {
                //   ref.current.scrollIntoView({ behavior: "smooth" });
                // }}
              >
                Get Started
              </NavLink>
            </div>
          </div>

          <div className="part-2">
            <div className="image">
              <img
                src={instruct}
                style={{ width: "500px", height: "500px" }}
                alt=""
              />
            </div>
          </div>
      </div>
    </div>

    <div data-aos="fade-right">
        <Container fluid>
          <div className="total-contact-form">
            <div className="contact-title">
              <h6 className="section-heading"> Contact Form 📨📬</h6>
              <p>
                If there is something you want to suggest or may be just a hello
                do reach out.
              </p>
            </div>
            <div className="contact-form">
              <Form>
                <Form.Label>Name :</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address :</Form.Label>
                  <Form.Control
                    type="email"
                    size="lg"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message :</Form.Label>
                  <Form.Control
                    size="lg"
                    as="textarea"
                    rows={6}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </Form.Group>
                <Button variant="custom" onClick={sendMessage}>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </div>



    <div className='footer' data-aos="fade-left">
    <div className="social-icon">
   <a
     href="https://github.com/praveen5041"
     target="_blank"
     rel="noopener noreferrer"
   >
     <img src={github} className="icon github" alt="" />
   </a>
   <a
     href="https://www.linkedin.com/in/praveen-midathapally-3a8157226/"
     target="_blank"
     rel="noopener noreferrer"
   >
     <img src={linkedin} className="icon" alt="" />
   </a>
   
   <a
     href="mailto:midathapallypraveen123@gmail.com"
     target="_blank"
     rel="noopener noreferrer"
   >
     <img src={mail} className="icon" alt="" />
   </a>
 </div>
 <div className="personal-info">
   <p>Created with ❤️ using MERN by </p>
   <h4>
     <span className="symbol">&#60;</span>Praveen Midathapally
     <span className="symbol">/&#62;</span>
   </h4>
   <h6>Full Stack Developer</h6>
   
 </div>
 <h5 style={{ textAlign: "center" }}>
   Copyright @2023 Praveen Midathapally. All rights reserved.
 </h5>
    </div>

    </div>
  )
}

export default Home