import React from 'react'
import "../styles/navbar.css";
import pic from "../styles/pic1.jpg";
import pic2 from "../styles/pic2.jpg";
import { Carousel, Card, CardGroup, Button } from "react-bootstrap";
function Homepage() {
  return (
    <>
      
      <section className="promo-bar top">
       
        <marquee>  <p style={{color:"white",alignItems:"center",verticalAlign:"middle",paddingTop:"10px"}}>
         welcome to Fitness Center. Attain 2 day free Demo </p></marquee>
       
      </section>
      <section>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.fitnessfirst.net.in/sites/default/files/home/freestyle-1400x650.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>START YOUR JOURNEY WITH OUR</h3>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="	https://www.fitnessfirst.net.in/sites/default/files/home/FF-Banner-Homepage.jpg"

              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Freestyle Group Training</h3>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="	https://www.fitnessfirst.net.in/sites/default/files/home/FF-Banner-Homepage.jpg"

              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>BOOST YOUR STAMINA</h3>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </section>
      <div class="dummy_page">
        Mobile responsive footer
      </div>
      <section className="section">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={pic} />


          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.fitnessfirst.net.in/sites/all/themes/fitnessfirst_v2/images/fitness-first-in.jpg" />


          </Card>


        </CardGroup>

      </section>

      <section className="section1">
        <div className="">
          <h2>OUR HEALTH CLUB</h2>
          <p>Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
        </div>
        <Button variant="danger">Find a Club</Button>
      </section>
      <div className="gallery">
        <div className="viewport" styles={{ height: "auto" }}>
          <img src={pic2} alt="pic" style={{ opacity: "1" }} />
        </div>
      </div>

      <section className="section-insta">
        <div className="">
          <h2>Fitness First India On Instagram</h2>
          <p>Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
        </div>

      </section>
      <div class="dummy_page">
        Mobile responsive footer
      </div>

      <div class="footer">
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

export default Homepage
