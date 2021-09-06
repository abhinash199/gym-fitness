import React from 'react'
import { Carousel, Container, Col, Row } from "react-bootstrap";
import "../styles/facilities.css";
import "../styles/navbar.css"
function Facilities() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-block"
                        src="https://www.fitnessfirst.net.in/try-us/img/try-us4.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>START YOUR JOURNEY WITH OUR</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-block"
                        src="	https://www.fitnessfirst.net.in/try-us/img/try-us3.jpg"

                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Freestyle Group Training</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-block"
                        src="https://www.fitnessfirst.net.in/try-us/img/try-us2.jpg"

                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>BOOST YOUR STAMINA</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section id="content" role="main" class="mb-top relative">
                <article class="p-top">
                    <p class="center lead">Fitness First feature progressive programs with world class fitness equipment, trainers and nutrition counselors to help you your fitness further. We have the widest range of group fitness classes such Yoga, Aerobics, Zumba, Les Mills favorites &amp; much more.</p>

                </article>

                <div>
                    <h2 class="pb1">GYM FACILITIES</h2>

                    <Container>
                        <Row>
                            <Col><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCm499VGvoBu6ofCmYZRTmEs-WHKN8_eiHkA&usqp=CAU" style={{ width: "250px", height: "250px" }} /><br></br>Yoga
                            </Col>

                            <Col><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq3wBf0rovqL8o7h2F-rpmAi-zTrC7XSWwX67PdqDr-8AO3uVBOWR6o4pd_aER0JhTOSk&usqp=CAU" style={{ width: "250px", height: "250px" }} /><br></br>Cardio</Col>

                            <Col><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQcjPFW837wTh20P-UMc2ftsNb0LEICQbEQ&usqp=CAU" style={{ width: "250px", height: "250px" }} /><br></br>Gym Floor</Col>

                        </Row>
                        <Row>
                            <Col><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9T4zvHRCzKILCsSgCiI50eAL1Ep22i6_QQGNQJIDZTFlakbI3hvTZpQXJrRqnGlSK0k&usqp=CAU" style={{ width: "250px", height: "250px" }} /><br></br>Group Exercise
                            </Col>

                            <Col><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4v_jPPTEhqBB8d_WrvE7px10uqraL3aq9w&usqp=CAU" style={{ width: "250px", height: "250px" }} /><br></br>Freestyle</Col>

                            <Col><img src="https://cdn1.coachmag.co.uk/sites/coachmag/files/2016/08/exercise-bike-workouts.jpg" style={{ width: "250px", height: "250px" }} /><br></br>cycling</Col>

                        </Row>
                        <Row>
                            <Col><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCm499VGvoBu6ofCmYZRTmEs-WHKN8_eiHkA&usqp=CAU" style={{ width: "250px", height: "250px" }} /><br></br>GYM Floor
                            </Col>

                            <Col><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/treadmill-testing-0367-1578930314.jpg?crop=0.635xw:0.953xh;0.0657xw,0&resize=480:*" style={{ width: "250px", height: "250px" }} /><br></br>Running</Col>

                            <Col><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgzifDtI6Pro4tynbjJn6Vl25vm9u33_9Fg&usqp=CAU" style={{ width: "250px", height: "250px" }} /><br></br>Meditation</Col>

                        </Row>
                    </Container>
                </div>     
                
      </section>

     

      <div class="footer footer-fac">
        <div class="contain">
          <div class="col">
            <h1>Company</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div class="col">
            <h1>Products</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div class="col">
            <h1>Accounts</h1>
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Services</li>
              <li>Social</li>
              <li>Get in touch</li>
            </ul>
          </div>
          <div class="col">
            <h1>Resources</h1>
            <ul>
              <li>Webmail</li>
              <li>Redeem code</li>
              <li>WHOIS lookup</li>
              <li>Site map</li>
              <li>Web templates</li>
              <li>Email templates</li>
            </ul>
          </div>
          <div class="col">
            <h1>Support</h1>
            <ul>
              <li>Contact us</li>
              <li>Web chat</li>
              <li>Open ticket</li>
            </ul>
          </div>
          <div class="col social">
            <h1>Social</h1>
            <ul>
              <li><img src="https://svgshare.com/i/5fq.svg" width="32" style={{ width: "32px;" }} /></li>
              <li><img src="https://svgshare.com/i/5eA.svg" width="32" style={{ width: "32px;" }} /></li>
              <li><img src="https://svgshare.com/i/5f_.svg" width="32" style={{ width: "32px;" }} /></li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
        </>
    )
}

export default Facilities
